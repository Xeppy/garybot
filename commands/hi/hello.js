const {Command} = require('discord.js-commando');

class Hello extends Command {
    //Constructor is ran when the bot is launched
        constructor(client){
            super(client, {
                name: 'say',
                group: 'hi',
                memberName: 'say',
                description: 'Replies with the text you provide.',
                examples: ['say Hi there!'],
                args: [
                    {
                        key: 'text',
                        prompt: 'What text would you like the bot to say?',
                        type: 'string'
                    }
                ]
            });
        }

      async run(msg, { text }) {
            msg.delete();
            return msg.say(text);
        }
}

module.exports = Hello;