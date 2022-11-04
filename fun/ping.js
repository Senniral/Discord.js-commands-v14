const { ApplicationCommandType } = require('discord.js');

module.exports = {
	name: 'ping',
	description: "Check if the bot is on.",
	type: ApplicationCommandType.ChatInput,
	cooldown: 3000,
	run: async (client, interaction) => {
		interaction.reply({ content: `🏓 Pong! Latency: **${Math.round(client.ws.ping)} ms**` })
	}
};
