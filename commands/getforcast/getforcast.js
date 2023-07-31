'use strict'

const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');
require('dotenv').config();


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
    let zipCode = interaction.options.get('zip_code').value;

    try {

      let res = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHERAPI_KEY}&q=${zipCode}&aqi=no
      `)
      let weatherData = res.data;
      let forecastMessage = `The weather forecast for zipcode ${zipCode} ${weatherData.location.name}, ${weatherData.location.region}\nTemperature: ${weatherData.current.temp_f}°F\nConditions: ${weatherData.current.condition.text}`
  
      await interaction.reply(forecastMessage);
      
    } catch (error) {
      console.error(`Error fetching weather forecast: ${error.message}`);
      await interaction.reply('Oh no! Looks like there is a server side error. Please try again later.');
    }

	},
};