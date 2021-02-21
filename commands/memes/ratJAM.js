  
module.exports = {
	name: 'ratjam',
	cooldown: 5,
	description: 'posts a gif of a dancing rat',
	execute(message) {
		message.channel.send('https://tenor.com/view/rat-jam-gif-19408520');
	},
};