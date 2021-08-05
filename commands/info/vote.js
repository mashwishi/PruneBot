const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) => {
	msg.delete();
	msg.channel.send(
		"To support the bot please vote every 12 hours in \n - https://discordlist.space/bot/814580247973986314  \n - https://discord.ly/prune-bot"
	);
};

module.exports.help = {
	name: "vote",
	description:
		"To support the bot please vote every 12 hours in \n - https://discordlist.space/bot/814580247973986314  \n - https://discord.ly/prune-bot",
	usage: "p!vote",
	accessableby: "Everyone",
	aliases: [],
	cooldown: 180
};
