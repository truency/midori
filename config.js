module.exports = {
    name: "midori",
    sign: "/",
    userid: "188394341708857346",
    admin: ["132368482120499201"],
    adminServer: ["132368736119291904"],

    colours: {
        default: 0xB699FF,
        success: 0x52C652,
        error: 0xE93F3C,
        warn: 0xF5AD1E,
        info: 0x52B7D6
    },

    commands: [
        {
            command: "admin",
            description: "Administrative Commands",
            admin: true
        },
        {
            command: "air",
            description: "Global Air Pollution Levels"
        },
        {
            command: "define",
            description: "Basic Dictionary",
            alias: ["d"]
        },
        {
            command: "embed",
            description: "Discord Embed API Preview",
            alias: ["e"]
        },
        {
            command: "help",
            description: "Displays the Help Prompt",
            alias: ["halp", "たすけて", "助けて"]
        },
        {
            command: "radar",
            description: "Weather Radar for Australia",
            alias: ["rain", "r"]
        },
        {
            command: "search",
            description: "Search with Google",
            alias: ["s"]
        },
        {
            command: "shibe",
            description: "Posts an Image of Shiba Inus",
            alias: ["shib", "doge"]
        },
        {
            command: "time",
            description: "Grab the Time from a given timezone",
            alias: ["time", "tz"]
        },
        {
            command: "translate",
            description: "Translate with Google",
            alias: ["t"]
        },
        {
            command: "weather",
            description: "Grab the Current Weather",
            alias: ["w"]
        }
    ],

    subprocesses: {
        shake: { description: "Earthquake Alerts" }
        // fires: { description: "Bush Fire Proximity Alerts" }
    },

    weather: {
        "132368482120499201": [
            "Penrith", "NSW", "Australia"
        ],
        "169842543410937856": [
            "Werrington", "NSW", "Australia"
        ],
        "95534503971258368": [
            "700068", "Kolkata", "India"
        ],
        "268963316200767488": [
            "Llandilo", "NSW", "Australia"
        ],
        "133646822060195850": [
            "97225"
        ],
        "189696688657530880": [
            "Narellan", "NSW", "Australia"
        ],
        "97113334289018880": [
            "NYC"
        ],
        "170618937501941760": [
            "Deventer", "NL"
        ],
        "150096595076120576": [
            "Livermore", "CA"
        ],
        "86890631690977280": [
            "Hanover", "Lower Saxony"
        ]
    },

    aqi: {
        "132368482120499201": [
            "3255"
        ],
        "169842543410937856": [
            "3255"
        ],
        "95534503971258368": [
            "7021"
        ]
    }
};
