const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

	const settings = require("../../config/settings.json");
	const package = require("../../package.json");    
	const prefixesdatabase = client.settings.ensure(message.guild.id, settings); //${package.version}
	
    const embed = new Discord.MessageEmbed()
			.setColor("#6633CC")
			.setDescription(`[Repository](https://github.com/mashwishi/PruneBot) **|** [Bugs](https://github.com/mashwishi/PruneBot/issues) **|** [License](https://github.com/mashwishi/PruneBot/blob/master/LICENSE)`)
			.addFields(
				{ name: 'Node Engine', value: `Version: [${package.engines.node}](https://nodejs.org)`, inline: true },  
                { name: 'Information', value: `[Read Me](${package.homepage})`, inline: true }, 
                { name: 'Author', value: `[${package.author}](https://github.com/mashwishi)`, inline: true }
			)	            						
            .addFields(
				{ name: '@discordjs/opus', value: 'Version: ^0.5.3', inline: true },
				{ name: 'canvacord', value: 'Version: ^5.2.1', inline: true },                
				{ name: 'cryptr', value: 'Version: ^6.0.2', inline: true }
			)		
            .addFields(
				{ name: 'discord-giveaways', value: 'Version: ^4.5.1', inline: true },
				{ name: 'discord.js', value: 'Version: ^12.5.3', inline: true },                
				{ name: 'distube', value: 'Version: ^2.8.15', inline: true }
			)	
            .addFields(
				{ name: 'dotenv', value: 'Version: ^10.0.0', inline: true },
				{ name: 'enmap', value: 'Version: ^5.8.6', inline: true },                
				{ name: 'express', value: 'Version: ^4.17.1', inline: true }
			)	
            .addFields(
				{ name: 'ffmpeg-static', value: 'Version: ^4.4.0', inline: true },
				{ name: 'fs', value: 'Version: ', inline: true },                
				{ name: 'moment', value: 'Version: ', inline: true }
			)	   
            .addFields(
				{ name: 'ms', value: 'Version: ^2.1.3', inline: true },
				{ name: 'node-fetch', value: 'Version: ^2.6.1', inline: true },                
				{ name: 'opusscript', value: 'Version: ^0.0.8', inline: true }
			)	 
            .addFields(
				{ name: 'os', value: 'Version: ^0.1.1', inline: true },
				{ name: 'pet-pet-gif', value: 'Version: ^1.0.8', inline: true },                
				{ name: 'quick.db', value: 'Version: ^7.1.3', inline: true }
			)	 
            .addFields(
				{ name: 'request', value: 'Version: ^1.0.8', inline: true },
				{ name: 'superagent', value: 'Version: ^6.1.0', inline: true },                
				{ name: 'twemoji-parser', value: 'Version: ^13.1.0', inline: true }
			)	 
            .addFields(
				{ name: 'urban', value: 'Version: ^0.3.2', inline: true },
				{ name: 'weather-js', value: 'Version: ^2.0.0', inline: true },                
				{ name: 'ytdl-core', value: 'Version: ^4.8.3', inline: true }
			)	    	                                                                                          		  	
			.setTitle(`Prune Bot | ${package.version} | Packages`)
			.setFooter(`©${nowyear} ${client.user.username} Created by Mashwishi.\nCommand requested by: ${message.author.username}#${message.author.discriminator}`, `https://i.imgur.com/ypxq7B9.png`)
			.setThumbnail('https://i.imgur.com/ypxq7B9.png')    
			.setAuthor('Join our Discord Server', 'https://i.imgur.com/hKeHeEy.gif', 'https://discord.io/LIMYAW');
		message.channel.send({ embed });

};
module.exports.help = {
	name: "packages",
	description: "This command is used for displaying all bot packages.",
	usage: "p!packages",
	accessableby: "Members",
	aliases: ['packages', 'package', 'lib', 'dependencies'],
	cooldown: 180
};
