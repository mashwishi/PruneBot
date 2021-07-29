const ready = require("./ready");
const guildMemberAdd = require("./guildMemberAdd");

module.exports = bot => {
    bot.on("ready", () => ready(bot));
    bot.on("guildMemberAdd", guildMemberAdd);
}
