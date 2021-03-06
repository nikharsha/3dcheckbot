// 3d check bot
require('dotenv').config();
const fs = require('fs');

const Discord = require('discord.js');
const client = new Discord.Client();

filePath = './snapshot.json';
var data = JSON.parse(fs.readFileSync(filePath));

client.on('message', async message => {

  if (message.author.bot) return;
  //if (message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(1).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  //if (message.content.startsWith('!3d')) {
  if (command === "3d") {  


  let wallet = args[0].toLowerCase();

  msg = wallet + ' **NOT FOUND** on the Snapshot! :(';

  if (wallet in data) {
    msg = wallet + ' **FOUND** on the Snapshot, Yay!';
  }

  message.channel.send(msg); 

  }
});


client.on('ready', () => {
   console.log('I am ready!'); 
});

client.login(process.env.DISCORD_BOT_TOKEN);
