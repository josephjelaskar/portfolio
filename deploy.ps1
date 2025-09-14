# deploy.ps1 - Deploy Vite build to gh-pages (Windows/PowerShell 5+)

$ErrorActionPreference = "Stop"

# 0) Build on main
npm run build

# 1) Ensure gh-pages worktree exists
git fetch origin
try {
  git worktree add -B gh-pages .gh-pages origin/gh-pages
} catch {
  git worktree add -B gh-pages .gh-pages gh-pages
}

# 2) Mirror dist/ -> .gh-pages/
Get-ChildItem .gh-pages -Force -Exclude ".git" | Remove-Item -Recurse -Force
robocopy dist .gh-pages /MIR | Out-Null

# 3) Prevent Jekyll processing
New-Item .gh-pages\.nojekyll -ItemType File -Force | Out-Null

# 4) Commit & push FROM the worktree directory
Push-Location .gh-pages
git add -A
$stamp = (Get-Date).ToUniversalTime().ToString("s") + "Z"
git commit -m "Deploy $stamp"
if ($LASTEXITCODE -ne 0) {
  Write-Host "Nothing to commit (no changes)"
}
git push origin gh-pages
Pop-Location

# 5) Optional cleanup (remove local worktree directory)
git worktree remove .gh-pages
Write-Host "✅ Deployed to gh-pages"