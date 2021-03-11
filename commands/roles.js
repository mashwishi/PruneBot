require ('dotenv').config()
const Discord = require('discord.js');
const usedCommand = new Set();
const config = process.env;

module.exports.run = async (bot, message, args) => {
    if(usedCommand.has(message.author.id)){
        message.reply("You cannot use " + config.prefix + "roles command beacuse of the cooldown.")
    } else {
        if (message.content.toLowerCase().startsWith(config.prefix + "roles")) {
            //check if no perm
            if(!message.member.hasPermission("ADMINISTRATOR")){
              return message.reply("You don't have `ADMINISTRATOR` permission to do that!");
            }      
            message.guild.members.fetch()
            let rolemap = message.guild.roles.cache
            .sort((a, b) => b.position - a.position)
            .map(r => r)
            .join(",");
            if (rolemap.length > 1024) rolemap = "To many roles to display";
            if (!rolemap) rolemap = "No roles";
            const rolesembed = new Discord.MessageEmbed()
            .setTitle('Prune Bot | Sever Roles')   
            .setDescription("")
            .addField("Role List:" , rolemap, true)   
            .addField("Total Roles:", `${message.guild.roles.cache.size}` , true)     
            message.channel.send(rolesembed);
          }
        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 15000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
    }
}

module.exports.config = {
    name: "roles",
    description: "",
    usage: "?roles",
    accessableby: "Admins",
    aliases: []
}