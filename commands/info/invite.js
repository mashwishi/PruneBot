const fetch = require("node-fetch");
const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
	const embed = new Discord.MessageEmbed()
		.setTitle(`Prune Bot | Invite`)
		.setAuthor('Join our Discord Server', 'https://i.imgur.com/hKeHeEy.gif', 'https://discord.io/LIMYAW')	
		.setDescription('\n')
		.setColor("#2A2A2A")
		.setDescription(`[Repository](https://github.com/mashwishi/PruneBot) **|** [Bugs](https://github.com/mashwishi/PruneBot/issues) **|** [License](https://github.com/mashwishi/PruneBot/blob/master/LICENSE)`)						
		.addFields(
			{ 
				name: 'Prune Bot [Main]', 
				value: '[Invite Me](https://discord.com/api/oauth2/authorize?client_id=814580247973986314&permissions=8&scope=bot%20applications.commands)\n**Prefix:** pb!\n**Ram:** 16GB\n**CPU:** AMD EPYC', 
				inline: true 
			},
			{ 
				name: 'Prune Bot [Red]', 
				value: '[Invite Me](https://discord.com/api/oauth2/authorize?client_id=816474139560378379&permissions=8&scope=bot%20applications.commands)\n**Prefix:** pbr!\n**Ram:** 16GB\n**CPU:** AMD EPYC', 
				inline: true 
			}               
		)		
		.addFields(
			{ 
				name: 'Prune Bot [Blue]', 
				value: '[Invite Me](https://discord.com/api/oauth2/authorize?client_id=815785457672650802&permissions=8&scope=bot%20applications.commands)\n**Prefix:** pbb!\n**Ram:** 16GB\n**CPU:** INTEL XEON', 
				inline: true 
			},
			{ 
				name: 'Prune Bot [Green]', 
				value: '[Invite Me](https://discord.com/api/oauth2/authorize?client_id=869637540896989234&permissions=8&scope=bot%20applications.commands)\n**Prefix:** pbg!\n**Ram:** 16GB\n**CPU:** INTEL XEON', 
				inline: true 
			}               
		)		
		.addFields(
			{ 
				name: 'Prune Bot [Soon]', 
				value: '[Invite Me](https://discord.io/LIMYAW)\n**Prefix:** N/A\n**Ram:** N/A\n**CPU:** N/A', 
				inline: true 
			},
			{ 
				name: 'Prune Bot [Soon]', 
				value: '[Invite Me](https://discord.io/LIMYAW)\n**Prefix:** N/A\n**Ram:** N/A\n**CPU:** N/A', 
				inline: true 
			}               
		)	
		.addFields(
			{ name: ':desktop: Github Project', value: '[Download Code](https://github.com/mashwishi/PruneBot)', inline: true },
			{ name: ':revolving_hearts: Support Project', value: '[Donate](https://ko-fi.com/mashwishi)', inline: true }
		)									                                                                                          		  	
		.setFooter(`©${nowyear} ${client.user.username} Created by Mashwishi.\nCommand requested by: ${message.author.username}#${message.author.discriminator}`, `https://i.imgur.com/ypxq7B9.png`)
		.setThumbnail('https://i.imgur.com/ypxq7B9.png');    
	
	message.channel.send(embed);
};

module.exports.help = {
	name: "invite",
	description: "This command is used for creating invite links.",
	usage: "p!invite",
	accessableby: "Members",
	aliases: ['inv','i', 'invites'],
	cooldown: 180
};
