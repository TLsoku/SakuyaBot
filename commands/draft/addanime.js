const mongo = require("../../mongo");
const animedraftSchema = require("../../schemas/animedraft-schema.js");

module.exports = {
	name: 'addanime',
	description: 'adds an anime to user',
	args: true,
	execute: async (message, args) => {

		console.log("Add anime user: " + message.author.id + ". anime: " + args[0]);

		if(args[0]==0 || !args[0]){
			message.channel.send("No anime ID");
			return;
		}
        
        message.channel.send("Anime: " + args[0] + " added");

        await mongo().then(async (mongoose) => {
            try {
                console.log("findOne");
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
	},

};