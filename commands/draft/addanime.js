const mongo = require("../../mongo");
const animedraftSchema = require("../../schemas/animedraft-schema.js");

module.exports = {
	name: 'addanime',
	description: 'adds an anime to user',
	args: true,
	execute: async (message, args) => {

		console.log("Add anime user: " + message.author.id + ". anime: " + args[0]);

		if(args[0]==0 || !args[0]){
			message.channel.send('No anime ID');
			return;
		}

        await mongo().then(async (mongoose) => {
            try {
                await new animedraftSchema({
                    userID: message.author.id,
                    anime1: args[0],
                }).save()
            } finally {
                mongoose.connection.close()
            }
        })
	},

};