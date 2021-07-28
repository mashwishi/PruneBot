require ('dotenv').config()
const Discord = require('discord.js');
const usedCommand = new Set();
const config = process.env;

module.exports.run = async (bot, message, args) => {
    if(usedCommand.has(message.author.id)){
        message.reply("You cannot use " + config.prefix + "roles command beacuse of the cooldown.")
    } else {
        if (message.content.toLowerCase().startsWith(config.prefix + "servers")) {
            if(message.author.id !== config.ownerid){
                return message.reply("You're not my developer to do that!");
            }      
            message.reply(`This bot is currently in **${bot.guilds.cache.size}** server(s).`)  
          }
        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 5000);
    }
}

module.exports.config = {
    name: "servers",
    description: "",
    usage: "?servers",
    accessableby: "Admins",
    aliases: []
}