console.log('STARTING...')

import { owners } from "./Config";
import BotClient from "./client/BotClient";
import * as dotenv from 'dotenv';
dotenv.config();

const token: string = process.env.H_TOKEN
const client: BotClient = new BotClient({ token, owners})
client.start();