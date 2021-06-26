const fetch = require("node-fetch");

module.exports = {
	name: 'ascoretally',
	description: 'return anime score from MAL for several shows and tallies them',
	args: true,
	execute: async (message, args) => {
		
		if(args[0]==0 || !args[0]){
			message.channel.send('No anime ID');
			return;
		}
		
		var totalScore = 0;
		for (let i = 0; i < args.length; i++){
			var URL = "https://api.jikan.moe/v3/anime/" + args[i];
			message.channel.send(URL);
			const jsonIn = await fetch(URL).then(res => res.json()).then(data => { 
				console.log(data.score);
				totalScore += data.score;
			 })
		}

		message.channel.send(totalScore);
        
	},

};