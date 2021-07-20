const mongo = require("../../mongo");
const animedraftSchema = require("../../schemas/animedraft-schema.js");

module.exports = {
	name: 'addanime',
	description: 'adds an anime to user',
	args: true,
	execute: async (message, args) => {

		console.log("Add anime user: " + message.author.id + ". anime: " + args[0]);
        //Format: addanime [slot] [anime]
		if(args[0]==0 || !args[0]){
			message.channel.send("No slot specified");
			return;
		}

        if(args[1]==0 || !args[1]){
			message.channel.send("No anime specified");
			return;
		}

        await mongo().then(async (mongoose) => {
            try {
                const authorID = message.author.id;


                const result = await animedraftSchema.findOneAndUpdate({
                    userID: authorID
                }, {
                    anime1: args[0]
                }, {
                    upsert: true
                })


                // const result = await animedraftSchema.findOne({
                //     userID: authorID
                // })
                // console.log("result: " + result);

                // if(result){
                //     result.anime1 = args[0];
                // } else {
                //     await new animedraftSchema({
                //     userID: authorID,
                //     anime1: args[0],
                //     }).save()
                // }
            } finally {
                mongoose.connection.close()
            }
        })

        message.channel.send("Anime: " + args[0] + " added to slot " + args[1]);

	},

};