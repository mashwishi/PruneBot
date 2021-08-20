const Discord = require("discord.js");
const axios = require('axios').default;
require("dotenv").config();


module.exports.run = async (bot, msg, args) => {

	//Top.GG 
	axios.defaults.headers.common['Authorization'] = process.env.TOPGG;
	try {
		const topggcountapi = await axios.get('https://top.gg/api/bots/814580247973986314/votes');	
		if (!topggcountapi.data.length) {
		topggcount = "N/A" 
		}else {
		topggcount = topggcountapi.data.length; 
		}
	} catch (error) {
		console.error(error);
	}	

	//DiscordListSpace | DLS
	var dlsapi = {
		url: 'https://api.discordlist.space/v2/bots/814580247973986314/upvotes',
		headers: {'content-type': 'application/json', authorization: process.env.DLS}
	};
	try {
	const discordlistspace = await axios.request(dlsapi);
	var dlscount = Object.keys(discordlistspace.data).length;
	console.log(dlscount);
	if (dlscount === 0 || dlscount === null) {
		dlsvotedcount = "N/A"
		}else {
		dlsvotedcount = dlscount;
		}
	} catch (error) {
		console.error(error);
	}	
	
	//discordlistbot | DBL - https://discordbotlist.com/api/bots/prune-bot

	const embed = new Discord.MessageEmbed()
		.setTitle(`Prune Bot | Vote`)
		.setAuthor('Join our Discord Server', 'https://i.imgur.com/hKeHeEy.gif', 'https://discord.io/LIMYAW')	
		.setDescription('\n')
		.setColor("#2A2A2A")
		.setDescription(`[Repository](https://github.com/mashwishi/PruneBot) **|** [Bugs](https://github.com/mashwishi/PruneBot/issues) **|** [License](https://github.com/mashwishi/PruneBot/blob/master/LICENSE)`)						
		.addFields(
			{ 
				name: 'Voting #1', 
				value: `[discordlist](https://discordlist.space/bot/814580247973986314/upvote)\nVote(s):\n${dlsvotedcount}`, 
				inline: true 
			},
			{ 
				name: 'Voting #2', 
				value: `[discord.ly](https://discordbotlist.com/bots/prune-bot/upvote)\nVote(s):\nN/A`, 
				inline: true 
			},   
			{ 
				name: 'Voting #3', 
				value: `[Top.gg](https://top.gg/bot/814580247973986314/vote)\nVote(s):\n${topggcount}`, 
				inline: true 
			} 			            
		)		
		.addFields(
			{ name: ':desktop: Github Project', value: '[Download Code](https://github.com/mashwishi/PruneBot)', inline: true },
			{ name: ':revolving_hearts: Support Project', value: '[Donate](https://ko-fi.com/mashwishi)', inline: true }
		)									                                                                                          		  	
		.setFooter(`©${nowyear} ${client.user.username} Created by Mashwishi.\nCommand requested by: ${msg.author.username}#${msg.author.discriminator}`, `https://i.imgur.com/ypxq7B9.png`)
		.setThumbnail('https://i.imgur.com/ypxq7B9.png');    
	
	msg.channel.send(embed);

};

module.exports.help = {
	name: "vote",
	description:
		"Give you the links of voting sites!",
	usage: "p!vote",
	accessableby: "Everyone",
	aliases: [],
	cooldown: 180
};
