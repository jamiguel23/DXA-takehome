'use strict'

// deconstruct Client and intents permissions
const {Client , IntentsBitField} = require('discord.js');
require('dotenv').config()
const token = process.env.TOKEN;

// Initialize client with specific permissions
const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent
  ]
});

client.on('messageCreate', (message) => {
  console.log(message)
});

//Logging when bot is running
client.on('ready', (c) => {
  console.log(`The bot, ${c.user.tag}, is ready 👌`)
});

//logs in server using token
client.login(token);