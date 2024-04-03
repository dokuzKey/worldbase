const green = (message) => `\x1b[32m${message}\x1b[0m`;
const red = (message) => `\x1b[31m${message}\x1b[0m`;
const yellow = (message) => `\x1b[33m${message}\x1b[0m`;

const advertisement = `${yellow("[ worldbase ] => Information:")} ${green("Thanks for using this module! See more at https://github.com/islemci/worldbase.")}`;

class DatabaseError extends Error {
    constructor(message) {
        super(`${red(message)}\n${advertisement}`);
    }

    get name() {
        return yellow(`[ worldbase ] => ${this.constructor.name}`);
    }
}

module.exports = DatabaseError;