const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (message.content === '${prefix}book') {
		//recommended reading
		message.channel.send('https://nhentai.net/g/145008/');
	}
	if (message.content === '${prefix}ratJAM') {
		//recommended reading
		message.channel.send('https://tenor.com/view/rat-jam-gif-19408520');
	}
});


client.login(token);