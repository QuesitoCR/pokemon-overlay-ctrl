# pokemon-overlay-ctrl

Panel de control web para el overlay de Pokémon de StreamElements.  
Cualquier persona con el link puede editar los slots sin necesitar cuenta de SE.

---

## Archivos

```
pokemon-overlay-ctrl/
├── server.js          ← Backend Express (corre en Render)
├── package.json
├── slots.json         ← Se crea automático al primer cambio
├── public/
│   └── index.html     ← Panel de control (página pública)
└── overlay.js         ← JS del widget de StreamElements (modificado)
```

---

## Deploy en Render — paso a paso

### 1. Subí el repo a GitHub

```bash
git init
git add .
git commit -m "pokemon overlay ctrl"
git remote add origin https://github.com/TU-USUARIO/pokemon-overlay-ctrl.git
git push -u origin main
```

### 2. Creá el servicio en Render

1. Entrá a https://render.com y logeate con GitHub
2. **New → Web Service**
3. Seleccioná tu repo `pokemon-overlay-ctrl`
4. Configurá:
   - **Name:** `pokemon-overlay-ctrl` (o el que quieras)
   - **Runtime:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
   - **Instance Type:** `Free`
5. Hacé clic en **Create Web Service**
6. Esperá el deploy — Render te da una URL tipo:  
   `https://pokemon-overlay-ctrl.onrender.com`

> ⚠️ El plan Free de Render "duerme" el servidor si no recibe tráfico por 15 min.  
> Al volver a entrar puede tardar ~30 segundos en despertar. Es normal.

---

### 3. Actualizá el overlay en StreamElements

1. Abrí el archivo `overlay.js` de este repo
2. Cambiá la línea:
   ```js
   const BACKEND_URL = "https://TU-APP.onrender.com";
   ```
   por tu URL real de Render, por ejemplo:
   ```js
   const BACKEND_URL = "https://pokemon-overlay-ctrl.onrender.com";
   ```
3. En StreamElements, editá tu widget → **Custom JS** → pegá todo el contenido de `overlay.js`
4. Guardá y cerrá

---

### 4. Compartí el panel

El panel de control es simplemente:
```
https://pokemon-overlay-ctrl.onrender.com
```

Cualquiera con ese link puede editar los slots.  
El overlay se actualiza solo cada 3 segundos.

---

## Funcionamiento

```
Panel web  →  POST /slots  →  Backend Render  ←  GET /slots  ←  Overlay SE
(público)                      (Node.js)                         (polling c/3s)
```

Los comandos del chat (`!slot1 pikachu`, `!borrar slot1`, `!reset`) siguen funcionando igual — ahora también escriben al backend para que el panel web se sincronice.

---

## Personalizar intervalo de polling

En `overlay.js`:
```js
const POLL_INTERVAL = 3000; // milisegundos — bajá para más velocidad
```

En `public/index.html`, al final del script:
```js
pollTimer = setInterval(syncFromServer, 4000); // misma idea
```
