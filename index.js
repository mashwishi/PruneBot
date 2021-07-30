require ('dotenv').config()
const Discord = require('discord.js');
const { readdirSync } = require("fs");
const handleEvents = require("./events");

const config = process.env;
const bot = new Discord.Client({disableEveryone: true});

handleEvents(bot);

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

try
{
    let files = readdirSync("./commands/");
    let jsfiles = files.filter(f => f.split(".").pop() === "js")
    if(jsfiles.length <= 0) {
        return console.log("[LOGS] Couldn't Find Commands!");
    }

    jsfiles.forEach(f => {
        let pull = require(`./commands/${f}`);
        bot.commands.set(pull.config.name, pull);
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        });
    });

    bot.on("message", message => {
        if(message.author.bot || message.channel.type === "dm") return;

        let { content } = message;
        let { prefix } = config;
        if(!content.startsWith(prefix)) return;

        let [ cmd, args ] = content.split(/\s(.+)/);
        cmd = cmd.slice(prefix.length);

        let commandfile = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd))
        if(commandfile) commandfile.run(bot, message, args)
    })

    bot.login(process.env.TOKEN);
}
catch(error)
{
    console.log("Cannot load command files");
    console.log(error);
}
