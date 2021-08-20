const Discord = require("discord.js");
const axios = require('axios').default;
require("dotenv").config();


module.exports.run = async (bot, msg, args) => {

	//Top.GG
	axios.defaults.headers.common['Authorization'] = process.env.TOPGG;
	try {
        const topggvotes = await axios.get(`https://top.gg/api/bots/814580247973986314/check?userId=${msg.author.id}`);
		console.log("[Top.GG] " + msg.author.username + " | Total Vote: " + topggvotes.data.voted); 
		if (topggvotes.data.voted === 0 || topggvotes.data.voted === null) {
		topggvotedcount = "N/A"
		}else {
        topggvotedcount = topggvotes.data.voted;
		}
	} catch (error) {
		console.error(error);
	}	

	//DiscordListSpace | DLS
    var dlsapi = {
        url: `https://api.discordlist.space/v2/bots/814580247973986314/upvotes/status/${msg.author.id}`,
        headers: {'content-type': 'application/json', authorization: process.env.DLS}
    };
    try {
		//Submit api request
		const discordlistspace = await axios.request(dlsapi);
		let dlscount = discordlistspace.data.upvotesThisMonth;

        console.log("[DiscordListSpace] " + msg.author.username + " | Monthly Vote: " + dlscount); 

		if (dlscount == 0 || dlscount == null) {
			dlsvotedcount = "N/A"
		}else {
			dlsvotedcount = dlscount;
		}		
    } catch (error) {
        console.error(error);
    }  

	//discordlistbot | DBL - https://discordbotlist.com/api/bots/prune-bot

	const embed = new Discord.MessageEmbed()
		.setTitle(`Vote | Monthly Stats`)
		.setAuthor('Join our Discord Server', 'https://i.imgur.com/hKeHeEy.gif', 'https://discord.io/LIMYAW')	
		.setColor("#2A2A2A")
		.setDescription(`\n**Username**: ${msg.author.username}#${msg.author.discriminator}\n`)	
        .setThumbnail(msg.author.displayAvatarURL())				
		.addFields(
			{ 
				name: 'discordlist:', 
				value: `Vote(s):\n${dlsvotedcount}\n`, 
                inline: true 
			},		  
			{ 
				name: 'discord.ly:', 
				value: `Vote(s):\nN/A\n`, 
                inline: true 
			},
			{ 
				name: 'Top.gg:', 
				value: `Vote(s):\n${topggvotedcount}\n`, 
                inline: true 
			}	            	                      
		)		
		.addFields(
			{ name: ':desktop: Github Project', value: '[Download Code](https://github.com/mashwishi/PruneBot)', inline: true },
			{ name: ':revolving_hearts: Support Project', value: '[Donate](https://ko-fi.com/mashwishi)', inline: true }
		)									                                                                                          		  	
		.setFooter(`©${nowyear} ${client.user.username} Created by Mashwishi.\nCommand requested by: ${msg.author.username}#${msg.author.discriminator}`, `https://i.imgur.com/ypxq7B9.png`)
		
	
	msg.channel.send(embed);

};

module.exports.help = {
	name: "votes",
	description:
		"Show all of your votes to the bot",
	usage: "p!votes",
	accessableby: "Everyone",
	aliases: [],
	cooldown: 180
};
