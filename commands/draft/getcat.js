
const fetch = require("node-fetch");
module.exports = {
	name: 'getcat',
	description: 'post cat',
	execute: async (message, args) => {
		message.channel.send('getcat');
		//Used node fetch
        const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
		message.channel.send(file);
        
	},
};

