require ('dotenv').config()
const Discord = require('discord.js');
const usedCommand = new Set();
const config = process.env;

module.exports.run = async (bot, message, args) => {
    if(usedCommand.has(message.author.id)){
        message.reply("You cannot use " + config.prefix + "fetch command beacuse of the cooldown.")
    } else {
        if (message.content.toLowerCase().startsWith(config.prefix + "fetch")) {  
            //check if no perm
            if(!message.member.hasPermission("ADMINISTRATOR")){
              return message.reply("You don't have `ADMINISTRATOR` permission to do that!");
            }    
            message.reply('Updating the user datas...');    
            message.guild.members.fetch()
            .then(console.log)
            message.reply('The data in cache has been updated!')  
            .catch(console.error);      
          }
        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 300000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds 300000 = 5mins.
    }
}

module.exports.config = {
    name: "fetch",
    description: "",
    usage: "?fetch",
    accessableby: "Admins",
    aliases: []
}