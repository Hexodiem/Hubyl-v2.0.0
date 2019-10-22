const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`${client.user.tag} : Bonjour ! Je suis opérationnel !`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.channel.send('Pong!');
  }
});

client.login('NjM1OTI1MjY4Njk0ODI3MDA5.Xa5UGg.CwwHJo_FPdSAW_7qWVhdaedNGBA');