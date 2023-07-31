'use strict'

const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');
require('dotenv').config();

let state = {
	temp: 0,
	name: ''
}

const getForcast = async () => {
	console.log('getting forecast')

	try {

		let weatherData = await axios.get(`https://api.weatherbit.io/v2.0/current?postal_code=98106&key=${process.env.WEATHERBIT_KEY}`)

		// console.log(weatherData.data.data[0].temp)
		state.temp = weatherData.data.data[0].temp
		// console.log(state, '***')

		
	} catch (error) {
		
	}
}
getForcast();

// console.log(state)
 

module.exports = {
	data: new SlashCommandBuilder()
		.setName('forecast')
		.setDescription('gets forecast data'),
	async execute(interaction) {
		console.log(state)
		await interaction.reply(`This is the temp ${state.temp}`);
	},
};