"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
const node_fetch_1 = __importDefault(require("node-fetch"));
class Define extends discord_akairo_1.Command {
    constructor() {
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
        });
    }
    exec(message, { word, index }) {
        word = word.toLowerCase();
        word = (word.split(" ")[0]);
        const embed = new discord_js_1.MessageEmbed();
        const formattedWord = word.charAt(0).toUpperCase() + word.slice(1);
        node_fetch_1.default(`https://www.wordsapi.com/mashape/words/${word}?when=2020-12-06T17:10:52.429Z&encrypted=8cfdb18ae723919bea9707bee858bfb9aeb52f0934fd9eb8`).then(function (response) {
            return response.json();
        }).then(function (data) {
            if (data.success == false) {
                embed.setTitle(`Definition #${index} of \`${formattedWord}\``)
                    .addField("Error", "Word not found [err #203]")
                    .setColor("#ff4040");
            }
            else {
                if (data.results.length >= index) {
                    embed.setTitle(`Definition #${index} of \`${formattedWord}\``)
                        .setColor("#0099ff")
                        .setThumbnail(message.author.displayAvatarURL())
                        .addField("Part of Speech", `${data.results[index - 1]["partOfSpeech"]}`, true);
                    if (data.results[index - 1]["derivation"]) {
                        embed.addField("Derivatives", `${data.results[index - 1]["derivation"]}`, true);
                    }
                    if (data.results[index - 1]["synonyms"]) {
                        embed.addField("Synonyms", `${data.results[index - 1]["synonyms"]}`, true);
                    }
                    if (data.results[index - 1]["examples"]) {
                        embed.addField("Example", `${data.results[index - 1]["examples"]}`, true);
                    }
                    embed.addField("Definition", `${data.results[index - 1]["definition"]}`, false)
                        .setDescription(`You can go to the next defintion using \`define ${word} ${index + 1}\``);
                }
                else {
                    embed.setTitle(`Definition #${index} of \`${formattedWord}\``)
                        .setColor("#ff4040")
                        .addField("Error", "Index too large [err #182]");
                }
            }
            embed.setFooter(`${message.author.tag}`)
                .setTimestamp();
            return message.util.send(embed);
        });
        return;
    }
}
exports.default = Define;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmaW5lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL3B1YmxpYy9kZWZpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtREFBeUM7QUFDekMsMkNBQW1EO0FBQ25ELDREQUErQjtBQUUvQixNQUFxQixNQUFPLFNBQVEsd0JBQU87SUFDdkM7UUFDSSxLQUFLLENBQUMsUUFBUSxFQUFFO1lBQ1osT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxZQUFZLENBQUM7WUFDeEMsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFO2dCQUNULE9BQU8sRUFBRSxxQ0FBcUM7Z0JBQzlDLEtBQUssRUFBRSxpQkFBaUI7Z0JBQ3hCLFFBQVEsRUFBRTtvQkFDTixlQUFlO29CQUNmLGFBQWE7aUJBQ2hCO2FBQ0o7WUFDRCxJQUFJLEVBQUU7Z0JBQ0Y7b0JBQ0ksRUFBRSxFQUFFLE1BQU07b0JBQ1YsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsS0FBSyxFQUFFLE1BQU07b0JBQ2IsT0FBTyxFQUFFLFNBQVM7aUJBQ3JCO2dCQUNEO29CQUNJLEVBQUUsRUFBRSxPQUFPO29CQUNYLElBQUksRUFBRSxRQUFRO29CQUNkLEtBQUssRUFBRSxNQUFNO29CQUNiLE9BQU8sRUFBRSxDQUFDO2lCQUNiO2FBQ0o7U0FDSixDQUFDLENBQUE7SUFDTixDQUFDO0lBRU0sSUFBSSxDQUFDLE9BQWdCLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFtQztRQUMxRSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzFCLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUUzQixNQUFNLEtBQUssR0FBaUIsSUFBSSx5QkFBWSxFQUFFLENBQUE7UUFDOUMsTUFBTSxhQUFhLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FB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SUFDWCxDQUFDO0NBQ0o7QUE3RUQseUJBNkVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gXCJkaXNjb3JkLWFrYWlyb1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlLCBNZXNzYWdlRW1iZWQgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSBcIm5vZGUtZmV0Y2hcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmluZSBleHRlbmRzIENvbW1hbmQge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKFwiZGVmaW5lXCIsIHtcclxuICAgICAgICAgICAgYWxpYXNlczogW1wiZGVmaW5lXCIsIFwiZGVmXCIsIFwiZGVmaW5pdGlvblwiXSxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiQ29tbWFuZHNcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiR2V0cyB0aGUgZGVmaW50aW9uIG9mIGEgZ2l2ZW4gd29yZC5cIixcclxuICAgICAgICAgICAgICAgIHVzYWdlOiBcImBkZWZpbmUge3dvcmR9YFwiLFxyXG4gICAgICAgICAgICAgICAgZXhhbXBsZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICBcImRlZmluZSBuYXRpdmVcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRlZmluZSBib29rXCJcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXJnczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcIndvcmRcIixcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoOiBcInJlc3RcIixcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBcImV4YW1wbGVcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogXCJpbmRleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2g6IFwicmVzdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IDFcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGV4ZWMobWVzc2FnZTogTWVzc2FnZSwgeyB3b3JkLCBpbmRleCB9OiB7IHdvcmQ6IHN0cmluZywgaW5kZXg6IG51bWJlciB9KTogUHJvbWlzZTxNZXNzYWdlPiB7XHJcbiAgICAgICAgd29yZCA9IHdvcmQudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICB3b3JkID0gKHdvcmQuc3BsaXQoXCIgXCIpWzBdKVxyXG5cclxuICAgICAgICBjb25zdCBlbWJlZDogTWVzc2FnZUVtYmVkID0gbmV3IE1lc3NhZ2VFbWJlZCgpXHJcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkV29yZDogc3RyaW5nID0gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSk7XHJcblxyXG4gICAgICAgIGZldGNoKGBodHRwczovL3d3dy53b3Jkc2FwaS5jb20vbWFzaGFwZS93b3Jkcy8ke3dvcmR9P3doZW49MjAyMC0xMi0wNlQxNzoxMDo1Mi40MjlaJmVuY3J5cHRlZD04Y2ZkYjE4YWU3MjM5MTliZWE5NzA3YmVlODU4YmZiOWFlYjUyZjA5MzRmZDllYjhgKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmKGRhdGEuc3VjY2VzcyA9PSBmYWxzZSl7XHJcbiAgICAgICAgICAgICAgZW1iZWQuc2V0VGl0bGUoYERlZmluaXRpb24gIyR7aW5kZXh9IG9mIFxcYCR7Zm9ybWF0dGVkV29yZH1cXGBgKVxyXG4gICAgICAgICAgICAgIC5hZGRGaWVsZChcIkVycm9yXCIsIFwiV29yZCBub3QgZm91bmQgW2VyciAjMjAzXVwiKVxyXG4gICAgICAgICAgICAgIC5zZXRDb2xvcihcIiNmZjQwNDBcIilcclxuICAgICAgICAgIH1lbHNle1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKGRhdGEucmVzdWx0cy5sZW5ndGggPj0gaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbWJlZC5zZXRUaXRsZShgRGVmaW5pdGlvbiAjJHtpbmRleH0gb2YgXFxgJHtmb3JtYXR0ZWRXb3JkfVxcYGApXHJcbiAgICAgICAgICAgICAgICAgICAgLnNldENvbG9yKFwiIzAwOTlmZlwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXRUaHVtYm5haWwobWVzc2FnZS5hdXRob3IuZGlzcGxheUF2YXRhclVSTCgpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRGaWVsZChcIlBhcnQgb2YgU3BlZWNoXCIsIGAke2RhdGEucmVzdWx0c1tpbmRleC0xXVtcInBhcnRPZlNwZWVjaFwiXX1gLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5yZXN1bHRzW2luZGV4LTFdW1wiZGVyaXZhdGlvblwiXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWJlZC5hZGRGaWVsZChcIkRlcml2YXRpdmVzXCIsIGAke2RhdGEucmVzdWx0c1tpbmRleC0xXVtcImRlcml2YXRpb25cIl19YCwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5yZXN1bHRzW2luZGV4LTFdW1wic3lub255bXNcIl0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1iZWQuYWRkRmllbGQoXCJTeW5vbnltc1wiLCBgJHtkYXRhLnJlc3VsdHNbaW5kZXgtMV1bXCJzeW5vbnltc1wiXX1gLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZihkYXRhLnJlc3VsdHNbaW5kZXgtMV1bXCJleGFtcGxlc1wiXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWJlZC5hZGRGaWVsZChcIkV4YW1wbGVcIiwgYCR7ZGF0YS5yZXN1bHRzW2luZGV4LTFdW1wiZXhhbXBsZXNcIl19YCwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZW1iZWQuYWRkRmllbGQoXCJEZWZpbml0aW9uXCIsIGAke2RhdGEucmVzdWx0c1tpbmRleC0xXVtcImRlZmluaXRpb25cIl19YCwgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgLnNldERlc2NyaXB0aW9uKGBZb3UgY2FuIGdvIHRvIHRoZSBuZXh0IGRlZmludGlvbiB1c2luZyBcXGBkZWZpbmUgJHt3b3JkfSAke2luZGV4KzF9XFxgYClcclxuXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1iZWQuc2V0VGl0bGUoYERlZmluaXRpb24gIyR7aW5kZXh9IG9mIFxcYCR7Zm9ybWF0dGVkV29yZH1cXGBgKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXRDb2xvcihcIiNmZjQwNDBcIilcclxuICAgICAgICAgICAgICAgICAgICAuYWRkRmllbGQoXCJFcnJvclwiLCBcIkluZGV4IHRvbyBsYXJnZSBbZXJyICMxODJdXCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZW1iZWQuc2V0Rm9vdGVyKGAke21lc3NhZ2UuYXV0aG9yLnRhZ31gKVxyXG4gICAgICAgICAgICAuc2V0VGltZXN0YW1wKClcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBtZXNzYWdlLnV0aWwuc2VuZChlbWJlZClcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn0iXX0=