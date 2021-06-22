const fetch = require("node-fetch");

module.exports = {
	name: 'ascore',
	description: 'return anime score from MAL',
	args: true,
	execute: async (message, args) => {
		
		if(args[0]==0 || !args[0]){
			message.channel.send('No anime ID');
			return;
		}
		
		message.channel.send(`Anime ID: ${args[0]}`);
		var URL = "https://api.jikan.moe/v3/anime/" + args[0];
		message.channel.send(URL);
		const { file } = await fetch(URL).then(res => res.json()).then(json => console.log(json));
		//.then(response => response.json());
		message.channel.send(file.score);
        
	},

};