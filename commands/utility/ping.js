module.exports = {
	name: 'ping',
	description: 'ping test',
	execute(message, args) {
		message.channel.send('Pong.');
	},
};