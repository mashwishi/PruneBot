const Discord = require("discord.js");
const settings = require("../config/settings.json");

module.exports = {
	name: "help",
	description: "Learn more about me!",
	commandOptions: [
		{
			type: 3,
			name: "command",
			description: "Type any command you want to ask for!",
			required: false
		}
	],
	execute(interaction) {
		const optioninvalid = interaction.data.options;
		if (optioninvalid) {
			let command = interaction.data.options[0].value;
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
					.setFooter(`© ${nowyear} ${client.user.username}`);
				return client.api
					.interactions(interaction.id, interaction.token)
					.callback.post({
						data: {
							type: 4,
							data: {
								embeds: [embed]
							}
						}
					});
			}

			if (!client.commands.has(command)) {
				const embeds = new Discord.MessageEmbed()
					.setDescription(`**Response:**\n\`\`\`Error: 404 Not Found\`\`\``)
					.setColor("#ff0000");

				return client.api
					.interactions(interaction.id, interaction.token)
					.callback.post({
						data: {
							type: 4,
							data: {
								embeds: [embeds]
							}
						}
					});
			}
		} else {
			const prefixesdatabase = client.settings.ensure(
				interaction.guild_id,
				settings
			);

			const embed = new Discord.MessageEmbed()
				.setTitle(`${emoji.slash} ${client.user.username} Slash Commands List`)
				.setColor('#b491c8')  
				.setDescription(
					`**My prefix:** \`${prefixesdatabase.prefix}\` , Traditional Command List for \`${prefixesdatabase.prefix}help\`\nClick [HERE](https://discord.com/api/oauth2/authorize?client_id=814580247973986314&permissions=8&scope=bot%20applications.commands) to invite me to your server.\n\n\`avatar\`, \`cat\`, \`dog\`, \`enlarge\`, \`help\`, \`meme\`, \`ping\`, \`snipe\`, \`uptime\`, \`weather\``
				)
				.setFooter(`© ${nowyear} ${client.user.username} | Created by Mashwishi`, `https://i.imgur.com/DxWDaGv.png`)
				.setThumbnail('https://i.imgur.com/ypxq7B9.png')    
				.setAuthor('Join our Discord Server', 'https://i.imgur.com/hKeHeEy.gif', 'https://discord.io/LIMYAW');
			                                                                  

			client.api.interactions(interaction.id, interaction.token).callback.post({
				data: {
					type: 4,
					data: {
						embeds: [embed]
					}
				}
			});
		}
	}
};
