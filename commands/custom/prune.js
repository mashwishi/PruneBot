const Discord = require("discord.js");
const config = require("../../config/config.json");

module.exports.run = async (client, message, args) => {	

    //User no permission
	const embed6 = new Discord.MessageEmbed()
		.setDescription(
			`${emojis.cross} ${message.author.username}, Missing Permission`
		)
		.setColor("RED");
	if (!message.member.hasPermission("KICK_MEMBERS") || message.author.id === 221838936866029568) {
		return message.channel.send(embed6).then(m => m.delete({ timeout: 5000 }));
	}

    //Bot no permission
    const notice3 = new Discord.MessageEmbed()
    .setDescription(`${emojis.cross} I don't have permission to list people!`)
    .setColor("RED");
	if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
		return message.channel.send(notice3).then(m => m.delete({ timeout: 5000 }));
	}

    //List and Pruning
    let mentionedrole = message.mentions.roles.firstKey()
    const withoutPrefix = message.content.slice(config.prefix.length);
    const split = withoutPrefix.split(/ +/);
    const command = split[0];
    const argss = split.slice(1);
    let id = argss[0];

    //Didn't mention a role
	const notice2 = new Discord.MessageEmbed()
		.setDescription(`${message.author}, You didn't mention a role!`)
		.setColor("RED");
	if (!args.length) return message.channel.send(notice2);

    //Didn't mention the exact role
	const embed7 = new Discord.MessageEmbed()
		.setTitle("Wrong Usage!")
		.setDescription("Correct Example: p!prune <role> <days>")
		.setColor("RED");
	if (!id.startsWith('<@&') && id.endsWith('>')) {
		message.delete();
		return message.channel.send(embed7).then(m => m.delete({ timeout: 5000 }));
	}
         
          


};
module.exports.help = {
	name: "prune",
	description: "Pruning users in specific roles and days.",
	usage: "p!prune <role> <days>",
	accessableby: "ADMINISTRATOR",
	aliases: [],
	cooldown: 300
};
