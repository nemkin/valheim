const { Client, GatewayIntentBits } = require('discord.js');
const fs = require('fs');

//require('dotenv').config({path: '../private.env'});
require('dotenv').config();

const { DISCORD_TOKEN, SERVER_PASS } = process.env;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.once('ready', () => { console.log('Ready!'); });

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'status') {
        //const filePath = '../server/htdocs/status.json';
        const filePath = '/valheim/status.json';

        fs.readFile(filePath, { encoding: 'utf8' }, async (err, data) => {
            if (err) {
                console.error('Error reading the file:', err);
                await interaction.reply('Sorry, I could not read the status right now.');
                return;
            }
            try {
                const json = JSON.parse(data);
                json.password = SERVER_PASS;
                await interaction.reply(`Status: \`\`\`json\n${JSON.stringify(json, null, 2)}\n\`\`\``);
            } catch (parseError) {
                console.error('Error parsing JSON:', parseError);
                await interaction.reply('Sorry, there was an error processing the status.');
            }
        });
    } else if (commandName === 'joincode') {
        const command = 'docker logs valheim-server | grep -i "join code" | sed -n \'s/.*join code \\([0-9]*\\).*/\\1/p\' | grep "." | tail -n 1';
        
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                interaction.reply('Failed to retrieve the join code.');
                return;
            }
            if (stderr) {
                console.error(`stderr: ${stderr}`);
                interaction.reply('An error occurred while trying to retrieve the join code.');
                return;
            }
            interaction.reply(stdout ? `Join Code: ${stdout}` : 'No join code found.');
        });
    }
});

client.login(DISCORD_TOKEN);
