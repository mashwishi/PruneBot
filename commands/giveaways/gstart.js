const ms = require("ms");

module.exports.run = async (client, message, args) => {
	// If the member doesn't have enough permissions
	if (
		!message.member.hasPermission("MANAGE_MESSAGES") &&
		!message.member.roles.cache.some(r => r.name === "Giveaways")
	) {
		return message.channel.send(
			":x: You need to have the manage messages permissions to start giveaways."
		);
	}

	// Giveaway channel
	const giveawayChannel = message.mentions.channels.first();
	// If no channel is mentionned
	if (!giveawayChannel) {
		return message.channel.send(":x: You have to mention a valid channel!");
	}

	// Giveaway duration
	const giveawayDuration = args[1];
	// If the duration isn't valid
	if (!giveawayDuration || isNaN(ms(giveawayDuration))) {
		return message.channel.send(":x: You have to specify a valid duration!");
	}

	// Number of winners
	const giveawayNumberWinners = args[2];
	// If the specified number of winners is not a number
	if (isNaN(giveawayNumberWinners) || parseInt(giveawayNumberWinners) <= 0) {
		return message.channel.send(
			":x: You have to specify a valid number of winners!"
		);
	}

	// Giveaway prize
	const giveawayPrize = args.slice(3).join(" ");
	// If no prize is specified
	if (!giveawayPrize) {
		return message.channel.send(":x: You have to specify a valid prize!");
	}

	// Start the giveaway
	client.giveawaysManager.start(giveawayChannel, {
		// The giveaway duration
		time: ms(giveawayDuration),
		// The giveaway prize
		prize: giveawayPrize,
		// The giveaway winner count
		winnerCount: parseInt(giveawayNumberWinners),
		// Who hosts this giveaway
		hostedBy: client.config.hostedBy ? message.author : null,
		// Messages
		messages: {
			giveaway: `${
				client.config.everyoneMention ? "@everyone\n\n" : ""
			}🎉🎉 **GIVEAWAY** 🎉🎉`,
			giveawayEnded: `${
				client.config.everyoneMention ? "@everyone\n\n" : ""
			}🎉🎉 **GIVEAWAY ENDED** 🎉🎉`,
			timeRemaining: "Time remaining: **{duration}**!",
			inviteToParticipate: "React with 🎉 to participate!",
			winMessage: "Congratulations, {winners}! You won **{prize}**!",
			embedFooter: "Giveaways",
			noWinner: "Giveaway cancelled, no valid participations.",
			hostedBy: "Hosted by: {user}",
			winners: "winner(s)",
			endedAt: "Ended at",
			units: {
				seconds: "seconds",
				minutes: "minutes",
				hours: "hours",
				days: "days",
				pluralS: false // Not needed, because units end with a S so it will automatically removed if the unit value is lower than 2
			}
		}
	});

	message.channel.send(`Giveaway started in ${giveawayChannel}!`);
};

module.exports.help = {
	name: "gstart",
	description: "This command is used for creating a giveawya for events.",
	usage: "p!gstart <channel> <duration> <winner> <prize>",
	accessableby: "Member",
	aliases: []
};
