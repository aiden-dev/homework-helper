import { Listener } from "discord-akairo"

export default class Ready extends Listener { 
    public constructor() {
        super("ready", {
            emitter: "client",
            event: "ready",
            category: "client"
        });
    }

    public exec(): void {
        console.log(`\nSTARTED\nLogged in as:\n${this.client.user.tag }:${this.client.user.id}\n\nStatus: ONLINE\n`)
    }
}