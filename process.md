# Process Documentation

**Requirements:**

* IDE (I used Visual Studio Code)
* Node.js v16 or newer
* WeatherAPI key (<weatherapi.com>)
* Discord Developer Portal Account
* Ability to take to bake a cake (optional)

## Setting up Bot

1. On your Discord Developer Account:
    * Go to <https://discord.com/developers/applications>
    * Clink on "New Application" to create a application
    ![new application](./img/process/newApp.png)
    * Give application a name and then click "Create"

2. Create a Bot for Application
    * Once app is create, move to the Bot tab on the left side. This is the menu where you can change the bots icon, name, generate a token, and privilege intents.
    ![bot screen](./img/process/botPage.png)
    * NOTE: Keep token secure and do not share

3. Invite Bot to server
    * In the app settings, move to the OAuth2 tab
    * Under scopes select bot and application.commands
    ![scope](./img/process/invitePermissions.png)
    * Select necessary bot permissions
    * Generate invite URL at bottom of page
    * Copy URL and paste it into the Discord server you want to invite and click link to accept invite
    ![invte server](./img/process/inviteServer.png)

## Developing Bot

1. 