'use strict'

const {Client , IntentsBitField} = require('discord.js');
require('dotenv').config()


const token = process.env.TOKEN;


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


client.on('ready', (c) => {
  console.log(`The bot, ${c.user.tag}, is ready 👌`)
});

client.login(token);