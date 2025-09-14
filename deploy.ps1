# deploy.ps1 - Windows/PowerShell 5+ safe deploy for Vite -> gh-pages

$ErrorActionPreference = "Stop"

# 0) Build on main
npm run build

# 1) Clean any stale worktree/folder
git worktree prune
if (Test-Path ".gh-pages") { Remove-Item -Recurse -Force ".gh-pages" }

# 2) Create gh-pages worktree
git fetch origin
git worktree add -B gh-pages .gh-pages origin/gh-pages

# 3) Sanity check to prevent committing on main by mistake
Push-Location .gh-pages
$branch = (git rev-parse --abbrev-ref HEAD).Trim()
if ($branch -ne "gh-pages") {
  Pop-Location
  throw "Worktree not on gh-pages (found '$branch'). Aborting."
}
Pop-Location

# 4) Copy build -> worktree
robocopy dist .gh-pages /MIR | Out-Null
New-Item .gh-pages\.nojekyll -ItemType File -Force | Out-Null

# 5) Commit & push from inside worktree
Push-Location .gh-pages
git add -A
$stamp = (Get-Date).ToUniversalTime().ToString("s") + "Z"
git commit -m "Deploy $stamp" 2>$null
if ($LASTEXITCODE -ne 0) { Write-Host "Nothing to commit (no changes)" }
git push origin gh-pages
Pop-Location

# 6) Cleanup
if (Test-Path ".gh-pages\.git") {
  git worktree remove .gh-pages
} else {
  # If worktree metadata went missing (rare), delete the folder
  Remove-Item -Recurse -Force ".gh-pages"
}

Write-Host "✅ Deployed to gh-pages"
