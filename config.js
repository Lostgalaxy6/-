/**
 * ============================================================
 *  Ts makes my life easier
 * ============================================================
 */

const CONFIG = {

  /* ── Identity ──────────────────────────────────────────── */
  name:   "lostgalax_y",
  title:  "MC Dev & Server Configurator",
  status: "Open To Commissions",
  statusVisible: true,

  /* "currently working on" ticker in sidebar */
  currentlyWorkingOn: "PvPBot v3.5.0",  // set to "" to hide

  /* Hero section */
  heroLines: [
    "Minecraft plugin & mod developer.",
    "5 years deep in server architecture.",
    "I build things that actually work."
  ],
  heroBio: "From custom Fabric mods to fine-tuned Spigot plugins I work across the full Minecraft stack. If it runs on a server, I've probably broken and fixed it.",

  /* ── Music Player ──────────────────────────────────────── */
  music: {
    enabled:  true,
    src:      "./assets/creator.mp3",   // path to your mp3
    label:    "creator.mp3"             // shown in the player tooltip
  },

  /* ── Avatar / Profile Image ────────────────────────────── */
  avatar: {
    src:     "./assets/avatar.png",
    width:   140,
    height:  140,
    shape:   "rounded",    // "circle" | "square" | "rounded"
    border:  true,
    visible: true
  },

  /* ── Projects ──────────────────────────────────────────── */
  projects: [
    {
      name:      "Vulgar's PvPBot",
      type:      "Fabric Mod",
      version:   "1.21.1",
      loader:    "Fabric",
      lang:      "Java",
      desc:      "Adds smart combat bots via Carpet PvP's API. Bots can breach swap, place cobwebs at your feet, and on UltraHard mode fire an Orbital Strike Cannon at you. Coded In Pure Java.",
      tags:      ["Java", "Fabric API", "Carpet PvP", "1.21.1"],
      link:      "https://www.youtube.com/watch?v=oHg5SJYRHA0",          // GitHub / Modrinth / CurseForge — opens when clicking the project name
      image: {
        src:    "./assets/pvpbot.png",
        width:  "100%",
        height: "180px",
        fit:    "cover"
      }
    },
    {
      name:      "Vulgar's OSC",
      type:      "Fabric Mod",
      version:   "1.21.1",
      loader:    "Fabric",
      lang:      "Java",
      desc:      "Addon for PvPBot Give bots orbital strike charges, set difficulty to UltraHard, web yourself and watch the shot land. Use a charge yourself to reset the cooldown if it bugs out. Pure Java.",
      tags:      ["Java", "Fabric API", "PvPBot Addon", "1.21.1"],
      link:      "https://www.curseforge.com/minecraft/mc-mods/vulgars-orbital-strike-mod",
      image: {
        src:    "./assets/osc.png",
        width:  "100%",
        height: "180px",
        fit:    "cover"
      }
    },
    {
      name:      "MaceControl",
      type:      "Spigot Plugin",
      version:   "1.21.1",
      loader:    "Spigot / Paper",
      lang:      "Java",
      desc:      "Full control over mace enchant damage values. nerf, buff, or single out a specific mace to Wreck your friends. Per-enchant multipliers with live reload, Ground Breach swap damage intentionally untouched & not configurable",
      tags:      ["Java", "Spigot", "Paper", "1.21.1"],
      link:      "https://www.curseforge.com/minecraft/bukkit-plugins/macecontrol",
      image: {
        src:    "./assets/macecontrol.png",
        width:  "100%",
        height: "180px",
        fit:    "cover"
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
        { key: "bukkit-api",       val: "expert",          type: "bool" },
        { key: "spigot-api",       val: "expert",          type: "bool" },
        { key: "paper-api",        val: "proficient",      type: "bool" },
        { key: "java-version",     val: "8 → 17",          type: "str"  },
        { key: "event-listeners",  val: true,              type: "bool" },
        { key: "custom-commands",  val: true,              type: "bool" },
        { key: "custom-items",     val: true,              type: "bool" },
        { key: "database",         val: "SQLite, MySQL",   type: "str"  }
      ]
    },
    {
      label: "mod development",
      file:  "mods.yml",
      sub:   "Fabric / Paper ",
      lines: [
        { key: "fabric-mod-dev",  val: true,   type: "bool" },
        { key: "forge-mod-dev",   val: false,   type: "bool" },
        { key: "mixins",          val: true,   type: "bool" },
        { key: "carpet-api",      val: true,   type: "bool" },
        { key: "client-side",     val: true,   type: "bool" },
        { key: "server-side",     val: true,   type: "bool" }
      ]
    },
    {
      label: "server configuration",
      file:  "server.yml",
      sub:   "Spigot / Paper / Velocity",
      lines: [
        { key: "multiverse-core",    val: "advanced",             type: "bool" },
        { key: "znpcs",              val: "advanced",             type: "bool" },
        { key: "luckperms",          val: "advanced",             type: "bool" },
        { key: "worldguard",         val: "advanced",             type: "bool" },
        { key: "essentialsx",        val: "advanced",             type: "bool" },
        { key: "server-software",    val: "Spigot, Paper, Purpur",type: "str"  },
        { key: "proxy",              val: "BungeeCord, Velocity", type: "str"  },
        { key: "performance-tuning", val: true,                   type: "bool" }
      ]
    }
  ],

  /* ── Stats ─────────────────────────────────────────────── */
  stats: [
    { num: "5",   label: "years server\nadministration" },
    { num: "3+",  label: "mods & plugins\ndeveloped"    },
    { num: "30+", label: "plugins\nmastered"            },
    { num: "14+",   label: "servers\nconfigured"          }
  ],

  /* ── About paragraphs ───────────────────────────────────── */
  aboutParagraphs: [
    "I've spent <b>5 years</b> deep in the Minecraft server ecosystem configuring, breaking, fixing, and optimising everything from vanilla survival setups to complex multi world servers.",
    "On the development side I write <b>Fabric mods and Bukkit/Paper plugins</b> in pure Java, handling everything from custom combat mechanics to Carpet API integrations and per-item stat overrides.",
    "I know the plugins server owners actually use — <b>Multiverse-Core, zNPCs, EssentialsX, WorldGuard, LuckPerms</b> and plenty more — not just as an end user, but at the configuration and troubleshooting level."
  ],

  /* ── Contact ────────────────────────────────────────────── */
  contact: {
    headline:   "Let's build something Beautiful !",
    body:       "Need a custom mod, a plugin, or someone who knows their way around a server setup/stack? Hit me up on Discord",
    discord:    "lostgalax_y",
    discordUrl: "https://discord.com/users/lostgalax_y"
  },

  /* ── Page meta ──────────────────────────────────────────── */
  pageTitle:   "lostgalax_y // VulgarMC",
  accentColor: "#00D26A",

};
