const fs = require("fs");

module.exports.config = {
    name: "prefix",
    version: "1.0.1",
    role: 0,
    credits: "cliff",
    description: "Display the prefix of your bot",
    usages: "prefix",
    cooldown: 5,
    aliases: ["prefix", "Prefix", "PREFIX", "prefi"],
};

module.exports.run = function ({ api, event, prefix, admin }) {
    onEvents: async function ({ api, event }) {
        if (event.type === 'message') {
            const message = event.body.trim();

            if (message.startsWith(prefix) || message.startsWith(Prefix) || message.startsWith(anong prefix)) {
                const response = 🌐 System Current prefix is [ ${prefix} ];
                api.shareContact(response, api.getCurrentUserID(), event.threadID)
            }
        }
    }
};