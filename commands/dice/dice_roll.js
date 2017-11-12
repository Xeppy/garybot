const {Command} = require('discord.js-commando');

class DiceRollCommand extends Command {
    //Constructor is ran when the bot is launched
        constructor(client){
            super(client, {
                name: 'roll',
                group: 'dice',
                memberName: 'roll',
                description: 'Rolls a die',
                args: [
                    {
                        key: 'amount',
                        prompt: 'How many dice/die do you want to roll',
                        type: 'string'
                    },
                    {
                        key: 'number',
                        prompt: 'Which sided dice do you want to roll',
                        type: 'string'
                    }
                ]
            });
        }

        async run(message, args) {
            var sided = parseInt(args.number);
            var numberOf = parseInt(args.amount);
            if(numberOf > 5){
                message.reply("Please only roll up to 5 dice at a time you numnuts!");
                return ;
            }
            for(var i=0; i < numberOf; i++){
            var roll = Math.floor(Math.random() * sided) + 1;
            message.reply("You rolled a " + roll);
            if(roll == 1 && sided == 20){
                message.reply("https://gph.is/2aYrYsE");
            } else if (roll == 20 && sided == 20){
                message.reply("https://mlpforums.com/uploads/post_images/img-3501641-1-tumblr_myy3s0MWYJ1ql55zvo1_500.jpg");
            }
        }
        }
}

module.exports = DiceRollCommand;