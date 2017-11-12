const {Command} = require('discord.js-commando');
var Discord = require('discord.js');

class Stats extends Command {
    //Constructor is ran when the bot is launched
        constructor(client){
            super(client, {
                name: 'stats',
                group: 'stats',
                memberName: 'stats',
                description: 'Gives you stats for a player',
                examples: ['>stats [Name]'],
                args: [
                    {
                        key: 'text',
                        prompt: 'Which player would you like the stat summary for?',
                        type: 'string'
                    }
                ]
            });
        }


    async run(message, { text }) {
        switch(text) {
                case 'aurelia':
                var
                title = "Character Summary for Aurelia Dilaris",
                color = 0xF1C40F,
                description = "Level 3 Paladin, Noble High Elf, Lawful Good",
                strength = "17 + 3",
                dexterity = "14 + 2",
                constitution = "14 + 2",
                intelligence = "10 + 0",
                wisdom = "10 + 0",
                charisma = "15 + 2",
                perception = "12",
                speed = "30",
                armor = "16 + 2",
                hp = "29",
                initiative = "+2",
                proficiency = "+2"
                break;

                case 'faust':
                var
                title = "Character Summary for Faust Meliamne",
                color = 0xF1C40F,
                description = "Level 3 Ranger, Outlander Wood Elf, Chaotic Good",
                strength = "12 + 1",
                dexterity = "20 + 5",
                constitution = "8 - 1",
                intelligence = "11 + 0",
                wisdom = "17 + 3",
                charisma = "4 - 3",
                perception = "12",
                speed = "35",
                armor = "16",
                hp = "15",
                initiative = "+5",
                proficiency = "+2"
                break;

                case 'kohaii':
                var
                title = "Character Summary for Kohaii",
                color = 0xF1C40F,
                description = "Level 3 Rogue, Urchin Half-Orc, Chaotic Neutral",
                strength = "11 + 0 ",
                dexterity = "16 + 3",
                constitution = "12 + 1",
                intelligence = "10 + 0",
                wisdom = "10 + 0",
                charisma = "15 + 2",
                perception = "12",
                speed = "30",
                armor = "14",
                hp = "18",
                initiative = "+3",
                proficiency = "+2"
                break;

                case 'aerico':
                var
                title = "Character Summary for Aerico",
                color = 0xF1C40F,
                description = "Level 3 Warlock, Haunted  Air Genasi, Neutral",
                strength = "9 - 1",
                dexterity = "9 - 1",
                constitution = "15 + 2",
                intelligence = "12 + 1",
                wisdom = "13 + 1",
                charisma = "15 + 2",
                perception = "11",
                speed = "30",
                armor = "10",
                hp = "25",
                initiative = "-1",
                proficiency = "+2"
                break;

                case 'nep':
                var
                title = "Character Summary for Ne'a'politan",
                color = 0xF1C40F,
                description = "Level 2 Barbarian Level 1 Bard, Charlatan Aarakocra, Neutral Good",
                strength = "15 + 2",
                dexterity = "12 + 1",
                constitution = "15 + 2",
                intelligence = "8 - 1",
                wisdom = "14 + 2",
                charisma = "15 + 2",
                perception = "12",
                speed = "25",
                armor = "13",
                hp = "22",
                initiative = "+1",
                proficiency = "+2"
                break;
                case 'zelt':
                var
                title = "Character Summary for Zelt Ferniere",
                color = 0xF1C40F,
                description = "Level 3 , Wizard Silver Dragonborn, Lawful Good",
                strength = "13 + 1",
                dexterity = "10 + 0",
                constitution = "17 + 3",
                intelligence = "15 + 2",
                wisdom = "6 - 2",
                charisma = "12 + 1",
                perception = "8",
                speed = "30",
                armor = "10",
                hp = "25",
                initiative = "+0",
                proficiency = "+2"
                break;
            default:
                var title = "none";
        }

        const embed = {
        embed:
        {
                title: title,
                color: color,
                description: description,

                fields:[
                {
                    name:"Strength",
                    value: strength,
                    inline: true
                },
              {
                name: "Dexterity",
                value: dexterity,
                inline: true
                },
                {
                    name: "Constitution",
                    value: constitution,
                    inline: true
                    },
                    {
                        name: "Intelligence",
                        value: intelligence,
                        inline: true
                        },
                        {
                            name: "Wisdom",
                            value: wisdom,
                            inline: true
                            },
                                {
                                name: "Charisma",
                                value: charisma,
                                inline: true
                                },
                                {
                                    name: "Perception",
                                    value: perception,
                                    inline: true
                                    },
                                    {
                                        name: "Speed",
                                        value: speed,
                                        inline: true
                                    },
                                    {
                                        name: "Armor Class",
                                        value: armor,
                                        inline: true
                                    },
                                    {
                                        name: "HP",
                                        value: hp,
                                        inline: true
                                    },
                                    {
                                        name: "Initiative",
                                        value: initiative,
                                        inline: true
                                    },
                                    {
                                        name: "Proficiency Bonus",
                                        value: proficiency,
                                        inline: true
                                    },
            ]
        }
    }
            
      
        if(title != "none" ){
        message.channel.send(embed);
        } else {
            message.reply("That Player does not exist");
        }
    }
}

module.exports = Stats;