require ('dotenv').config()
const Discord = require('discord.js');
const usedCommand = new Set();
const config = process.env;

module.exports.run = async (bot, message, args) => {
    if(usedCommand.has(message.author.id)){
        message.reply("You cannot use " + config.prefix + "emmessage command beacuse of the cooldown.")
    } else {
        if (message.content.toLowerCase().startsWith(config.prefix + "emmessage")) {

            if(message.author.id !== config.ownerid){
            return message.reply("You're not my developer to do that!");
            }      

            const contentmsga = message.content.substr(config.prefix.length);
            const contentmsg = contentmsga.substr(9);
            var Attachment = (message.attachments);

            if(message.attachments.size > 0){
                const MEAEmbed = new Discord.MessageEmbed() 
                .setColor('#b491c8')
                .setTitle('Prune Bot | Announcement')
                .setAuthor('Join our Discord Server', 'https://i.imgur.com/hKeHeEy.gif', 'https://discord.io/LIMYAW')
                .setDescription(contentmsg)
                .setThumbnail('https://i.imgur.com/ypxq7B9.png')
                .addFields(
                    { name: 'Github (Source Code)', value: 'https://github.com/mashwishi/PruneBot' },
                    { name: 'Support the Developer:', value: 'https://ko-fi.com/mashwishi' }   
                  )       
                .setImage(Attachment.array()[0].url)     
                .setTimestamp()
                .setFooter('PruneBot is created by Mashwishi', 'https://i.imgur.com/DxWDaGv.png');
                            
                return bot.guilds.cache.array().forEach(guild => guild.owner.send(MEAEmbed));
            }  
       
            const MEEmbed = new Discord.MessageEmbed() 
            .setColor('#b491c8')
            .setTitle('Prune Bot | Announcement')
            .setAuthor('Join our Discord Server', 'https://i.imgur.com/hKeHeEy.gif', 'https://discord.io/LIMYAW')
            .setDescription(contentmsg)
            .setThumbnail('https://i.imgur.com/ypxq7B9.png')
            .addFields(
                { name: 'Github (Source Code)', value: 'https://github.com/mashwishi/PruneBot' },
                { name: 'Support the Developer:', value: 'https://ko-fi.com/mashwishi' }   
              )          
            .setTimestamp()
            .setFooter('PruneBot is created by Mashwishi', 'https://i.imgur.com/DxWDaGv.png');
            bot.guilds.cache.array().forEach(guild => guild.owner.send(MEEmbed));

          }
        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 5000); 
    }
}

module.exports.config = {
    name: "emmessage",
    description: "",
    usage: "?emmessage",
    accessableby: "Admins",
    aliases: []
}