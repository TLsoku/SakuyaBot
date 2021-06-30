  
module.exports = {
	name: 'banson',
	cooldown: 5,
	description: "posts deep fried laugh",
	execute(message) {
		message.channel.send("Banson.jpg", {
			files: [
				"./deepfriedlaugh.jpg"
			]
		});
	},
};