const Discord = require("discord.js");
const { parse } = require("twemoji-parser");

module.exports.run = async (client, message, args) => {
	const emoji = args[0];
	if (!emoji) return message.channel.send("No emoji provided!");

	const custom = Discord.Util.parseEmoji(emoji);
	const embed = new Discord.MessageEmbed()
		.setTitle(`Enlarged version of ${emoji}`)
		.setColor("#FFFF00");

	if (custom.id) {
		embed.setImage(
			`https://cdn.discordapp.com/emojis/${custom.id}.${
				custom.animated ? "gif" : "png"
			}`
		);
		return message.channel.send(embed);
	}
	const parsed = parse(emoji, { assetType: "png" });
	if (!parsed[0]) return message.channel.send("Invalid emoji!");

	embed.setImage(parsed[0].url);
	return message.channel.send(embed);
};

module.exports.help = {
	name: "enlarge",
	description: "This command is used for enlarging some emoji from everywhere",
	usage: "p!enlarge <emojis>",
	accessableby: "Memeber",
	aliases: [],
	cooldown: 5
};
