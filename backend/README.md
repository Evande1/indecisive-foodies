# Backend

## Setup
Creation of secret keys.
- https://docs.microsoft.com/en-us/azure/bot-service/bot-service-channel-connect-telegram?view=azure-bot-service-4.0
- https://www.mongodb.com/basics/mongodb-atlas-tutorial

### Setting up MongoDB & telegram bot
(Still pending)
1. create ```.env``` file in the root directory/same directory as app.json and paste the following. Replace the blank with the actual keys and access token from Firebase and BotFather respectively. 

![test](https://github.com/Evande1/indecisive-foodies/blob/main/env-file.png)

2. Run ``` npm install ``` in backend directory.

### Running backend
- Run ``` ./node_modules/.bin/nodemon server.js ``` in the same directory as server.js, the terminal should say database connected for successful connection
- Run ``` ./node_modules/.bin/nodemon foodie-bot.js ``` in the same directory as foodie-bot to turn on the telegram bot.

### Telegram bot interaction

@indecisive_foodies_bot 
1. /start
2. /meal to generate keyboard
3. click the options to view randomised meals
