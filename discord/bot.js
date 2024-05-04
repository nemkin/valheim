const fs = require('fs');
const dotenv = require('dotenv');
const { exec } = require('child_process');
const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

// dotenv.config({ path: '../public.env' });
// dotenv.config({ path: '../private.env' });
require('dotenv').config();

const { DISCORD_TOKEN, SERVER_NAME, WORLD_NAME, SERVER_PASS } = process.env;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.once('ready', () => { console.log('Ready!'); });

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'valheim') {
        const command = 'docker logs valheim-server | grep -i "join code" | sed -n \'s/.*join code \\([0-9]*\\).*/\\1/p\' | grep "." | tail -n 1';
        exec(command, (error, stdout, stderr) => {
            if (error || stderr) {
		const msg = `Failed to retrieve the join code.\n${error}\n${stderr}`;
                console.error(msg);
                interaction.reply(msg);
                return;
            }
	    const JOIN_CODE = stdout.trim() || '?'



     	    const infoEmbed = new EmbedBuilder()
                .setColor(0xE2C6DF)
                .setTitle(`Valheim Server Info`)
                .setDescription(`Current status of ${SERVER_NAME}:`)
                .addFields(
                    { name: 'World', value: WORLD_NAME, inline: true },
                    { name: 'Join Code', value: JOIN_CODE, inline: true },
                    { name: 'Password', value: SERVER_PASS, inline: true }
                )
                .setTimestamp()
                .setFooter({ text: 'Lilluna', iconURL: 'https://styles.redditmedia.com/t5_jb05l/styles/communityIcon_s3236o15ufk41.png' });

            interaction.reply({ embeds: [infoEmbed] });
        });
    }
});

client.login(DISCORD_TOKEN);
