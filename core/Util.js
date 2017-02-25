const chalk = require("chalk");
const moment = require("moment");
const client = require("../index");
const config = require("../config");
const { RichEmbed } = require("discord.js");

// Logging Time Format
const time = () => moment().format("HH:mm:ss");

// String First Letter Upper Case
const toUpper = exports.toUpper = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

// Global Error Function
exports.error = (name, message, channel) => {
    const embed = new RichEmbed()
        .setColor(config.colours.error)
        .addField("Module", name, true)
        .addField("Time", time(), true)
        .addField("Message", message);

    channel = channel || client.channels.get("212917108445544449");
    log(name, message, "error");

    return channel.sendEmbed(embed);
};

// Global Logging Function
const log = exports.log = (name, message, style, stacktrace) => {
    let styles = {
        default: chalk.white,
        success: chalk.green,
        warn: chalk.yellow,
        error: chalk.red,
        fatal: chalk.bgRed.white,
        info: chalk.blue,
        debug: chalk.magenta
    };

    style = style || "default";

    if (Array.isArray(message)) {
        for (const item of message) {
            console.log(
                styles[style].bold(`[${time()} ${toUpper(name)}]`),
                styles[style](item)
            );
        }

        return false;
    } else if (stacktrace) {
        console.log(
            styles[style].bold(`[${time()} ${toUpper(name)}]`),
            styles[style](message)
        );

        return console.trace(styles[style](message));
    } else {
        message = typeof message === "string" ? message.replace(/\r?\n|\r/g, " ") : message;
        return console.log(
            styles[style].bold(`[${time()} ${toUpper(name)}]`),
            styles[style](message)
        );
    }
};

// Handle User Join
exports.handleJoin = member => {
    if (config.adminServer.includes(member.guild.id)) {
        member.addRole(member.guild.roles.find("name", "Muggle"));
        member.send("", { embed: { "description": "Welcome to Kurisu's Server!\nTo get started, I kindly ask you take the following quizzes,\nand post the results in #general, so you can be sorted in to your appropriate roles!\n \nhttps://my.pottermore.com/user-profile/my-house/ilvermorny \nhttps://my.pottermore.com/user-profile/my-house/hogwarts\n\nWe don't have a set series of rules as we're a relatively small server,\nbut I do kindly ask that you don't spam, be mature and don't troll.\n\nSincerely, Kurisu." } });
    }
};

// Unhandled Promise Rejections
process.on("unhandledRejection", reason =>
    log("Unhandled Rejection", reason, "error", true));

// Unhandled Errors
process.on("uncaughtException", error =>
    log("Uncaught Exception", error, "error", true));

// Log Start
log("Process", "Started", "info");
