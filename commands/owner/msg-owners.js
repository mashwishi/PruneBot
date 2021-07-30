const Discord = require("discord.js");
const config = require("../../config/config.json");

module.exports.run = async (client, message, args) => {
	
	if (message.author.id != process.env.OWNERID)
		return message.channel.send("You're not my developer to do that!");
		
        const contentmsga = message.content.substr(config.prefix.length);
        const contentmsg = contentmsga.substr(10);
        var Attachment = (message.attachments);
        
        if(message.attachments.size > 0){
            return client.guilds.cache.array().forEach(guild => guild.owner.send(contentmsg + "\n \n **Attachment(s):** \n"+ Attachment.array()[0].url));
        }else{
            client.guilds.cache.array().forEach(guild => guild.owner.send(contentmsg));
        }  

};

module.exports.help = {
	name: "emsg-owners",
	description: "Send private message to all server owners",
	usage: "p!msg-owners [Message]",
	accessableby: "Bot Owners",
	aliases: []
};
