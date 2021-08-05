const Discord = require("discord.js");
const settings = require("../../config/settings.json");

//const cooldowns = new Discord.Collection();

//create cooldowns map
const cooldowns = new Map();

module.exports = async (client, message) => {
	if (message.author.bot) return;
	const prefixesdatabase = client.settings.ensure(message.guild.id, settings);

	if (!client.settings.get(message.guild.id, "prefix")) {
		client.settings.set(message.guild.id, {
			prefix: settings.prefix
		});
	}

	if (message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) {
		message.reply(`my prefix is: \`${prefixesdatabase.prefix}\``);
	}

	if (!message.content.startsWith(prefixesdatabase.prefix)) return;

	let commandText = message.content.split(" ")[0].slice(prefixesdatabase.prefix.length);
	if (!client.commands.has(commandText)) {
		commandText = client.aliases.get(commandText);
		if (!commandText) return;
	}
	
	const command = client.commands.get(commandText);
	const args = message.content.split(" ").slice(1);
	
	if (!cooldowns.has(command.help.name)) {
		cooldowns.set(command.help.name, new Discord.Collection());
	}
	
	const now = Date.now();
	const timestamps = cooldowns.get(command.help.name);
	const cooldownAmount = (command.help.cooldown || 2) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			const timeLeftfinal = new Date(timeLeft * 1000).toISOString().substr(11, 8)
			return message.reply(
				`Before using **${
					prefixesdatabase.prefix
				}${commandText}**, please wait for **${timeLeftfinal}** second for cooldowns!`
			).then(m => m.delete({ timeout: 5000 }));
		}
	}
	
	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
	
	try {
		command.run(client, message, args);
	} catch (e) {
		return console.log(`Invalid command: ${commandText}`);
	} finally {
		console.log(
			`${message.author.username} using command ${prefixesdatabase.prefix}${commandText}`
		);
	}
};
