import { Command } from "discord-akairo";
import { Message, MessageEmbed } from "discord.js";
import { stripIndents } from "common-tags";

export default class Help extends Command {
    public constructor() {
        super("help", {
            aliases: ["help", "commands", "cmds"],
            category: "Commands",
            description: {
                content: "View all available commands.",
                usage: "`help {command}`",
                examples: [
                    "help",
                    "help define"
                ]
            },
            args: [
                {
                    id: "command",
                    type: "commandAlias",
                    default: null
                }]})}

    public exec(message: Message, { command }: { command: Command }): Promise<Message> {
        if (command) {
            return message.channel.send(new MessageEmbed()
                .setAuthor(`Help | ${command}`, this.client.user.displayAvatarURL())
                .setColor("#0099ff")
                .setTimestamp()
                .setFooter(message.author.tag)
                .setDescription(stripIndents`
                    **Description:**
                    ${command.description.content || "No description."}
                    **Usage:**
                    ${command.description.usage || "No usage example."}
                    **Examples:**
                    ${command.description.examples ? command.description.examples.map(e => `\`${e}\``).join("\n") : "No examples."}
                `)
            );
        }

        const embed = new MessageEmbed()
            .setAuthor(`Help | ${this.client.user.username}`, this.client.user.displayAvatarURL())
            .setColor("#0099ff")
            .setFooter(`help {command} for more info. | ${message.author.tag}`)
            .setTimestamp()

        for (const category of this.handler.categories.values()) {
            if (["default"].includes(category.id)) continue;

            embed.addField(category.id, category
                .filter(cmd => cmd.aliases.length > 0)
                .map(cmd => `**\`${cmd}\``)
                .join(", ") || "No commands in this category."
                );
        }

        return message.channel.send(embed);
    }
}