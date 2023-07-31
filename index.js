'use strict'

// deconstruct Client and intents permissions
const {Client , IntentsBitField, Collection, Events} = require('discord.js');
const fs = require('node:fs');
const path = require('node:path')
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

client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);
//const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		// Set a new item in the Collection with the key as the command name and the value as the exported module
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}

// client.on('messageCreate', (message) => {
//   console.log(message)
// });

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;
	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
		} else {
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	}
});

//Logging when bot is running
client.on('ready', (c) => {
  console.log(`The bot, ${c.user.tag}, is ready 👌`)
});

//logs in server using token
client.login(token);