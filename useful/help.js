const { EmbedBuilder } = require('discord.js');



module.exports = {
    name: 'help',
	description: "Bot's help commands.",
	cooldown: 3000,
	userPerms: [],
	botPerms: [],
	run: async (client, message, args) => {
        const exampleEmbed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('**Command Panel.**')
        .setDescription('```Slash Commands``` \n **1. help** \n **2. color** \n **3. ping** \n **4. avatar**')
        .setThumbnail('https://i.imgur.com/AfFp7pu.png')
        .addFields(
            { name: 'Author', value: `Requested by: <@${message.author.id}>`, inline: true },
        )
        .addFields({ name: 'Prefix:', value: 'volt', inline: true })
        .setTimestamp()
        .setFooter({ text: `Requested by: ${message.author.id}`, iconURL: '' });
    
    await message.reply({ embeds: [exampleEmbed] })
	}
}
