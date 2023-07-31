'use strict'

const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');
require('dotenv').config();

// let state = {
// 	temp: 0,
// 	name: ''
// }

// const getForcast = async () => {
// 	console.log('getting forecast')

// 	try {

// 		let weatherData = await axios.get(`https://api.weatherbit.io/v2.0/current?postal_code=98106&key=${process.env.WEATHERBIT_KEY}`)

// 		// console.log(weatherData.data.data[0].temp)
// 		state.temp = weatherData.data.data[0].temp
// 		// console.log(state, '***')

		
// 	} catch (error) {
		
// 	}
// }
// getForcast();

// console.log(state)
 

module.exports = {
	data: new SlashCommandBuilder()
		.setName('getforecast')
		.setDescription('gets forecast data')
		.addStringOption(option =>
			option.setName('zip_code')
			.setDescription('Enter zip code')
			.setRequired(true)
		),
	async execute(interaction) {
		console.log(interaction.options.get('zip_code').value)
    let zipCode = interaction.options.get('zip_code').value;

    try {

      let res = await axios.get(`https://api.weatherbit.io/v2.0/current?postal_code=${zipCode}&key=${process.env.WEATHERBIT_KEY}`)

      let weatherData = res.data.data[0];


      console.log(weatherData)

      let forecastMessage = `The weather forecast for zipcode ${zipCode} ${weatherData.city_name}, ${weatherData.state_code}}\n Temperature: ${weatherData.temp}°C\n Conditions: ${weatherData.weather.description}`
  
      await interaction.reply(forecastMessage);
      
    } catch (error) {
      console.error(`Error fetching weather forecast: ${error.message}`);
      await interaction.reply('Oh no! Looks like there is a server side error. Please try again later.');
    }

	},
};