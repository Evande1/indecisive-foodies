const { Telegraf } = require('telegraf');
const  axios  = require('axios');
const { telegramBot } = require('./config');
const e = require('express');

const bot = new Telegraf(telegramBot);

const categoryArray = []

bot.start((ctx) => {
  let message = `use /meal command to request for next meal`;
  ctx.reply(message);
});

bot.command('meal', (ctx) => {
  try {
    bot.telegram.sendMessage(ctx.chat.id, "please select the category", {
      reply_markup: {
        inline_keyboard: [
          [{'text': 'breakfast', callback_data:'breakfast'}],
          [{'text': 'lunch', callback_data:'lunch'}],
          [{'text': 'dinner', callback_data:'dinner'}],
          [{'text': 'snacks', callback_data:'snacks'}]
        ]
      }
    });
  } catch (error) {
    console.log('error', error);
    ctx.reply('error occured');
  }
});

bot.action('breakfast', async (ctx)=> {
  ctx.reply('Generating breakfast, Please wait !!!');
  try {
    const res = await axios.get('http://localhost:8000/api/meal/getbreakfast');
    if (res.data != '') {
      ctx.reply(res.data.meal);
    } else {
      ctx.reply('no breakies');
    }

  } catch (error) {
    console.log('error', error);
    ctx.reply('error occured');
  }
} )

bot.action('lunch', async (ctx)=> {
  ctx.reply('Generating lunch, Please wait !!!');
  try {
    const res = await axios.get('http://localhost:8000/api/meal/getlunch');
    if (res.data != '') {
      ctx.reply(res.data.meal);
    } else {
      ctx.reply('no luncheon');
    }

  } catch (error) {
    console.log('error', error);
    ctx.reply('error occured');
  }
} )

bot.action('dinner', async (ctx)=> {
  ctx.reply('Generating dinner, Please wait !!!');
  try {
    const res = await axios.get('http://localhost:8000/api/meal/getdinner');
    if (res.data != '') {
      ctx.reply(res.data.meal);
    } else {
      ctx.reply('no dins');
    }

  } catch (error) {
    console.log('error', error);
    ctx.reply('error occured');
  }
} )

bot.action('snacks', async (ctx)=> {
  ctx.reply('Generating snacks, Please wait !!!');
  try {
    const res = await axios.get('http://localhost:8000/api/meal/getsnack');
    if (res.data != '') {
      ctx.reply(res.data.meal);
    } else {
      ctx.reply('no snacc');
    }

  } catch (error) {
    console.log('error', error);
    ctx.reply('error occured');
  }
} )

//future delete (enable stuff to delete)

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

//reply_markup and inline keyboard to generate options?

// ./node_modules/.bin/nodemon foodie-bot.js