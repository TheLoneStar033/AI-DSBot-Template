const { SlashCommandBuilder } = require('discord.js');
const ollamaService = require('../services/ollamaService');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ask')
        .setDescription('Ask the AI a question')
        .addStringOption(option =>
            option.setName('prompt')
                .setDescription('The question you want to ask')
                .setRequired(true)
        ),

    run: async ({ interaction, client, handler }) => {
        const prompt = interaction.options.getString('prompt');

        await interaction.deferReply();

        try {
            const response = await ollamaService.generateResponse(prompt);

            // Discord has a 2000 character limit for messages.
            if (response.length > 2000) {
                await interaction.editReply(response.substring(0, 1997) + '...');
            } else {
                await interaction.editReply(response);
            }
        } catch (error) {
            if (error.message === 'BUSY') {
                await interaction.editReply('The bot is currently busy with another request. Please try again in a moment.');
            } else {
                await interaction.editReply('Sorry, I encountered an error while trying to reach the AI.');
            }
        }
    },
};
