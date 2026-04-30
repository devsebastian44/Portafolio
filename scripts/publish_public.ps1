# =============================================================================
# scripts/publish_public.ps1 - VERSIÓN DEFINITIVA (SENIOR)
# Sincronización Segura: Local -> GitHub (Sanitizado)
# =============================================================================

Write-Host "[*] Iniciando sincronización profesional del Portafolio..." -ForegroundColor Cyan

# 1. Validaciones Iniciales (Pre-vuelo)
$currentBranch = git rev-parse --abbrev-ref HEAD
if ($currentBranch -ne "main") {
    Write-Host "[!] Error: Debes estar en 'main' para publicar." -ForegroundColor Red
    exit
}

if (git status --porcelain) {
    Write-Host "[!] Tienes cambios sin guardar. Haz commit o stash antes de publicar." -ForegroundColor Yellow
    exit
}

# 2. Limpieza Local Previa (Evitar basura en el commit)
Write-Host "[*] Asegurando estado limpio del repositorio local..." -ForegroundColor Yellow
Remove-Item -Path "npm-debug.log*", "yarn-error.log*", "pnpm-debug.log*" -Force -ErrorAction SilentlyContinue
# No eliminamos node_modules para no romper el entorno local, pero limpiamos logs.



# 4. Estrategia de Rama Pública (Aislamiento de Seguridad)
Write-Host "[*] Creando release sanitizado en rama 'public'..."
git checkout -B public main

# 5. Filtrado de Archivos (Lo que NO va a GitHub)
Write-Host "[*] Aplicando filtros de seguridad y DevSecOps..." -ForegroundColor Cyan
# Eliminamos lo que es exclusivo del laboratorio privado (pruebas, tests, pipeline)
git rm -r --cached tests/ -q -f 2>$null
git rm -r --cached scripts/ -q -f 2>$null

# 6. Commit de Lanzamiento y Push a GitHub
Write-Host "[*] Preparando commit de release público..."
git commit -m "docs: release update to public portfolio (sanitized)" --allow-empty
Write-Host "[*] Subiendo a GitHub (origin)..." -ForegroundColor Green
git push origin public:main --force

# 7. Retorno Seguro al Entorno de Trabajo
Write-Host "[*] Volviendo al Laboratorio privado (main)..."
git checkout main -f
# git clean -fdx 2>$null # Comentado para evitar destruir cache como node_modules o .astro en local

Write-Host "[*] Portafolio público en GitHub actualizado." -ForegroundColor Green
