# Homework Helper
## Getting started
#### Requirements
It is recommended that you use [yarn](https://classic.yarnpkg.com/en/) (Optional). You will also need the [TypeScript compiler](https://www.typescriptlang.org/download). [Nodemon](https://github.com/remy/nodemon#installation) (Optional) is used for development testing.

#### Walkthrough
1. Download all the required packages by running `npm i` or `yarn` in the <span style="font-family: monospace">/main</span> directory.
2. After making changes, use the TypeScript Compiler with `tsc` in the<span style="font-family: monospace">/main</span> directory.
3. To run the newly-built code in development mode, move to the <span style="font-family: monospace">/build</span> directory and use `yarn dev`.
    - In a production environment, use `node Bot.js`.
    - The <span style="font-family: monospace">/build</span> directory is set up for [Heroku](https://heroku.com), and may not suit your needs if using another hosting provider.
## Development information
It was coded originally in TypeScript and compiled to JavaScript using `tsc v4.1`. <br>
You can find both the [uncompiled](https://github.com/aiden-dev/homework-helper/tree/main) (TypeScript) and [compiled](https://github.com/aiden-dev/homework-helper/tree/build) (JavaScript) versions here.<br><br>
It is being hosted on [Heroku](https://heroku.com) and once gotten enough support, we will switch it to a dedicated VPS

|  | Version | Most recent version |
| - | - | - |
| Node | `v15.4` | `yes` |
| TypeScript compiler | `v4.1` | `yes` |
| discord.js | `v12.5.1` | `yes` |
| discord-akairo | `v8.1.0` | `yes` |
| Heroku Stack | `heroku-20` | `yes` |
