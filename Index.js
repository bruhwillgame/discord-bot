// Import packages
const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');
require('dotenv').config();

// Express server to keep bot alive
const app = express();
const PORT = process.env.PORT || 10000;

app.get('/', (req, res) => {
  res.send('Bot is running on Render!');
});

app.listen(PORT, () => console.log(`Web server running on port ${PORT}`));

// Create Discord client
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// Bot ready event
client.once('ready', () => {
  console.log(`${client.user.tag} is online!`);
});

// Example ping command
client.on('messageCreate', message => {
  if (message.content === '!ping') {
    message.channel.send('Pong!');
  }
});

// Login to Discord
client.login(process.env.TOKEN);
