/**
 * ============================================================
 *  It makes ma life easier
 * ============================================================
 */

const CONFIG = {

  /* ── Identity ──────────────────────────────────────────── */
  name: "lostgalax_y",           // displayed in sidebar + hero
  title: "MC Dev & Server Admin", // shown under your name in sidebar
  status: "Open To Commissions",  // the green dot label
  statusVisible: true,            // set false to hide the dot

  /* Hero section */
  heroLines: [
    "Minecraft plugin & mod developer.",
    "5 years deep in server development & configuration",
    "I build things that actually work. (i suck at 3D modeling)"
  ],
  heroBio: "From custom Fabric mods to fine-tuned Spigot plugins, I work across the full Minecraft stack (64). If it runs on a server, I've probably broken and fixed it.",

  /* ── Avatar / Profile Image ────────────────────────────── */
  avatar: {
    src:     "./assets/avatar.png",  // path to your image (relative to index.html)
    width:   160,                    // px — how wide the image renders
    height:  160,                    // px — how tall the image renders
    shape:   "square",               // "circle" | "square" | "rounded"  (rounded = soft corners)
    border:  true,                   // show green border ring
    visible: true                    // set false to hide entirely
  },

  /* ── Projects ──────────────────────────────────────────── */
  projects: [
    {
      name:    "Vulgar's PvPBot",
      type:    "Fabric Mod",
      version: "1.21.1",
      loader:  "Fabric",
      lang:    "Java",
      desc:    "Adds smart combat bots via Carpet PvP's API. Bots can breach swap, place cobwebs at your feet, and on UltraHard mode fire an Orbital Strike Cannon at you. Pure Java, no compromises.",
      tags:    ["Java", "Fabric API", "Carpet PvP", "1.21.1"],
      link:    "",           // GitHub URL — leave empty to hide the button
      /* Image shown on the card */
      image: {
        src:     "./assets/pvpbot.png",  // path to image
        width:   "100%",                 // css value e.g. "100%" | "320px"
        height:  "180px",                // css value e.g. "180px" | "auto"
        fit:     "cover"                 // "cover" | "contain" | "fill"
      }
    },
    {
      name:    "Vulgar's OSC",
      type:    "Fabric Mod",
      version: "1.21.1",
      loader:  "Fabric",
      lang:    "Java",
      desc:    "Addon for PvPBot. Give bots orbital strike charges, set difficulty to UltraHard, web yourself and watch the shot land. If the cooldown bugs out, use a charge yourself to reset it. Pure Java.",
      tags:    ["Java", "Fabric API", "PvPBot Addon", "1.21.1"],
      link:    "",
      image: {
        src:     "./assets/osc.png",
        width:   "100%",
        height:  "180px",
        fit:     "cover"
      }
    },
    {
      name:    "MaceControl",
      type:    "Spigot Plugin",
      version: "1.21.1",
      loader:  "Spigot / Paper",
      lang:    "Java",
      desc:    "Full control over mace enchant damage values — nerf, buff, or single out a specific mace to wreck your friends. Configurable per-enchant multipliers with live reload. Breach swap damage intentionally untouched.",
      tags:    ["Java", "Spigot", "Paper", "1.21.1"],
      link:    "",
      image: {
        src:     "./assets/macecontrol.png",
        width:   "90%",
        height:  "100px",
        fit:     "cover"
      }
    }
  ],

  /* ── Skills config blocks ──────────────────────────────── */
  skillGroups: [
    {
      label: "plugin development",
      file:  "plugin-dev.yml",
      sub:   "Java / Spigot API",
      lines: [
        { key: "bukkit-api",          val: "expert",          type: "bool" },
        { key: "spigot-api",          val: "expert",          type: "bool" },
        { key: "paper-api",           val: "proficient",      type: "bool" },
        { key: "java-version",        val: "8 → 17",          type: "str"  },
        { key: "event-listeners",     val: true,              type: "bool" },
        { key: "custom-commands",     val: true,              type: "bool" },
        { key: "custom-items",        val: true,              type: "bool" },
        { key: "database",            val: "SQLite, MySQL",   type: "str"  }
      ]
    },
    {
      label: "mod development",
      file:  "mods.yml",
      sub:   "Fabric / Forge",
      lines: [
        { key: "fabric-mod-dev",  val: true,             type: "bool" },
        { key: "forge-mod-dev",   val: true,             type: "bool" },
        { key: "mixins",          val: true,             type: "bool" },
        { key: "carpet-api",      val: true,             type: "bool" },
        { key: "client-side",     val: true,             type: "bool" },
        { key: "server-side",     val: true,             type: "bool" }
      ]
    },
    {
      label: "server administration",
      file:  "server.yml",
      sub:   "Spigot / Paper / Velocity",
      lines: [
        { key: "multiverse-core",     val: "advanced",        type: "bool" },
        { key: "znpcs",               val: "advanced",        type: "bool" },
        { key: "luckperms",           val: "advanced",        type: "bool" },
        { key: "worldguard",          val: "advanced",        type: "bool" },
        { key: "essentialsx",         val: "advanced",        type: "bool" },
        { key: "server-software",     val: "Spigot, Paper, Purpur", type: "str" },
        { key: "proxy",               val: "BungeeCord, Velocity",  type: "str" },
        { key: "performance-tuning",  val: true,              type: "bool" }
      ]
    }
  ],

  /* ── Stats (about section) ─────────────────────────────── */
  stats: [
    { num: "5",   label: "years server\nadministration" },
    { num: "3+",  label: "mods & plugins\ndeveloped"    },
    { num: "30+", label: "plugins\nmastered"            },
    { num: "∞",   label: "servers\nconfigured"          }
  ],

  /* ── About text ────────────────────────────────────────── */
  aboutParagraphs: [
    "I've spent <b>5 years</b> deep in the Minecraft server ecosystem — configuring, breaking, fixing, and optimising everything from vanilla survival setups to complex multi-world networks.",
    "On the development side I write <b>Fabric mods and Bukkit/Paper plugins</b> in pure Java, handling everything from custom combat mechanics to Carpet API integrations and per-item stat overrides.",
    "I know the plugins server owners actually use — <b>Multiverse-Core, zNPCs, EssentialsX, WorldGuard, LuckPerms</b> and plenty more — not just as an end user, but at the configuration and troubleshooting level."
  ],

  /* ── Contact ───────────────────────────────────────────── */
  contact: {
    headline: "Let's build something.",
    body:     "Need a custom mod, a plugin, or someone who knows their way around a complicated server stack? Hit me up on Discord.",
    discord:  "lostgalax_y",   // just the username, no # needed
    discordUrl: "https://discord.com/users/lostgalax_y"  // or your real user ID URL
  },

  /* ── Page meta ─────────────────────────────────────────── */
  pageTitle:    "lostgalax_y // mc dev",
  accentColor:  "#00D26A",   // the green — change to any hex you like

};
