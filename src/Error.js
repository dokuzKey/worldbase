const green = (message) => `\x1b[32m${message}\x1b[0m`;
const red = (message) => `\x1b[31m${message}\x1b[0m`;
const yellow = (message) => `\x1b[33m${message}\x1b[0m`;

const advertisement = `${yellow("[ wordbase ] => Information:")} ${green("Thanks for using this module! See more at https://github.com/islemci/wordbase.")}`;

class DatabaseError extends Error {
    constructor(message) {
        super(`${red(message)}\n${advertisement}`);
    }

    get name() {
        return yellow(`[ wordbase ] => ${this.constructor.name}`);
    }
}

module.exports = DatabaseError;