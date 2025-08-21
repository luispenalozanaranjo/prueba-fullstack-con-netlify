# Prueba Fullstack — Nuxt 3 + Pinia + Sass + Moleculer/Express + MongoDB

## Levantar todo con Docker
```bash
docker compose up --build
# Front: http://localhost:3000
# Back : http://localhost:3001/api
```

## Front (Nuxt 3)
Directorio: `/frontend` — Config env: `NUXT_PUBLIC_API_BASE`

## Back (Moleculer por defecto)
Directorio: `/backend` — Env: `PORT`, `MONGODB_URI`, `BASIC_AUTH_*`

## Back alternativo (Express)
Directorio: `/backend-express` — misma API

## Deploy
- Front: Vercel (root `/frontend`)
- Back: Render/Fly/Heroku (root `/backend` o `/backend-express`)


## Netlify envs

Las variables públicas del frontend se pueden definir en el UI de Netlify o en `netlify.toml`:

- `NUXT_PUBLIC_API_BASE` — URL del backend.
- `NUXT_PUBLIC_BASIC_USER` — usuario básico (solo pruebas).
- `NUXT_PUBLIC_BASIC_PASS` — contraseña básica (solo pruebas).
- `NUXT_PUBLIC_LOG_LEVEL` — `info`/`debug`.

> Evita `LOG_LEVEL` en el cliente; si existe en Netlify, elimínala.
