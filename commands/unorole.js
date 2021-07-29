require ('dotenv').config()
const Discord = require('discord.js');
const usedCommand = new Set();
const config = process.env;
module.exports.run = async (bot, message, args) => {
    if(usedCommand.has(message.author.id)){
        message.reply("You cannot use " + config.prefix + "unorole command beacuse of the cooldown.")
    } else {
        if (message.content.toLowerCase().startsWith(config.prefix + "unorole")) {
            if(!message.member.hasPermission("ADMINISTRATOR")){
              return message.reply("You don't have `ADMINISTRATOR` permission to do that!");
            }              
              var memberscount = message.guild.members.cache.filter(member => member.roles.cache.array().length < 2).size;
                if (memberscount == 0){
                message.reply('Looks like everyone has a role already.') 
                }
                else{         
                    const ListEmbed = new Discord.MessageEmbed() 
                    .setTitle('Prune Bot | Total of '+ memberscount +' User(s)')
                    .setDescription(`Users that has no role. \n React ▶️ to view more:  \n` + getUsers(page))
                    .setAuthor('Join our Discord Server', 'https://i.imgur.com/hKeHeEy.gif', 'https://discord.io/LIMYAW')
                    .setThumbnail('https://i.imgur.com/ypxq7B9.png')
                    .setColor('#b491c8')                  
                    .setFooter('PruneBot is created by Mashwishi', 'https://i.imgur.com/DxWDaGv.png');
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
                                    .setDescription(`Users that has no role. \n` + getUsers(page))
                                    .setAuthor('Join our Discord Server', 'https://i.imgur.com/hKeHeEy.gif', 'https://discord.io/LIMYAW')
                                    .setThumbnail('https://i.imgur.com/ypxq7B9.png')                                  
                                    .setColor('#b491c8')                                        
                                    .setFooter('PruneBot is created by Mashwishi', 'https://i.imgur.com/DxWDaGv.png');  
                                    listMsg.edit(newlistMsga);
                                    break;
                                case "▶️":
                                    ++page;
                                    const newlistMsgb = new Discord.MessageEmbed()
                                    .setTitle('Prune Bot | Total of '+ memberscount +' User(s)')
                                    .setDescription(`Users that has no role. \n` + getUsers(page))
                                    .setAuthor('Join our Discord Server', 'https://i.imgur.com/hKeHeEy.gif', 'https://discord.io/LIMYAW')
                                    .setThumbnail('https://i.imgur.com/ypxq7B9.png')                                  
                                    .setColor('#b491c8')                                      
                                    .setFooter('PruneBot is created by Mashwishi', 'https://i.imgur.com/DxWDaGv.png');                                                                    
                                    listMsg.edit(newlistMsgb);
                                    break;
                            };
                        });
                        collector.on('end', collected => {                       
                          const done = new Discord.MessageEmbed()                 
                          .setTitle('Prune Bot | Total of '+ memberscount +' User(s)')
                          .setDescription(`Users that has no role.`)
                          .setAuthor('Join our Discord Server', 'https://i.imgur.com/hKeHeEy.gif', 'https://discord.io/LIMYAW')
                          .setThumbnail('https://i.imgur.com/ypxq7B9.png')                        
                          .setColor('#b491c8')      
                          .addFields(
                            { name: 'Reaction Timeout', value: "I'm done looking for reactions on the message!"} 
                          )                                         
                          .setFooter('PruneBot is created by Mashwishi', 'https://i.imgur.com/DxWDaGv.png');   
                            listMsg.reactions.removeAll();
                            listMsg.edit(done);
                        });
                        function getUsers(n) {
                            const list = message.guild.members.cache.filter(member => member.roles.cache.array().length < 2).map(member => member.user.tag);
                            var pageNum = (n * 10) - 10;
                            if (!pageNum) {
                                pageNum = 0;
                            };
                            return list.slice(pageNum, pageNum + 9).join("\n");
                        };
                } 
        }
        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 5000); 
    }
}

module.exports.config = {
    name: "unorole",
    description: "",
    usage: "?unorole",
    accessableby: "Admins",
    aliases: []
}