const { Client, RichEmbed } = require('discord.js');

const client = new Client();

client.on('ready', () => {
    console.log('Bot Now connected!');
    console.log('Logged In as', client.user.tag)
    client.user.setStatus('dnd'); // online, idle, invisible, dnd

    console.log('Bot status: ', client.user.presence.status);

    // Bot sending a Message to a text channel called test
    const testChannel = client.channels.find(x => x.name === 'test')
    console.log(testChannel)
    // client.channels.find(c => c.name === 'test').send('Hello Server!')

});

// Bot listenning messages
client.on('message', msg => {
    console.log(msg.content)
    if (msg.content === 'ping') {
        msg.reply('pong')
    }

    if (msg.content === 'hello') {
        msg.channel.send(`Hello ${msg.author}`);
    }

    if (msg.content.includes('!test')) {
        msg.channel.send('Glad you are testing');
    }

    if (msg.content === '!fazt') {
        msg.channel.send('https://youtube.com/fazttech');
        msg.channel.send('https://youtube.com/faztcode');
    }

    if (msg.content === '!pretty') {
        const embed = new RichEmbed()
            // .setTitle('A pretty message')
            // .setColor(0xFF0000)
            // .setDescription('Hello', msg.author);
            .addField('Something One', 'Some content', true)
            .addField('Something Two', 'Some content Two', true)
            .addField('Something Three', 'Some content Three', false)
            .setAuthor('Fazt', 'https://pngimage.net/wp-content/uploads/2018/05/code-logo-png-4.png');
        msg.channel.send(embed);
    }

    // Deleting 100 messages
    if (msg.content.startsWith('!clean')) {
        async function clear() {
            try {
                // await msg.delete();
                const fetched = await msg.channel.fetchMessages({limit: 99});
                msg.channel.bulkDelete(fetched);;
                console.log('Messages deleted');
            }
            catch (e) {
                console.log(e);
            }
        }
        clear();
    }
});


const token = 'NTM5ODYzMTAxOTUzMDE1ODEz.DzIiXQ.abZZlw_vs1zkKQ4qEMEpZUgAno4';
client.login(token);