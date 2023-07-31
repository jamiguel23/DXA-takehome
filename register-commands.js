'use strict'

const {REST, Routes} = require('discord.js');
require('dotenv').config();



const commands = [
  {
    name: "testForcast",
    description: "Testing command"
  }
];

const rest = new REST().setToken(process.env.TOKEN)

(async () => {

  console.log('Registering Commands')
  try {
    await rest.put(
      Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
      {body: commands}
    )

    console.log('Commands Successful')
  } catch (error) {
    console.log(`Server side error: (error.message)`)
  }
})();