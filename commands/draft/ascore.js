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
		//message.channel.send(URL);
		const jsonIn = await fetch(URL).then(res => res.json()).then(data => { 
			console.log(data)
			console.log(data.score);
			message.channel.send("MAL Score: " + data.score);
			message.channel.send("Points for this anime: " + Math.round(data.score*10-70));
		 })
		 // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

        
	},

};