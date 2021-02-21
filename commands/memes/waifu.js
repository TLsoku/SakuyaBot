module.exports = {
	name: 'waifu',
	aliases: ['sakuya'],
	description: 'posts a picture of Sakuya',
	execute(message, args) {
		message.channel.send('https://hisouten.koumakan.jp/images//f/f7/Swr-portrait-sakuya.png');
		message.channel.send('https://i.pinimg.com/originals/c0/40/58/c04058c332fa11d579f81c776da048cd.jpg');
	},
};