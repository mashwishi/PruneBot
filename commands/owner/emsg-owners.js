const Discord = require("discord.js");
const config = require("../../config/config.json");

module.exports.run = async (client, message, args) => {
	
	if (message.author.id != process.env.OWNERID)
		return message.channel.send("You're not my developer to do that!");
		
        const contentmsga = message.content.substr(config.prefix.length);
        const contentmsg = contentmsga.substr(11);
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
                        
            return client.guilds.cache.array().forEach(guild => guild.owner.send(MEAEmbed));
        }else{
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
            client.guilds.cache.array().forEach(guild => guild.owner.send(MEEmbed));
        }  
   

};
module.exports.help = {
	name: "emsg-owners",
	description: "Send embeded private message to all server owners",
	usage: "p!emsg-owners [Message]",
	accessableby: "Bot Owners",
	aliases: []
};
