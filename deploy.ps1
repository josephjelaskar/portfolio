# deploy.ps1 - Deploy Vite build to gh-pages (Windows safe)

$ErrorActionPreference = "Stop"

# 0) Build on main
npm run build

# 1) Prune stale worktrees and clean old folder
git worktree prune
if (Test-Path ".gh-pages") { Remove-Item -Recurse -Force ".gh-pages" }

# 2) Create gh-pages worktree
git fetch origin
git worktree add -B gh-pages .gh-pages origin/gh-pages

# 3) Copy dist/ into worktree
robocopy dist .gh-pages /MIR | Out-Null

# 4) Prevent Jekyll processing
New-Item .gh-pages\.nojekyll -ItemType File -Force | Out-Null

# 5) Commit & push from inside worktree
Push-Location .gh-pages
git add -A
$stamp = (Get-Date).ToUniversalTime().ToString("s") + "Z"
git commit -m "Deploy $stamp" 2>$null
if ($LASTEXITCODE -ne 0) { Write-Host "Nothing to commit (no changes)" }
git push origin gh-pages
Pop-Location

# 6) Remove local worktree directory
git worktree remove .gh-pages