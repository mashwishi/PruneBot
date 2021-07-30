const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client, message, args) => {
	const { body } = await superagent.get("https://nekos.life/api/v2/img/ngif");

	const embed = new Discord.MessageEmbed()
		.setColor("#ff9900")
		.setTitle("OwO, Heres your Neko Gif")
		.setImage(body.url)
		.setFooter("© PruneBot");
	message.channel.send({ embed });
};

module.exports.help = {
	name: "ngif",
	description: "This command is used for generating ngif.",
	usage: "p!ngif",
	accessableby: "Members",
	aliases: []
};
