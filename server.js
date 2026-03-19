const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, "slots.json");
const SLOT_COUNT = 6;

// ── State ──────────────────────────────────────────────
function emptySlots() {
  return Array.from({ length: SLOT_COUNT }, () => ({ name: "", img: "" }));
}

function loadSlots() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, "utf8");
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length === SLOT_COUNT) return parsed;
    }
  } catch (_) {}
  return emptySlots();
}

function saveSlots(slots) {
  try { fs.writeFileSync(DATA_FILE, JSON.stringify(slots, null, 2)); } catch (_) {}
}

let slots = loadSlots();

// ── Middleware ─────────────────────────────────────────
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// CORS — permite que el overlay de SE haga fetch a este servidor
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.sendStatus(204);
  next();
});

// ── API ────────────────────────────────────────────────

// El overlay hace GET /slots para leer el estado actual
app.get("/slots", (req, res) => {
  res.json(slots);
});

// La página de control hace POST /slots para actualizar
app.post("/slots", (req, res) => {
  const body = req.body;

  // Acepta tanto array completo como objeto { index, name, img }
  if (Array.isArray(body)) {
    if (body.length !== SLOT_COUNT) return res.status(400).json({ error: "Se esperan 6 slots" });
    slots = body.map(s => ({
      name: String(s.name || "").slice(0, 64),
      img:  String(s.img  || "").slice(0, 512),
    }));
  } else if (typeof body.index === "number") {
    const i = body.index;
    if (i < 0 || i >= SLOT_COUNT) return res.status(400).json({ error: "index fuera de rango" });
    slots[i] = {
      name: String(body.name || "").slice(0, 64),
      img:  String(body.img  || "").slice(0, 512),
    };
  } else {
    return res.status(400).json({ error: "Body inválido" });
  }

  saveSlots(slots);
  res.json({ ok: true, slots });
});

// Reset todos los slots
app.post("/slots/reset", (req, res) => {
  slots = emptySlots();
  saveSlots(slots);
  res.json({ ok: true, slots });
});

app.listen(PORT, () => console.log(`pokemon-overlay-ctrl corriendo en :${PORT}`));
