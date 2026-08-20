# Estructura Codex del Proyecto

Esta carpeta documenta configuracion segura para trabajar con Codex en este repositorio.

No es una copia de la carpeta global `~/.codex`. La carpeta global contiene archivos internos, credenciales, cache, sesiones y bases de datos que no deben subirse al repositorio.

## Archivos seguros para versionar

- `.codex/README.md`: explica como usar esta carpeta.
- `.codex/config.example.toml`: plantilla de configuracion sin secretos.
- `AGENTS.md`: instrucciones del proyecto para el agente.

## Archivos que no debes crear a mano ni subir

- `auth.json`
- `installation_id`
- `state_*.sqlite`
- `logs_*.sqlite`
- `goals_*.sqlite`
- `queue_*.sqlite`
- `memories_*.sqlite`
- `session_index.jsonl`
- carpetas como `sessions/`, `cache/`, `plugins/`, `.sandbox/`

Esos archivos pertenecen a la configuracion global o al estado interno de Codex.

## Proceso recomendado

1. Mantener instrucciones del proyecto en `AGENTS.md`.
2. Usar `.codex/config.example.toml` como referencia.
3. Configurar la instalacion real en `~/.codex/config.toml` si necesitas cambiar modelo, proveedor o preferencias globales.
4. Autenticar Codex con el flujo oficial de login o API key, no creando `auth.json` manualmente.

