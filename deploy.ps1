# deploy.ps1 - Safe deploy Vite -> gh-pages (always acts in worktree)

$ErrorActionPreference = "Stop"

# 0) Build on main
npm run build

# 1) Clean any stale state
git worktree prune
if (Test-Path ".gh-pages") { Remove-Item -Recurse -Force ".gh-pages" }

# 2) Create gh-pages worktree
git fetch origin
git worktree add -B gh-pages .gh-pages origin/gh-pages

# 3) Copy build -> worktree and add .nojekyll
robocopy dist .gh-pages /MIR | Out-Null
New-Item .gh-pages\.nojekyll -ItemType File -Force | Out-Null

# 4) Commit & push strictly inside the worktree
$stamp = (Get-Date).ToUniversalTime().ToString("s") + "Z"
git -C .gh-pages add -A
# commit may be a no-op if no changes
$null = git -C .gh-pages commit -m "Deploy $stamp" 2>$null
git -C .gh-pages push origin gh-pages

# 5) Clean up the local worktree dir
if (Test-Path ".gh-pages\.git") { git worktree remove .gh-pages } else { Remove-Item -Recurse -Force ".gh-pages" }

Write-Host "✅ Deployed to gh-pages"
