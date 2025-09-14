npm run build

git fetch origin
git worktree add -B gh-pages .gh-pages origin/gh-pages 2>$null `
  ; if ($LASTEXITCODE -ne 0) { git worktree add -B gh-pages .gh-pages main }

Get-ChildItem .gh-pages -Force -Exclude ".git" | Remove-Item -Recurse -Force
robocopy dist .gh-pages /MIR
New-Item .gh-pages\.nojekyll -ItemType File -Force | Out-Null

Push-Location .gh-pages
git add -A
git commit -m "Deploy $(Get-Date -AsUTC -Format s)Z" 2>$null
git push origin gh-pages
Pop-Location

git worktree remove .gh-pages
Write-Host "✅ Deployed to gh-pages"
