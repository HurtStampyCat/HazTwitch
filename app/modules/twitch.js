const { twitchStyles } = require("./styles-injection");

document.addEventListener("DOMContentLoaded", () => {
    document.head.appendChild(document.createElement("style")).innerText = twitchStyles;

    var number = 0;

    const tmi = require('../../node_modules/tmi.js');
    const client = new tmi.Client({
        connection: {
          secure: true,
          reconnect: false
        },
        channels: [`${localStorage.getItem("twInput")}`]
    });
    if (localStorage.getItem('connect') === "true") {
        client.connect();
    }
    client.on('message', (channel, tags, message, self) => {
        const a = document.createElement('div');
        a.setAttribute('id', 'twChatMsg_' + number++);
        a.classList.add('twClass');
        a.setAttribute('dir', 'ltr');
        document.getElementById("chatList").appendChild(a);

        if (tags.badges) {
        Object.entries(tags.badges).forEach(([badgeName, badgeVersion]) => {
            const spn = document.createElement("span");
            if (badgeName === 'broadcaster') {
                spn.innerText = "videocam ";
                spn.style.color = "#e91916";
                spn.style.fontFamily = "Material Icons";
                spn.style.fontSize = "20px";
                spn.style.textShadow = "none";
            }
            if (badgeName === 'moderator') {
                spn.innerText = "local_police ";
                spn.style.color = "#00ad03";
                spn.style.fontFamily = "Material Icons";
                spn.style.fontSize = "20px";
                spn.style.textShadow = "none";
            }
            if (badgeName === 'vip') {
                spn.innerText = "diamond ";
                spn.style.color = "#e005b9";
                spn.style.fontFamily = "Material Icons";
                spn.style.fontSize = "20px";
                spn.style.textShadow = "none";
            }
            if (badgeName === 'subscriber') {
                spn.innerText = "star ";
                spn.style.color = "transparent";
                spn.style.webkitBackgroundClip = "text";
                spn.style.backgroundImage = "linear-gradient(to right, #fbc02d, #64bec8, #993299)";
                spn.style.fontFamily = "Material Icons";
                spn.style.fontSize = "20px";
                spn.style.textShadow = "none";
            }
            if (badgeName === 'no_video') {
                spn.innerText = "visibility_off ";
                spn.style.color = "#585861";
                spn.style.fontFamily = "Material Icons";
                spn.style.fontSize = "20px";
                spn.style.textShadow = "none";
            }
            if (badgeName === 'no_audio') {
                spn.innerText = "volume_off ";
                spn.style.color = "#585861";
                spn.style.fontFamily = "Material Icons";
                spn.style.fontSize = "20px";
                spn.style.textShadow = "none";
            }
            const bdg = document.getElementsByClassName('twClass');
            async function magic() {
                for(let item of bdg) {
                    await item.appendChild(spn);
                }
            }
            magic();
        });
        }
        
        const b = document.createElement('span');
        b.classList.add('twSpan');
        b.classList.add('twMsg');

        const c = document.createElement('span');
        c.classList.add('twMsg');
        c.innerText = ": " + message;
        const app = document.getElementsByClassName('twClass');
        async function sex() {
            for(let item of app) {
                await item.appendChild(b);
                await item.appendChild(c);
            }
        }
        sex();

        if (localStorage.getItem('kro_setngss_chatTextOutline') === "true") {
            a.classList.add('chatTextOutline');
            c.classList.add('chatTextOutline');
        }

        b.innerText = tags.username;
        b.style.color = tags.color;

        const clist = document.getElementById('chatList');
        clist.scrollTo(0, clist.scrollHeight);
    });

    const streamer = localStorage.getItem("twInput");
    console.log("Connected to: " + streamer);

    function clear() {
        const list = document.getElementById("chatList");
        const msg = document.getElementById('wipeMsg');
        if (msg) {
            msg.remove();
        }
        if (list) {
            const items = list.getElementsByTagName('div');
            Array.from(items).forEach(function(item) {
                item.remove();
            });
        }
    }

    function wipemsg() {
        if (localStorage.getItem('twitch') === "true") {
        const msg = document.createElement('div');
        msg.setAttribute('id', 'wipeMsg');
        msg.classList.add('twClass');
        msg.style.color = "#fc03ec";
        msg.style.direction = "ltr";
        msg.innerText = "Clearing chat...";
        document.getElementById('chatList').appendChild(msg);

        setTimeout(clear, 3500);
    }
    }
    setInterval(wipemsg, 120000);
});