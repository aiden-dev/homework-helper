import { Command } from "discord-akairo";
import { Message, MessageEmbed } from "discord.js";
const fetch = require("node-fetch");

export default class Define extends Command {
    public constructor() {
        super("define", {
            aliases: ["define", "def", "definition"],
            category: "Commands",
            description: {
                content: "Gets the defintion of a given word.",
                usage: "`define {word}`",
                examples: [
                    "define native",
                    "define book"
                ]
            },
            args: [
                {
                    id: "word",
                    type: "string",
                    match: "rest",
                    default: "example"
                },
                {
                    id: "index",
                    type: "number",
                    match: "rest",
                    default: 1
                }
            ]
        })
    }

    public exec(message: Message, { word, index }: { word: string, index: number }): Promise<Message> {
        word = word.toLowerCase();
        word = (word.split(" ")[0])

        const embed: MessageEmbed = new MessageEmbed()
        const formattedWord: string = word.charAt(0).toUpperCase() + word.slice(1);

        fetch(`https://www.wordsapi.com/mashape/words/${word}?when=2020-12-06T17:10:52.429Z&encrypted=8cfdb18ae723919bea9707bee858bfb9aeb52f0934fd9eb8`).then(function(response) {
            return response.json();
        }).then(function(data) {
            if(data.success == false){
              embed.setTitle(`Definition #${index} of \`${formattedWord}\``)
              .addField("Error", "Word not found [err #203]")
              .setColor("#ff4040")
          }else{

                if(data.results.length >= index) {

                    embed.setTitle(`Definition #${index} of \`${formattedWord}\``)
                    .setColor("#0099ff")
                    .setThumbnail(message.author.displayAvatarURL())
                    .addField("Part of Speech", `${data.results[index-1]["partOfSpeech"]}`, true)
                    
                    if(data.results[index-1]["derivation"]) {
                        embed.addField("Derivatives", `${data.results[index-1]["derivation"]}`, true)
                    }

                    if(data.results[index-1]["synonyms"]) {
                        embed.addField("Synonyms", `${data.results[index-1]["synonyms"]}`, true)
                    }

                    if(data.results[index-1]["examples"]) {
                        embed.addField("Example", `${data.results[index-1]["examples"]}`, true)
                    }

                    embed.addField("Definition", `${data.results[index-1]["definition"]}`, false)
                    .setDescription(`You can go to the next defintion using \`define ${word} ${index+1}\``)

                }else {
                    embed.setTitle(`Definition #${index} of \`${formattedWord}\``)
                    .setColor("#ff4040")
                    .addField("Error", "Index too large [err #182]")
                }
            }
            embed.setFooter(`${message.author.tag}`)
            .setTimestamp()

            return message.util.send(embed)
        });
        return;
    }
}