'use strict'

// Require dependencies to file
const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');
require('dotenv').config();


module.exports = {
	data: new SlashCommandBuilder()
    // Setting name of command
		.setName('getforecast')
		.setDescription('gets forecast data')
    // Create mandatory option for a user input zip code
		.addStringOption(option =>
			option.setName('zip_code')
			.setDescription('Enter zip code')
			.setRequired(true)
		),
	async execute(interaction) {
    // Get the value of the zip code
    let zipCode = interaction.options.get('zip_code').value;

    try {
      // Make HTTP request to the OpenWeather API using the zip code input
      let res = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHERAPI_KEY}&q=${zipCode}&aqi=no`);
      let weatherData = res.data;
      // Customize message to send
      let forecastMessage = `The weather forecast for zipcode ${zipCode} ${weatherData.location.name}, ${weatherData.location.region}\nTemperature: ${weatherData.current.temp_f}°F\nConditions: ${weatherData.current.condition.text}`;
  
      // Reply to interaction
      await interaction.reply(forecastMessage);
      
    } catch (error) {
      console.error(`Error fetching weather forecast: ${error.message}`);
      await interaction.reply('Oh no! Looks like there is a server side error. Please try again later.');
    }

	},
};