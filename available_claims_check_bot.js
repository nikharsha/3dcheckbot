// free claim eligibility check bot
require('dotenv').config();
const fs = require('fs');

const Discord = require('discord.js');
const client = new Discord.Client();

filePath = './snapshot.json';
var raw = JSON.parse(fs.readFileSync(filePath));

var key, keys = Object.keys(raw);
var n = keys.length;
var data={}
while (n--) {
  key = keys[n];
  data[key.toLowerCase()] = raw[key];
}

client.on('message', async message => {

  if (message.author.bot) return;
  //if (message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(1).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  //if (message.content.startsWith('!free')) {
  if (command === "free") {  


  let wallet = args[0].toLowerCase();

  msg = 'Wallet ' + wallet + ' **DOES NOT HOLD** enough Bananas to claim a FREE Hand! :(';

  if (wallet in data) {
    msg = 'Wallet ' + wallet + ' **CAN CLAIM ' + data[wallet] + ' ** FREE Hands, Yay! :)';
  }

  message.channel.send(msg); 

  }
});


client.on('ready', () => {
   console.log('I am ready!'); 
});

client.login(process.env.DISCORD_BOT_TOKEN);
