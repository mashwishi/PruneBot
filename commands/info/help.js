const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
	const settings = require("../../config/settings.json");
	const prefixesdatabase = client.settings.ensure(message.guild.id, settings);

	const helpArray = message.content.split(" ");
	const helpArgs = helpArray.slice(1);

	if (!helpArgs[0]) {
		const embed = new Discord.MessageEmbed()
			.setColor("#b491c8")
			.setDescription(
				`**My prefix:** \`${prefixesdatabase.prefix}\` , Slash Commands list for \`/help\`\nClick [HERE](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands) to invite me to your server.`
			)
			.addField("**:gear: Basic**", "`help`, `ping`, `vote`, `uptime`, `setprefix`")
			.addField(
				"**🛠️ Moderation**",
				"`ban`, `clear`, `clearwarn`, `createchannel`, `createemoji`, `kick`, `lockchannel`, `mute`, `rename`, `slowmode`, `unban`, `unlockchannel`, `unmute`, `warn`, `warnings`"
			)			
			.addField(
				"**⚙ Utility**",
				"`aes256`, `avatar`, `channel`, `embed`, `roleinfo`, `reverse`, `setafk`, `snipe`, `stats`, `timer`, `translate`, `whois`, `weather`, `youtube`"
			)
			.addField(
				"**:magic_wand: Pruning**",
				"`urole`, `unorole`, `krole`, `knorole`, `fetch`"
			)			
			.addField(
				"**:tada: Giveaways**",
				"`start-giveaway`, `reroll`, `end-giveaway`"
			)
			.addField(
				"**:frame_photo: Images**",
				"`captcha`, `circle`, `delete`, `gay`, `changemymind`, `trigger`, `clyde`, `petpet`, `magik`, `iphonex`"
			)
			.addField(
				"**:musical_note: Music**",
				"`play`, `stop`, `skip`, `queue`, `autoplay`, `loop`, `volume`, `pause`, `resume`"
			)
			.addField(
				"**:partying_face: Fun**",
				"`8ball`, `cat`, `deaes256`, `kiss`, `meme`, `ngif`, `pat`, `poke`, `smug`, `thigh`, `tickle`"
			)			
            .addFields(
				{ name: ':desktop: Github (Source Code)', value: 'https://github.com/mashwishi/PruneBot' },
				{ name: ':revolving_hearts: Support the Developer:', value: 'https://ko-fi.com/mashwishi' }   
			  )			
			.setTitle('Prune Bot | Commands')
			.setFooter(`©${nowyear} ${client.user.username} Created by Mashwishi.\nCommand requested by: ${message.author.username}#${message.author.discriminator}`, `https://i.imgur.com/ypxq7B9.png`)
			.setThumbnail('https://i.imgur.com/ypxq7B9.png')    
			.setAuthor('Join our Discord Server', 'https://i.imgur.com/hKeHeEy.gif', 'https://discord.io/LIMYAW');
		message.channel.send({ embed });
	}

	if (helpArgs[0]) {
		let command = helpArgs[0];

		if (client.commands.has(command)) {
			command = client.commands.get(command);
			let alia = command.help.aliases;
			if (command.help.aliases < 1) alia = "No aliases";

			const embed = new Discord.MessageEmbed()
				.setAuthor(
					`Command: ${command.help.name}`,
					client.user.displayAvatarURL()
				)
				.setDescription(
					`
            **Description:**\n\`\`\`${
							command.help.description ||
							"There is no Description for this command."
						}\`\`\`\n**Usage:**\n\`\`\`${
						command.help.usage || "No Usage"
					}\`\`\`\n**Permissions:**\n\`\`\`${
						command.help.accessableby || "Members"
					}\`\`\`\n**Aliases:**\n\`\`\`${alia}\`\`\``
				)
				.setColor("#4a4b4d")
				.setFooter(
					`© ${nowyear} ${client.user.username} | This command requested by ${message.author.username}#${message.author.discriminator}`
				);

			message.channel.send(embed);
		} else {
			const embeds = new Discord.MessageEmbed()
				.setDescription(`${emojis.cross} Command is not found!`)
				.setColor("RED");

			return message.channel.send(embeds);
		}
	}
};

module.exports.help = {
	name: "help",
	description: "This command is used for displaying all commands.",
	usage: "p!help",
	accessableby: "Members",
	aliases: []
};
