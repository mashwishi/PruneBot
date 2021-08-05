const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client, message, args) => {
	const { body } = await superagent.get("https://nekos.life/api/v2/img/smug");

	const embed = new Discord.MessageEmbed()
		.setColor("#ff9900")
		.setImage(body.url)
		.setFooter("© PruneBot");
	message.channel.send({ embed });
};

module.exports.help = {
	name: "smug",
	description: "This command is used for generating smug.",
	usage: "p!smug",
	accessableby: "Member",
	aliases: [],
	cooldown: 5
};
