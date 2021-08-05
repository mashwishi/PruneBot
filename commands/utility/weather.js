const Discord = module.require("discord.js");
const weather = require("weather-js");

module.exports.run = async (bot, message, args) => {
	weather.find({ search: args.join(" "), degreeType: "C" }, (err, result) => {
		if (err) message.channel.send(err);

		// If the place entered is invalid
		if (result.length === 0) {
			message.channel.send("**Type an area**");
			return;
		}

		// Variables
		const { current } = result[0]; // Variable for the current part of the JSON Output
		const { location } = result[0]; // This is a variable for the location part of the JSON Output

		// Sends weather log in embed
		const embed = new Discord.MessageEmbed()
			.setDescription(`**${current.skytext}**`) // How the sky looks like
			.setAuthor(`Weather for ${current.observationpoint}`) // Shows the current location of the weater
			.setThumbnail(current.imageUrl) // Sets thumbnail of the embed
			.setColor(0x00ae86) // Sets the color of the embed
			.addField("Time Zone", `UTC${location.timezone}`, true) // Shows the timezone
			.addField("Degree Type", location.degreetype, true) // Shows the degrees in Celcius
			.addField("Temperature", `${current.temperature}`, true)
			.addField("Feels like", `${current.feelslike} Degrees`, true)
			.addField("Wind speed", current.winddisplay, true)
			.addField("Wet Rate", ` ${current.humidity}%`, true)
			.addField("Week", `${current.day}`, true)
			.addField("Date", `${current.date}`, true)
			.setFooter(
				`©2021 PruneBot | Requested by ${message.author.username}#${message.author.discriminator}`
			);

		// Display when it's called
		message.channel.send(embed);
	});

	message.delete();
};
module.exports.help = {
	name: "weather",
	description:
		"Check the weather in your location or area within newest climate/weather status",
	usage: "p!weather <location/area>",
	accessableby: "Members",
	aliases: [],
	cooldown: 5
};
