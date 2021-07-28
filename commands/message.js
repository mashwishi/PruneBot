require ('dotenv').config()
const Discord = require('discord.js');
const usedCommand = new Set();
const config = process.env;

module.exports.run = async (bot, message, args) => {
    if(usedCommand.has(message.author.id)){
        message.reply("You cannot use " + config.prefix + "message command beacuse of the cooldown.")
    } else {
        if (message.content.toLowerCase().startsWith(config.prefix + "message")) {
            //check if no perm
            if(message.author.id !== config.ownerid){
            return message.reply("You're not my developer to do that!");
            }      

            const contentmsga = message.content.substr(config.prefix.length);
            const contentmsg = contentmsga.substr(9);
            var Attachment = (message.attachments);

            //check if there's attachment
            if(message.attachments.size > 0){
            return bot.guilds.cache.array().forEach(guild => guild.owner.send(contentmsg + "\n \n **Attachment(s): \n"+ Attachment.array()[0].url));
            }  
            //this will run if no attachment
            bot.guilds.cache.array().forEach(guild => guild.owner.send(contentmsg));
          }

        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 5000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
    }
}

module.exports.config = {
    name: "message",
    description: "",
    usage: "?message",
    accessableby: "Admins",
    aliases: []
}