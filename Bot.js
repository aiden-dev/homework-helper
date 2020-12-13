"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log('STARTING...');
const Config_1 = require("./Config");
const BotClient_1 = __importDefault(require("./client/BotClient"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const token = process.env.H_TOKEN;
const client = new BotClient_1.default({ token, owners: Config_1.owners });
client.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm90LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL0JvdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO0FBRTFCLHFDQUFrQztBQUNsQyxtRUFBMkM7QUFDM0MsK0NBQWlDO0FBQ2pDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVoQixNQUFNLEtBQUssR0FBVyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQTtBQUN6QyxNQUFNLE1BQU0sR0FBYyxJQUFJLG1CQUFTLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFOLGVBQU0sRUFBQyxDQUFDLENBQUE7QUFDekQsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coJ1NUQVJUSU5HLi4uJylcclxuXHJcbmltcG9ydCB7IG93bmVycyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xyXG5pbXBvcnQgQm90Q2xpZW50IGZyb20gXCIuL2NsaWVudC9Cb3RDbGllbnRcIjtcclxuaW1wb3J0ICogYXMgZG90ZW52IGZyb20gJ2RvdGVudic7XHJcbmRvdGVudi5jb25maWcoKTtcclxuXHJcbmNvbnN0IHRva2VuOiBzdHJpbmcgPSBwcm9jZXNzLmVudi5IX1RPS0VOXHJcbmNvbnN0IGNsaWVudDogQm90Q2xpZW50ID0gbmV3IEJvdENsaWVudCh7IHRva2VuLCBvd25lcnN9KVxyXG5jbGllbnQuc3RhcnQoKTsiXX0=