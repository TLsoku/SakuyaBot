module.exports = {
	name: 'ascore',
	description: 'return anime score from MAL',
	args: true,
	execute(message, args) {
		message.channel.send(`Anime ID: ${args[0]}`);
	},
};