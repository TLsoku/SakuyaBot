
module.exports = {
	name: 'getcat',
	description: 'post cat',
	execute(message, args) {
		message.channel.send('getcat');
/*
        const { file } = fetch('https://aws.random.cat/meow').then(response => response.json());
		message.channel.send(file);
        */
	},
};

