const Discord = require("discord.js");
const config = require("../../config/config.json");

module.exports.run = async (client, message, args) => {

    //User no permission
	const embed6 = new Discord.MessageEmbed()
		.setDescription(
			`${emojis.cross} ${message.author.username}, Missing Permission`
		)
		.setColor("RED");
	if (!message.member.hasPermission("MANAGE_ROLES") || message.author.id === 221838936866029568) {
		return message.channel.send(embed6).then(m => m.delete({ timeout: 5000 }));
	}

    //Bot no permission
    const notice3 = new Discord.MessageEmbed()
    .setDescription(`${emojis.cross} I don't have permission to list people!`)
    .setColor("RED");
	if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) {
		return message.channel.send(notice3).then(m => m.delete({ timeout: 5000 }));
	}

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
		.setDescription("Correct Example: p!urole <role>")
		.setColor("RED");
	if (!id.startsWith('<@&') && id.endsWith('>')) {
		message.delete();
		return message.channel.send(embed7).then(m => m.delete({ timeout: 5000 }));
	}

    //List the urole
    const therole = message.guild.roles.cache.find(role => role.id == mentionedrole); 
    var memberscount = message.guild.roles.cache.get(mentionedrole).members.size;             

    const ListEmbed = new Discord.MessageEmbed() 
    .setTitle('Prune Bot | Total of '+ memberscount +' User(s)')
    .setDescription(`Users that has ${therole} role. \n React ▶️ to view more:  \n` + getUsers(page))
    .setAuthor('Join our Discord Server', 'https://i.imgur.com/hKeHeEy.gif', 'https://discord.io/LIMYAW')
    .setThumbnail('https://i.imgur.com/ypxq7B9.png')
    .setColor('#b491c8')                  
    .setFooter(`©${nowyear} ${client.user.username} Created by Mashwishi.\nCommand requested by: ${message.author.username}#${message.author.discriminator}`, `https://i.imgur.com/ypxq7B9.png`)
    var listMsg = await message.channel.send(ListEmbed); 
        var page = parseInt(args[0]);
        if (!page) {
            page = 1;
        };
        await listMsg.react("◀️");
        await listMsg.react("▶️");
        const filter = (reaction, user) => ["◀️", "▶️"].includes(reaction.emoji.name) && user.id === message.author.id;
        const collector = listMsg.createReactionCollector(filter, {
            time: 120000
        });
        collector.on('collect', (reaction, user) => {
            reaction.emoji.reaction.users.remove(user.id);
            switch (reaction.emoji.name) {
                case "◀️":
                    --page;
                    if (page < 1) {
                        page = 1;
                    };
                    const newlistMsga = new Discord.MessageEmbed()
                    .setTitle('Prune Bot | Total of '+ memberscount +' User(s)')
                    .setDescription(`Users that has ${therole} role. \n` + getUsers(page))
                    .setAuthor('Join our Discord Server', 'https://i.imgur.com/hKeHeEy.gif', 'https://discord.io/LIMYAW')
                    .setThumbnail('https://i.imgur.com/ypxq7B9.png')                                  
                    .setColor('#b491c8')                                        
                    .setFooter(`©${nowyear} ${client.user.username} Created by Mashwishi.\nCommand requested by: ${message.author.username}#${message.author.discriminator}`, `https://i.imgur.com/ypxq7B9.png`)  
                    listMsg.edit(newlistMsga);
                    break;
                case "▶️":
              
                    ++page;
                    const newlistMsgb = new Discord.MessageEmbed()
                    .setTitle('Prune Bot | Total of '+ memberscount +' User(s)')
                    .setDescription(`Users that has ${therole} role. \n` + getUsers(page))
                    .setAuthor('Join our Discord Server', 'https://i.imgur.com/hKeHeEy.gif', 'https://discord.io/LIMYAW')
                    .setThumbnail('https://i.imgur.com/ypxq7B9.png')                                  
                    .setColor('#b491c8')                                      
                    .setFooter(`©${nowyear} ${client.user.username} Created by Mashwishi.\nCommand requested by: ${message.author.username}#${message.author.discriminator}`, `https://i.imgur.com/ypxq7B9.png`)                                                                    
                    listMsg.edit(newlistMsgb);
                    break;
            };
        });
        collector.on('end', collected => {
       
          const done = new Discord.MessageEmbed()                 
          .setTitle('Prune Bot | Total of '+ memberscount +' User(s)')
          .setDescription(`Users that has ${therole} role.`)
          .setAuthor('Join our Discord Server', 'https://i.imgur.com/hKeHeEy.gif', 'https://discord.io/LIMYAW')
          .setThumbnail('https://i.imgur.com/ypxq7B9.png')                        
          .setColor('#b491c8')      
          .addFields(
            { name: 'Reaction Timeout', value: "I'm done looking for reactions on the message!"} 
          )                                         
          .setFooter(`©${nowyear} ${client.user.username} Created by Mashwishi.\nCommand requested by: ${message.author.username}#${message.author.discriminator}`, `https://i.imgur.com/ypxq7B9.png`)   
            //return 
            listMsg.reactions.removeAll();
            listMsg.edit(done);
        });
        function getUsers(n) {
            const list = message.guild.roles.cache.get(mentionedrole).members.map(m => m.user.tag);
        
            var pageNum = (n * 10) - 10;
            if (!pageNum) {
                pageNum = 0;
            };
            return list.slice(pageNum, pageNum + 9).join("\n");
        };


};

module.exports.help = {
	name: "urole",
	description: "This command is used for listing all users with specific role.",
	usage: "p!urole <role>",
	accessableby: "ADMINISTRATOR",
	aliases: [],
	cooldown: 60,
};
