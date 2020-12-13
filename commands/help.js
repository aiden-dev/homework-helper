"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
const common_tags_1 = require("common-tags");
class Help extends discord_akairo_1.Command {
    constructor() {
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
                }
            ]
        });
    }
    exec(message, { command }) {
        if (command) {
            return message.channel.send(new discord_js_1.MessageEmbed()
                .setAuthor(`Help | ${command}`, this.client.user.displayAvatarURL())
                .setColor("#0099ff")
                .setTimestamp()
                .setFooter(message.author.tag)
                .setDescription(common_tags_1.stripIndents `
                    **Description:**
                    ${command.description.content || "No description."}
                    **Usage:**
                    ${command.description.usage || "No usage example."}
                    **Examples:**
                    ${command.description.examples ? command.description.examples.map(e => `\`${e}\``).join("\n") : "No examples."}
                `));
        }
        const embed = new discord_js_1.MessageEmbed()
            .setAuthor(`Help | ${this.client.user.username}`, this.client.user.displayAvatarURL())
            .setColor("#0099ff")
            .setFooter(`help {command} for more info. | ${message.author.tag}`)
            .setTimestamp();
        for (const category of this.handler.categories.values()) {
            if (["default"].includes(category.id))
                continue;
            embed.addField(category.id, category
                .filter(cmd => cmd.aliases.length > 0)
                .map(cmd => `**\`${cmd}\``)
                .join(", ") || "No commands in this category.");
        }
        return message.channel.send(embed);
    }
}
exports.default = Help;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9oZWxwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXlDO0FBQ3pDLDJDQUFtRDtBQUNuRCw2Q0FBMkM7QUFFM0MsTUFBcUIsSUFBSyxTQUFRLHdCQUFPO0lBQ3JDO1FBQ0ksS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNWLE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDO1lBQ3JDLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRTtnQkFDVCxPQUFPLEVBQUUsOEJBQThCO2dCQUN2QyxLQUFLLEVBQUUsa0JBQWtCO2dCQUN6QixRQUFRLEVBQUU7b0JBQ04sTUFBTTtvQkFDTixhQUFhO2lCQUNoQjthQUNKO1lBQ0QsSUFBSSxFQUFFO2dCQUNGO29CQUNJLEVBQUUsRUFBRSxTQUFTO29CQUNiLElBQUksRUFBRSxjQUFjO29CQUNwQixPQUFPLEVBQUUsSUFBSTtpQkFDaEI7YUFBQztTQUFDLENBQUMsQ0FBQTtJQUFBLENBQUM7SUFFVixJQUFJLENBQUMsT0FBZ0IsRUFBRSxFQUFFLE9BQU8sRUFBd0I7UUFDM0QsSUFBSSxPQUFPLEVBQUU7WUFDVCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUkseUJBQVksRUFBRTtpQkFDekMsU0FBUyxDQUFDLFVBQVUsT0FBTyxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztpQkFDbkUsUUFBUSxDQUFDLFNBQVMsQ0FBQztpQkFDbkIsWUFBWSxFQUFFO2lCQUNkLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztpQkFDN0IsY0FBYyxDQUFDLDBCQUFZLENBQUE7O3NCQUV0QixPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sSUFBSSxpQkFBaUI7O3NCQUVoRCxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssSUFBSSxtQkFBbUI7O3NCQUVoRCxPQUFPLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYztpQkFDakgsQ0FBQyxDQUNMLENBQUM7U0FDTDtRQUVELE1BQU0sS0FBSyxHQUFHLElBQUkseUJBQVksRUFBRTthQUMzQixTQUFTLENBQUMsVUFBVSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2FBQ3JGLFFBQVEsQ0FBQyxTQUFTLENBQUM7YUFDbkIsU0FBUyxDQUFDLG1DQUFtQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQ2xFLFlBQVksRUFBRSxDQUFBO1FBRW5CLEtBQUssTUFBTSxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDckQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO2dCQUFFLFNBQVM7WUFFaEQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLFFBQVE7aUJBQy9CLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztpQkFDckMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztpQkFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLCtCQUErQixDQUM3QyxDQUFDO1NBQ1Q7UUFFRCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Q0FDSjtBQXhERCx1QkF3REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSBcImRpc2NvcmQtYWthaXJvXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UsIE1lc3NhZ2VFbWJlZCB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcbmltcG9ydCB7IHN0cmlwSW5kZW50cyB9IGZyb20gXCJjb21tb24tdGFnc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVscCBleHRlbmRzIENvbW1hbmQge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKFwiaGVscFwiLCB7XHJcbiAgICAgICAgICAgIGFsaWFzZXM6IFtcImhlbHBcIiwgXCJjb21tYW5kc1wiLCBcImNtZHNcIl0sXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIkNvbW1hbmRzXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlZpZXcgYWxsIGF2YWlsYWJsZSBjb21tYW5kcy5cIixcclxuICAgICAgICAgICAgICAgIHVzYWdlOiBcImBoZWxwIHtjb21tYW5kfWBcIixcclxuICAgICAgICAgICAgICAgIGV4YW1wbGVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJoZWxwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJoZWxwIGRlZmluZVwiXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFyZ3M6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogXCJjb21tYW5kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJjb21tYW5kQWxpYXNcIixcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XX0pfVxyXG5cclxuICAgIHB1YmxpYyBleGVjKG1lc3NhZ2U6IE1lc3NhZ2UsIHsgY29tbWFuZCB9OiB7IGNvbW1hbmQ6IENvbW1hbmQgfSk6IFByb21pc2U8TWVzc2FnZT4ge1xyXG4gICAgICAgIGlmIChjb21tYW5kKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtZXNzYWdlLmNoYW5uZWwuc2VuZChuZXcgTWVzc2FnZUVtYmVkKClcclxuICAgICAgICAgICAgICAgIC5zZXRBdXRob3IoYEhlbHAgfCAke2NvbW1hbmR9YCwgdGhpcy5jbGllbnQudXNlci5kaXNwbGF5QXZhdGFyVVJMKCkpXHJcbiAgICAgICAgICAgICAgICAuc2V0Q29sb3IoXCIjMDA5OWZmXCIpXHJcbiAgICAgICAgICAgICAgICAuc2V0VGltZXN0YW1wKClcclxuICAgICAgICAgICAgICAgIC5zZXRGb290ZXIobWVzc2FnZS5hdXRob3IudGFnKVxyXG4gICAgICAgICAgICAgICAgLnNldERlc2NyaXB0aW9uKHN0cmlwSW5kZW50c2BcclxuICAgICAgICAgICAgICAgICAgICAqKkRlc2NyaXB0aW9uOioqXHJcbiAgICAgICAgICAgICAgICAgICAgJHtjb21tYW5kLmRlc2NyaXB0aW9uLmNvbnRlbnQgfHwgXCJObyBkZXNjcmlwdGlvbi5cIn1cclxuICAgICAgICAgICAgICAgICAgICAqKlVzYWdlOioqXHJcbiAgICAgICAgICAgICAgICAgICAgJHtjb21tYW5kLmRlc2NyaXB0aW9uLnVzYWdlIHx8IFwiTm8gdXNhZ2UgZXhhbXBsZS5cIn1cclxuICAgICAgICAgICAgICAgICAgICAqKkV4YW1wbGVzOioqXHJcbiAgICAgICAgICAgICAgICAgICAgJHtjb21tYW5kLmRlc2NyaXB0aW9uLmV4YW1wbGVzID8gY29tbWFuZC5kZXNjcmlwdGlvbi5leGFtcGxlcy5tYXAoZSA9PiBgXFxgJHtlfVxcYGApLmpvaW4oXCJcXG5cIikgOiBcIk5vIGV4YW1wbGVzLlwifVxyXG4gICAgICAgICAgICAgICAgYClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGVtYmVkID0gbmV3IE1lc3NhZ2VFbWJlZCgpXHJcbiAgICAgICAgICAgIC5zZXRBdXRob3IoYEhlbHAgfCAke3RoaXMuY2xpZW50LnVzZXIudXNlcm5hbWV9YCwgdGhpcy5jbGllbnQudXNlci5kaXNwbGF5QXZhdGFyVVJMKCkpXHJcbiAgICAgICAgICAgIC5zZXRDb2xvcihcIiMwMDk5ZmZcIilcclxuICAgICAgICAgICAgLnNldEZvb3RlcihgaGVscCB7Y29tbWFuZH0gZm9yIG1vcmUgaW5mby4gfCAke21lc3NhZ2UuYXV0aG9yLnRhZ31gKVxyXG4gICAgICAgICAgICAuc2V0VGltZXN0YW1wKClcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBjYXRlZ29yeSBvZiB0aGlzLmhhbmRsZXIuY2F0ZWdvcmllcy52YWx1ZXMoKSkge1xyXG4gICAgICAgICAgICBpZiAoW1wiZGVmYXVsdFwiXS5pbmNsdWRlcyhjYXRlZ29yeS5pZCkpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgZW1iZWQuYWRkRmllbGQoY2F0ZWdvcnkuaWQsIGNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGNtZCA9PiBjbWQuYWxpYXNlcy5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAgICAgLm1hcChjbWQgPT4gYCoqXFxgJHtjbWR9XFxgYClcclxuICAgICAgICAgICAgICAgIC5qb2luKFwiLCBcIikgfHwgXCJObyBjb21tYW5kcyBpbiB0aGlzIGNhdGVnb3J5LlwiXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2UuY2hhbm5lbC5zZW5kKGVtYmVkKTtcclxuICAgIH1cclxufSJdfQ==