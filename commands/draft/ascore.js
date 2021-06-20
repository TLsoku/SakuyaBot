module.exports = {
	name: 'ascore',
	description: 'return anime score from MAL',
	args: true,
	execute(message, args) {
		if(!args==0){
			message.channel.send('No anime ID');
			return;
		}
		message.channel.send(`Anime ID: ${args[0]}`);
	},
	

};