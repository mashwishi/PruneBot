require ('dotenv').config()
const Discord = require('discord.js');
const usedCommand = new Set();
const config = process.env;

module.exports.run = async (bot, message, args) => {
    if(usedCommand.has(message.author.id)){
        message.reply("You cannot use " + config.prefix + "servers command beacuse of the cooldown.")
    } else {
        if (message.content.toLowerCase().startsWith(config.prefix + "servers")) {
            //check if no perm
            if(message.author.id !== config.ownerID){
            return message.reply("Your not the Bot Owner to do that!");
            }          
            message.reply(`Your bot is in **${bot.guilds.cache.size}** server(s).`)   
          }
        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 10000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
    }
}

module.exports.config = {
    name: "servers",
    description: "",
    usage: "?servers",
    accessableby: "Admins",
    aliases: []
}
