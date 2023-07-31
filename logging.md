# Logging

## July 28, 2023 (evening)

When I received the user story, I immediately created an ERD on how the data should flow. Called it an early night once that was complete. ERD is copied in the README.md

## July 30, 2023 (evening)

 I need to create a bot that will make a request to a weather API and then display the days forecast based on the input zip code. Since this is later than I expected to start working on this project, my goals that I set for myself in this session were to set up the repo, confirm that the bot is setup with proper permission and to get familiar with how to create a slash command that is registered to the bot. Went a little longer than I expected because I ran into some bugs with registering some test commands but with googling and reading the documentation I was able to work my way through.

Once I made the slash command with the option to get the the zip code and successfully hit the weather API I reached my MVP. Though, while testing I hit my maximum calls on the API I am using so I might need to find another that can give me some more free call a day.

Calling it a night after update the README and pushing to GitHub. The goal for tomorrow is to clean up, modularize, start the documentation, and them deploy to a hosting service like render.com or heroku if there is more time I will look to add a gif and a temp converter.

## July 31, 2023 (Morning)

Began the day to clean up to try a different API since my original only allowed 50 calls a day which was not sufficient for me testing. Migrated to WeatherAPI and its much better. After that, i started to make myself comments to remember what the lines of code were doing. When that was complete I push to main and will attempt to host using a service but might also look into repl.it if I run into problems.

Finished documenting (can be found in process.md) as well as uploaded a video of the bot working.

Compiling all the necessary documents to send off back to the team.
