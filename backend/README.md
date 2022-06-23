# Backend

## Setup

### Setting up MongoDB
(Still pending)
1. create ```.env``` file in the root directory/same directory as app.json and paste the following. Replace the Xs with the actual keys from Firebase.

run
```sh 
npm install
```

### Running backend
- Run ```sh ./node_modules/.bin/nodemon server.js ``` in the same directory as server.js, the terminal should say database connected for successful connection
- Run ```sh ./node_modules/.bin/nodemon foodie-bot.js ``` in the same directory as foodie-bot to turn on the telegram bot.

### Telegram bot interaction
(Insert pictures)
@indecisive_foodies_bot 
1. /start
2. /meal to generate keyboard
3. click the options to view randomised meals