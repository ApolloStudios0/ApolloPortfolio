// [ Load Cards ]
window.onload = function() {
  var cards = [
    {
      "title": "AETOS Server Manager",
      "description": "A 0.0ms Server Management Panel - Controls: Players, Server, Scripts & Has Hundreds Of Development Options.",
      "image": "./assets/aetos.png"
    },
    {
      "title": "AP Block Minigame",
      "description": "A Small, highly customizable standalone block minigame.",
      "image": "./assets/blockGame.png"
    },
    {
      "title": "AP City Hall",
      "description": "A Modern QBCORE Job Searching/License UI",
      "image": "./assets/cityHall.png"
    },
    {
      "title": "IPAD ODB Reader",
      "description": "An IPAD UI for Full Vehicle Observations. Comes standard with all vehicle option monitoring. IE: Oil, Fuel, Suspension.",
      "image": "./assets/ODBReader.png"
    },
    {
      "title": "AP Payments",
      "description": "A modern, flexible payment system for QBCORE. Registering at any location, this allows players to invoice another player on the spot.",
      "image": "./assets/payments.png"
    },
    {
      "title": "AP Crafting",
      "description": "A modern crafting system for QBCORE.",
      "image": "./assets/crafting.png"
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
      "title": "Custom Script Development",
      "description": "I've developed hundreds of custom scripts upon request. These range from UI/UX designs to entire frameworks. Stuff that I can't put into pictures!",
      "image": "./assets/cog.jpg"
    },
  ];

  // Loop Through Cards
  for (var i = 0; i < cards.length; i++) {
    // Create Card
    var card = document.createElement("div");
    card.className = "Card";

    // Create Card Image
    var cardImage = document.createElement("img");
    cardImage.className = "CardImage";
    cardImage.src = cards[i].image;

    // Create Card Title
    var cardTitle = document.createElement("h3");
    cardTitle.className = "CardTitle";
    cardTitle.innerHTML = cards[i].title;

    // Create Card Description
    var cardDescription = document.createElement("h3");
    cardDescription.className = "CardDescription";
    cardDescription.innerHTML = cards[i].description;

    // Append Card Image To Card
    card.appendChild(cardImage);

    // Append Card Title To Card
    card.appendChild(cardTitle);

    // Append Card Description To Card
    card.appendChild(cardDescription);

    // Append Card To Body
    document.body.appendChild(card);

    // Add div to Container div
    document.getElementById("Container").appendChild(card);
  }
};  