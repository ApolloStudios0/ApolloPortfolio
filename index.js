// [ Load Cards ]
document.addEventListener('DOMContentLoaded', function() {
  var cards = [
    {
      "title": "Dynamic Crafting",
      "description": "A fully dynamic crafting system for OX/QBCore - with a unique and smooth interface & built-in logging.",
      "image": "./assets/newCrafting.png"
    },
    
    {
      "title": "Crime Tablet V2",
      "description": "A central hub for all criminal activities. Allows gangs to manage coins, order vehicles, and manage drug deliveries..",
      "image": "./assets/crimetablet.png"
    },
    
    {
      "title": "3D Cybernetics System",
      "description": "A 3D Cybernetics Integration System. Uses 3D rendering NUI's to show the player the cybernetics they have installed. Completely dynamic live, despite being a 3D model. Could be used for an in-depth medical system too!",
      "image": "./assets/3dspaces.gif"
    },
    {
      "title": "Cyberware Menu",
      "description": "A custom cybernetics UI for a CyberPunk 2077 themed server. Allows players to purchase cybernetics, upgrade them & more.",
      "image": "./assets/cyberware.png"
    },
    {
      "title": "Cyber Multicharacter",
      "description": "An inspired multicharacter system for a CyberPunk 2077 themed server.",
      "image": "./assets/multichar.png"
    },
    {
      "title": "AntiHook Self-Hosted Logs",
      "description": "AntiHook hosts it's own log server. It integrates into any system with just a simple event handler. It's also fully customizable, so you can add your own logs/section/events to it. Contains full graphing abilities to view richest players, etc.",
      "image": "./assets/logs.png"
    },
    {
      "title": "Cyberpunk HUD",
      "description": "An inspired HUD for a CyberPunk 2077 themed server.",
      "image": "./assets/cyberhud.png"
    },
    {
      "title": "Cyber-Phone 77",
      "description": "A tilted-style phone system for a Cyberpunk2077 Inspired server. Has all the features of a normal phone, but with a cyberpunk twist. Built using VUE/VITE/Vuetify.",
      "image": "./assets/cyberphone.png"
    },
    {
      "title": "Death Race Inventory",
      "description": "A death race inspired inventory system for QBCore.",
      "image": "./assets/redinv.png"
    },
    {
      "title": "Netrunners UI",
      "description": "A dynamic netrunning system for a QBCore Cyberpunk2077 themed server. Allows interacting with entities, players & vehicles.",
      "image": "./assets/netrunner.png"
    },
    {
      "title": "City Mayoral Panel",
      "description": "A city mayoral panel for QBCore. Allows mayors to manage city funds, taxes, businesses & more.",
      "image": "./assets/mayorpanel.png"
    },
    {
      "title": "Fallout Style Inventory",
      "description": "A fallout inspired inventory system for QBCore.",
      "image": "./assets/greeninv.png"
    },
    {
      "title": "Cyber Lifepaths",
      "description": "An inspired lifepaths system for a CyberPunk 2077 themed server.",
      "image": "./assets/lifepaths.png"
    },

    {
      "title": "Material Contracts (Part of Crafting)",
      "description": "A contract-fulfilment system packaged with Dynamic Crafting. Allows businesses to place material contract orders & have them filled by players.",
      "image": "./assets/contracts.png"
    },
    {
      "title": "Antihook Panel v2",
      "description": "The second rendition of a WebUI panel (in use) for logging all player actions live. Filterable, copyable & traceable.",
      "image": "./assets/apanel.png"
    },
    {
      "title": "Five Horizons",
      "description": "A fully functional FiveHorizons UI for a deathmatch server. UI sketched, edited & developed. With daily challenges & 0ms runtime.",
      "image": "./assets/fiveHorizons.png"
    },
    {
      "title": "Respawn (Futuristic)",
      "description": "Version one of a functional respawn UI for a futuristic CB77 themed server.",
      "image": "./assets/respawn.png"
    },
    {
      "title": "Deathscreen CB77 Themed",
      "description": "Version one of a functional deathscreen UI for a futuristic CB77 themed server.",
      "image": "./assets/nural_wipe.png"
    },
    {
      "title": "PD Badge",
      "description": "A PD, EMS & Government ID Badge System Built From The Ground Up. Useable & Shows On Users Screens With Name & Rank for 5 seconds.",
      "image": "./assets/badge_sys.png"
    },
    {
      "title": "AP City Hall",
      "description": "A Modern QBCORE Job Searching/License UI",
      "image": "./assets/cityHall.png"
    },
    {
      "title": "[E] Custom Doorlock Sprites",
      "description": "A custom doorlock sprite for unlocking/locking ox_doorlock doors.",
      "image": "./assets/doorlock.png"
    },
    {
      "title": "Whats New UI",
      "description": "A menu that shows the latest server changes on a dynamic UI. Only shows once per character when it's first created/spawned or during major updates.",
      "image": "./assets/whatsnew.png"
    },
    {
      "title": "LunarAuthority",
      "description": "A custom admin menu, originally built for QBCORE. Has hundreds of features, including: Player Management, Server Management, Script Management & more.",
      "image": "./assets/lunarAuthority.png"
    },
    {
      "title": "Dynamic Markets (Item Prices)",
      "description": "A fully dynamic item pricing script. Sync to all players & uses a logarithmic formula to calculate prices based on supply & demand. Preview it here: https://www.youtube.com/watch?v=_z8_L6w6cU8",
      "image": "./assets/dynamicMarkets.png"
    },
    {
      "title": "Police IPAD MDT",
      "description": "An IPAD style MDT for Police/EMS. Handles everything inside one UI - including: Warrants, Tickets, Arrests, Medical Records & More.",
      "image": "./assets/ipad.png"
    },
    {
      "title": "AETOS Server Manager",
      "description": "A 0.0ms Server Management Panel - Controls: Players, Server, Scripts & Has Hundreds Of Development Options.",
      "image": "./assets/aetos.png"
    },
    {
      "title": "Custom Pause Menu",
      "description": "A standalone, dynamic pause menu. Built for a Cyberpunk2077 inspired server.",
      "image": "./assets/pauseMenu.png"
    },

    {
      "title": "Cyberpunk: Assault In Progress",
      "description": "A cyberpunk assault in progress mission. Requires ncpdscanner & periodically pings an event to those with the item. Uses ApolloAntiHook for global loot alloction & utilitylib for guards.",
      "image": "./assets/assaultinprogress.png"
    },

    {
      "title": "Vangelico Admin UI",
      "description": "A custom UI for a vangelico jewel heist. Uses Skills framework to assign fake packets & timings.",
      "image": "./assets/vangieadmin.png"
    },

    {
      "title": "Fivem: A New Map",
      "description": "Sick and tired of FiveM's map being overcluttered with blips and names? Use FiveM a new map to organize & catalog your blips.",
      "image": "./assets/newmap.png"
    },
    {
      "title": "Custom Skills Framework",
      "description": "A skills framework for QBCORE/ESX. Allows you to create skills, level them up & have them effect the player in real time. Preview: https://streamable.com/f7hwpf",
      "image": "./assets/skills.png"
    },
    {
      "title": "Apollo Antihook",
      "description": "A middleman servicer for fivem. Includes co-ordinate KVP spoofing, global cooldowns & location assignment within resources. An all-in-one for protection.",
      "image": "./assets/antihook.png"
    },

    {
      "title": "Android Raid",
      "description": "A full system to raid android factories. Customizable levels, difficulties, enemies & lootpools.",
      "image": "./assets/androidraid.png"
    },

    {
      "title": "Drugs Pack",
      "description": "A full weed system - with growing, harvesting, drying, packaging, selling & more.",
      "image": "./assets/drugs.png"
    },

    {
      "title": "Cybernetics Pack",
      "description": "A full system to dynamically install cybernetics (powerups) to players via a ripperdoc interface.",
      "image": "./assets/cyberkits.png"
    },

    {
      "title": "EPOS Card Machine",
      "description": "A payment system, modelled after SumUp card processing.",
      "image": "./assets/eposcard.png"
    },

    {
      "title": "Asteroid Mining",
      "description": "A standalone, dynamic asteroid mining system. The asteroids ping to phones, and players can mine them for resources using an asteroid miner.",
      "image": "./assets/asteroid.png"
    },

    {
      "title": "AP Block Minigame",
      "description": "A Small, highly customizable standalone block minigame.",
      "image": "./assets/blockGame.png"
    },
    {
      "title": "Stock Market",
      "description": "A dynamic stock market for dynamic item pricing. Easy to integrate, simple to view & easy to use. Players can also purchase adverts for display on the right.",
      "image": "./assets/stockm.png"
    },
    {
      "title": "Gangs UI",
      "description": "A Fully Dynamic & Live-Updated Gang UI - Allows Players To View Top Gang Territories & More.",
      "image": "./assets/gangui.png"
    },
    {
      "title": "IPAD ODB Reader",
      "description": "An IPAD UI for Full Vehicle Observations. Comes standard with all vehicle option monitoring. IE: Oil, Fuel, Suspension.",
      "image": "./assets/ODBReader.png"
    },
    {
      "title": "Clothing Whitelist",
      "description": "A real time, dynamic clothing whitelist. Allows you to whitelist clothing items on the fly. Useful for custom gang clothing.",
      "image": "./assets/clWhitelist.png"
    },
    {
      "title": "Progress Bar Pack",
      "description": "A free progress bar pack for QBCORE.",
      "image": "./assets/progressbarPack.jpeg"
    },
    {
      "title": "Custom Loading Screen",
      "description": "A fully customizable loading screen. https://www.youtube.com/watch?v=98nghuYpWFM",
      "image": "./assets/tsrp.png"
    },
    {
      "title": "Welcome Gift",
      "description": "A welcome gift that contains a booklet. Upon using the booklet a nice little UI pops up that explains a bit about the server. Fully dynamic & changeable on the fly.",
      "image": "./assets/welcomeUI.png"
    },
    {
      "title": "Custom Drug System",
      "description": "A complete custom drugs framework. Including Weed, Cocaine & Other Custom Chemical Mixing - paired with a custom built UI.",
      "image": "./assets/cDrugs.png"
    },
    {
      "title": "AP Payments",
      "description": "A modern, flexible payment system for QBCORE. Registering at any location, this allows players to invoice another player on the spot.",
      "image": "./assets/payments.png"
    },
    {
      "title": "AP Payments v2",
      "description": "An update to the original AP Payments. This version allows players to invoice another player on the spot, or pay a bill at any location.",
      "image": "./assets/monzoCard.png"
    },
    {
      "title": "Medical Trauma Team UI",
      "description": "[Custom Asset] A dynamic hud for purchasing medical licenses for a CyberPunk 2077 themed server.",
      "image": "./assets/purchaseui.png"
    },
    {
      "title": "Modern Hacking Terminal",
      "description": "Modern Hacking Terminal for QBCORE. Each ATM assigned a unique IP/PORT & randomized encryption, security firewalls and mini-activites.",
      "image": "./assets/cmd.png"
    },
    {
      "title": "Bring My Vehicle",
      "description": "A flexible standalone plugin that allows the player to save a vehicle & have it hand delivered across the map by a mechanic ped.",
      "image": "./assets/mechanic.jpeg"
    },
    {
      "title": "LSPDFR Re-Write",
      "description": "An almost complete re-write of the LSPDFR plugin for FiveM. With the ability to talk to any NPC, randomized callout events & more.",
      "image": "./assets/LSPDFR.png"
    },
    {
      "title": "AI Police Escort",
      "description": "Need an escort from the police, but dont have any available LEOs? Well now you can with an AI Police Escort.",
      "image": "./assets/escort.jpeg"
    },
    {
      "title": "NPC BOLO Snitching",
      "description": "QBCore - Allows police officers to enter a BOLO in real time and have a configured chance for locals to call the police.",
      "image": "./assets/snitching.png"
    },
    {
      "title": "QB Auction House",
      "description": "Allows the buying, selling & trading of player items. Centralized database instead of using external platforms like discord.",
      "image": "./assets/ah.png"
    },
    {
      "title": "Tutorial Resource",
      "description": "Unique, smooth & reactive tutorial or heads up text. Useful for providing tips, tricks & tutorial text.",
      "image": "./assets/tuttext.png"
    },
    {
      "title": "Virtual Game HUD",
      "description": "Virtual, Dynamically updated game hud that shows ammo, maxammo & has a smooth-scrolling healthbar.",
      "image": "./assets/apgamehud.png"
    },
    {
      "title": "Object Helper",
      "description": "A simple, yet powerful object helper. Allows you to spawn objects, save them & delete them. Useful for mapping & development.",
      "image": "./assets/objectHelper.jpeg"
    },
    {
      "title": "Custom Script Development",
      "description": "I've developed hundreds of custom scripts upon request. These range from UI/UX designs to entire frameworks. Stuff that I can't put into pictures!",
      "image": "./assets/cog.jpg"
    },
  ];

  var container = document.getElementById('Container');
  if (!container) return;

  // Modal elements
  var modal = document.getElementById('modal');
  var modalImg = document.getElementById('modal-img');
  var modalTitle = document.getElementById('modal-title');
  var modalDesc = document.getElementById('modal-desc');
  var modalClose = document.getElementById('modal-close');

  function openModal(card) {
    modalImg.src = card.image;
    modalImg.alt = card.title + ' image';
    modalTitle.textContent = card.title;
    modalDesc.textContent = card.description;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    setTimeout(() => { modal.focus && modal.focus(); }, 10);
  }

  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
    modalImg.src = '';
  }

  // Close modal on button click
  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }
  // Close modal on click outside content
  if (modal) {
    modal.addEventListener('mousedown', function(e) {
      if (e.target === modal) closeModal();
    });
  }
  // Close modal on Escape key
  document.addEventListener('keydown', function(e) {
    if (modal.style.display === 'flex' && (e.key === 'Escape' || e.key === 'Esc')) {
      closeModal();
    }
  });

  for (var i = 0; i < cards.length; i++) {
    var card = document.createElement('div');
    card.className = 'Card';

    var cardImage = document.createElement('img');
    cardImage.className = 'CardImage';
    cardImage.src = cards[i].image;
    cardImage.alt = cards[i].title + ' image';

    var cardTitle = document.createElement('div');
    cardTitle.className = 'CardTitle';
    cardTitle.textContent = cards[i].title;

    var cardDescription = document.createElement('div');
    cardDescription.className = 'CardDescription';
    cardDescription.textContent = cards[i].description;

    card.appendChild(cardImage);
    card.appendChild(cardTitle);
    card.appendChild(cardDescription);
    container.appendChild(card);

    // Open modal on card or image click
    (function(cardData) {
      card.addEventListener('click', function(e) {
        // Only open if not clicking a link or button inside
        if (e.target.tagName !== 'A' && e.target.tagName !== 'BUTTON') {
          openModal(cardData);
        }
      });
      cardImage.addEventListener('click', function(e) {
        e.stopPropagation();
        openModal(cardData);
      });
    })(cards[i]);
  }
});  
