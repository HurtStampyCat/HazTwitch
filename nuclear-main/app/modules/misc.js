const { ipcRenderer } = require("electron");

document.addEventListener('DOMContentLoaded', () => {
    function cfind() {
        const clan = document.getElementsByClassName('menuClassPlayerClan')[0];
        if (clan) {
            const out = clan.innerText;
            localStorage.setItem('actclan', out);
        }
    }
    if (localStorage.getItem('actclan') === null) {
        setInterval(cfind, 500);
    }
    function clans() {
        fetch("https://raw.githubusercontent.com/rudyoriginal/sex/main/clans.json").then(response => response.json()).then(data => {
            const clanjson = Object.keys(data.clns);
            clanjson.forEach(element => {
                const magic = data.clns[element].sty;
                const check = localStorage.getItem('actclan');
                if (element === check) {
                    document.getElementById('sexClans').innerText = `
                    .leaderNameM > span, .newLeaderNameM > span, .menuClassPlayerClan {
                        ${magic}
                    }
                    `;
                }
            function clmagic() {
                const leaderf = document.querySelectorAll(".leaderNameF > span");
                for (var i = 0; i < leaderf.length; i++) {
                    if (" " + element === leaderf[i].innerText) {
                        leaderf[i].setAttribute('style', `${magic}`);
                    }
                }
                const leader = document.querySelectorAll(".leaderName > span");
                for (var i = 0; i < leader.length; i++) {
                    if (" " + element === leader[i].innerText) {
                        leader[i].setAttribute('style', `${magic}`);
                    }
                }

                const newleaderf = document.querySelectorAll(".newLeaderNameF > span");
                for (var i = 0; i < newleaderf.length; i++) {
                    if (" " + element === newleaderf[i].innerText) {
                        newleaderf[i].setAttribute('style', `${magic}`);
                    }
                }
                const newleader = document.querySelectorAll(".newLeaderName > span");
                for (var i = 0; i < newleader.length; i++) {
                    if (" " + element === newleader[i].innerText) {
                        newleader[i].setAttribute('style', `${magic}`);
                    }
                }
            }

                const targetNode = document.getElementById('leaderContainer');
                const config = { childList: true };

                const callback = (mutationList, observer) => {
                for (const mutation of mutationList) {
                    if (mutation.type === 'childList') {
                        clmagic();
                        observer.disconnect();
                    }
                }
                observer.observe(targetNode, config);
                };
                const observer = new MutationObserver(callback);
                observer.observe(targetNode, config);
            });
        });
    }
    clans();

    function badges() {
        fetch("https://raw.githubusercontent.com/rudyoriginal/sex/main/badges.json").then(response => response.json()).then(data => {
            const badgejson = Object.keys(data.bdgs);
            badgejson.forEach(element => {
                const check = localStorage.getItem('krunker_username');
                const menuloop = data.bdgs[element];
                if (element === check) {
                    const tag = document.getElementById('menuClassNameTag');
                    function mentag() {
                        if (tag) {
                            for (let i = 0; i < menuloop.length; i++) {
                                if (menuloop[i] === "DEV") {
                                    const spa = document.createElement('img');
                                    spa.setAttribute('src', 'https://github.com/rudyoriginal/sex/blob/main/icns/dev.png?raw=true');
                                    spa.classList.add('sexBadges');
                                    tag.appendChild(spa);
                                } 
                                if (menuloop[i] === "VIP") {
                                    const spa = document.createElement('img');
                                    spa.setAttribute('src', 'https://github.com/rudyoriginal/sex/blob/main/icns/vip.png?raw=true');
                                    spa.classList.add('sexBadges');
                                    tag.appendChild(spa);
                                }
                                if (menuloop[i] === "BETA") {
                                    const spa = document.createElement('img');
                                    spa.setAttribute('src', 'https://github.com/rudyoriginal/sex/blob/main/icns/beta.png?raw=true');
                                    spa.classList.add('sexBadges');
                                    tag.appendChild(spa);
                                }
                                if (menuloop[i] === "CC") {
                                    const spa = document.createElement('img');
                                    spa.setAttribute('src', 'https://github.com/rudyoriginal/sex/blob/main/icns/cc.png?raw=true');
                                    spa.classList.add('sexBadges');
                                    tag.appendChild(spa);
                                }
                            }
                        }
                    }
                    const targetNode = document.getElementById('menuClassNameTag');
                    const config = { childList: true };

                    const callback = (mutationList, observer) => {
                    for (const mutation of mutationList) {
                        if (mutation.type === 'childList') {
                            const rem = document.getElementsByClassName('sexBadges');
                            for (let i = 0; i < rem.length; i++) {
                                rem[i].remove();
                            }
                            mentag();
                            observer.disconnect();
                        }
                    }
                    observer.observe(targetNode, config);
                    };
                    const observer = new MutationObserver(callback);
                    observer.observe(targetNode, config);
                }
                
                function bdgsmagic() {
                    const leaderf = document.querySelectorAll(".leaderNameF");
                    for (var i = 0; i < leaderf.length; i++) {
                        if (element === leaderf[i].innerText) {
                            for (let i = 0; i < menuloop.length; i++) {
                            if (menuloop[i] === "DEV") {
                                const spa = document.createElement('img');
                                spa.setAttribute('src', 'https://github.com/rudyoriginal/sex/blob/main/icns/dev.png?raw=true');
                                spa.classList.add('sexBadgesGame');
                                spa.style.marginBottom = "10px";
                                spa.style.marginRight = "5px";
                                leaderf[i].insertBefore(spa, leaderf[i].childNodes[0]);
                            } 
                            if (menuloop[i] === "VIP") {
                                const spa = document.createElement('img');
                                spa.setAttribute('src', 'https://github.com/rudyoriginal/sex/blob/main/icns/vip.png?raw=true');
                                spa.classList.add('sexBadgesGame');
                                spa.style.marginBottom = "10px";
                                spa.style.marginRight = "5px";
                                leaderf[i].insertBefore(spa, leaderf[i].childNodes[0]);
                            }
                            if (menuloop[i] === "BETA") {
                                const spa = document.createElement('img');
                                spa.setAttribute('src', 'https://github.com/rudyoriginal/sex/blob/main/icns/beta.png?raw=true');
                                spa.classList.add('sexBadgesGame');
                                spa.style.marginBottom = "10px";
                                spa.style.marginRight = "5px";
                                leaderf[i].insertBefore(spa, leaderf[i].childNodes[0]);
                            }
                            if (menuloop[i] === "CC") {
                                const spa = document.createElement('img');
                                spa.setAttribute('src', 'https://github.com/rudyoriginal/sex/blob/main/icns/cc.png?raw=true');
                                spa.classList.add('sexBadgesGame');
                                spa.style.marginBottom = "10px";
                                spa.style.marginRight = "5px";
                                leaderf[i].insertBefore(spa, leaderf[i].childNodes[0]);
                            }
                        }
                        }
                    }
                    const leader = document.querySelectorAll(".leaderName");
                    for (var i = 0; i < leader.length; i++) {
                        if (element === leader[i].innerText) {
                            for (let i = 0; i < menuloop.length; i++) {
                            if (menuloop[i] === "DEV") {
                                const spa = document.createElement('img');
                                spa.setAttribute('src', 'https://github.com/rudyoriginal/sex/blob/main/icns/dev.png?raw=true');
                                spa.classList.add('sexBadgesGame');
                                spa.style.marginBottom = "10px";
                                spa.style.marginRight = "5px";
                                leader[i].insertBefore(spa, leader[i].childNodes[0]);
                            } 
                            if (menuloop[i] === "VIP") {
                                const spa = document.createElement('img');
                                spa.setAttribute('src', 'https://github.com/rudyoriginal/sex/blob/main/icns/vip.png?raw=true');
                                spa.classList.add('sexBadgesGame');
                                spa.style.marginBottom = "10px";
                                spa.style.marginRight = "5px";
                                leader[i].insertBefore(spa, leader[i].childNodes[0]);
                            }
                            if (menuloop[i] === "BETA") {
                                const spa = document.createElement('img');
                                spa.setAttribute('src', 'https://github.com/rudyoriginal/sex/blob/main/icns/beta.png?raw=true');
                                spa.classList.add('sexBadgesGame');
                                spa.style.marginBottom = "10px";
                                spa.style.marginRight = "5px";
                                leader[i].insertBefore(spa, leader[i].childNodes[0]);
                            }
                            if (menuloop[i] === "CC") {
                                const spa = document.createElement('img');
                                spa.setAttribute('src', 'https://github.com/rudyoriginal/sex/blob/main/icns/cc.png?raw=true');
                                spa.classList.add('sexBadgesGame');
                                spa.style.marginBottom = "10px";
                                spa.style.marginRight = "5px";
                                leader[i].insertBefore(spa, leader[i].childNodes[0]);
                            }
                        }
                        }
                    }

                    const newleaderf = document.querySelectorAll(".newLeaderNameF");
                    for (var i = 0; i < newleaderf.length; i++) {
                        if (element === newleaderf[i].innerText) {
                            for (let i = 0; i < menuloop.length; i++) {
                            if (menuloop[i] === "DEV") {
                                const spa = document.createElement('img');
                                spa.setAttribute('src', 'https://github.com/rudyoriginal/sex/blob/main/icns/dev.png?raw=true');
                                spa.classList.add('sexBadgesGame');
                                spa.style.marginBottom = "10px";
                                spa.style.marginRight = "5px";
                                newleaderf[i].insertBefore(spa, newleaderf[i].childNodes[0]);
                            } 
                            if (menuloop[i] === "VIP") {
                                const spa = document.createElement('img');
                                spa.setAttribute('src', 'https://github.com/rudyoriginal/sex/blob/main/icns/vip.png?raw=true');
                                spa.classList.add('sexBadgesGame');
                                spa.style.marginBottom = "10px";
                                spa.style.marginRight = "5px";
                                newleaderf[i].insertBefore(spa, newleaderf[i].childNodes[0]);
                            }
                            if (menuloop[i] === "BETA") {
                                const spa = document.createElement('img');
                                spa.setAttribute('src', 'https://github.com/rudyoriginal/sex/blob/main/icns/beta.png?raw=true');
                                spa.classList.add('sexBadgesGame');
                                spa.style.marginBottom = "10px";
                                spa.style.marginRight = "5px";
                                newleaderf[i].insertBefore(spa, newleaderf[i].childNodes[0]);
                            }
                            if (menuloop[i] === "CC") {
                                const spa = document.createElement('img');
                                spa.setAttribute('src', 'https://github.com/rudyoriginal/sex/blob/main/icns/cc.png?raw=true');
                                spa.classList.add('sexBadgesGame');
                                spa.style.marginBottom = "10px";
                                spa.style.marginRight = "5px";
                                newleaderf[i].insertBefore(spa, newleaderf[i].childNodes[0]);
                            }
                        }
                        }
                    }
                    const newleader = document.querySelectorAll(".newLeaderName");
                    for (var i = 0; i < newleader.length; i++) {
                        if (element === newleader[i].innerText) {
                            for (let i = 0; i < menuloop.length; i++) {
                            if (menuloop[i] === "DEV") {
                                const spa = document.createElement('img');
                                spa.setAttribute('src', 'https://github.com/rudyoriginal/sex/blob/main/icns/dev.png?raw=true');
                                spa.classList.add('sexBadgesGame');
                                spa.style.marginBottom = "10px";
                                spa.style.marginRight = "5px";
                                newleader[i].insertBefore(spa, newleader[i].childNodes[0]);
                            } 
                            if (menuloop[i] === "VIP") {
                                const spa = document.createElement('img');
                                spa.setAttribute('src', 'https://github.com/rudyoriginal/sex/blob/main/icns/vip.png?raw=true');
                                spa.classList.add('sexBadgesGame');
                                spa.style.marginBottom = "10px";
                                spa.style.marginRight = "5px";
                                newleader[i].insertBefore(spa, newleader[i].childNodes[0]);
                            }
                            if (menuloop[i] === "BETA") {
                                const spa = document.createElement('img');
                                spa.setAttribute('src', 'https://github.com/rudyoriginal/sex/blob/main/icns/beta.png?raw=true');
                                spa.classList.add('sexBadgesGame');
                                spa.style.marginBottom = "10px";
                                spa.style.marginRight = "5px";
                                newleader[i].insertBefore(spa, newleader[i].childNodes[0]);
                            }
                            if (menuloop[i] === "CC") {
                                const spa = document.createElement('img');
                                spa.setAttribute('src', 'https://github.com/rudyoriginal/sex/blob/main/icns/cc.png?raw=true');
                                spa.classList.add('sexBadgesGame');
                                spa.style.marginBottom = "10px";
                                spa.style.marginRight = "5px";
                                newleader[i].insertBefore(spa, newleader[i].childNodes[0]);
                            }
                        }
                        }
                    }
                    const leaderm = document.querySelectorAll(".leaderNameM")[0];
                        if (element === check) {
                            for (let i = 0; i < menuloop.length; i++) {
                            if (menuloop[i] === "DEV") {
                                const spa = document.createElement('img');
                                spa.setAttribute('src', 'https://github.com/rudyoriginal/sex/blob/main/icns/dev.png?raw=true');
                                spa.classList.add('sexBadgesGame');
                                spa.style.marginBottom = "10px";
                                spa.style.marginRight = "5px";
                                leaderm.insertBefore(spa, leaderm.childNodes[0]);
                            } 
                            if (menuloop[i] === "VIP") {
                                const spa = document.createElement('img');
                                spa.setAttribute('src', 'https://github.com/rudyoriginal/sex/blob/main/icns/vip.png?raw=true');
                                spa.classList.add('sexBadgesGame');
                                spa.style.marginBottom = "10px";
                                spa.style.marginRight = "5px";
                                leaderm.insertBefore(spa, leaderm.childNodes[0]);
                            }
                            if (menuloop[i] === "BETA") {
                                const spa = document.createElement('img');
                                spa.setAttribute('src', 'https://github.com/rudyoriginal/sex/blob/main/icns/beta.png?raw=true');
                                spa.classList.add('sexBadgesGame');
                                spa.style.marginBottom = "10px";
                                spa.style.marginRight = "5px";
                                leaderm.insertBefore(spa, leaderm.childNodes[0]);
                            }
                            if (menuloop[i] === "CC") {
                                const spa = document.createElement('img');
                                spa.setAttribute('src', 'https://github.com/rudyoriginal/sex/blob/main/icns/cc.png?raw=true');
                                spa.classList.add('sexBadgesGame');
                                spa.style.marginBottom = "10px";
                                spa.style.marginRight = "5px";
                                leaderm.insertBefore(spa, leaderm.childNodes[0]);
                            }
                        }
                    }
                    const newleaderm = document.querySelectorAll(".newLeaderNameM")[0];
                        if (element === check) {
                            for (let i = 0; i < menuloop.length; i++) {
                            if (menuloop[i] === "DEV") {
                                const spa = document.createElement('img');
                                spa.setAttribute('src', 'https://github.com/rudyoriginal/sex/blob/main/icns/dev.png?raw=true');
                                spa.classList.add('sexBadgesGame');
                                spa.style.marginBottom = "10px";
                                spa.style.marginRight = "5px";
                                newleaderm.insertBefore(spa, newleaderm.childNodes[0]);
                            } 
                            if (menuloop[i] === "VIP") {
                                const spa = document.createElement('img');
                                spa.setAttribute('src', 'https://github.com/rudyoriginal/sex/blob/main/icns/vip.png?raw=true');
                                spa.classList.add('sexBadgesGame');
                                spa.style.marginBottom = "10px";
                                spa.style.marginRight = "5px";
                                newleaderm.insertBefore(spa, newleaderm.childNodes[0]);
                            }
                            if (menuloop[i] === "BETA") {
                                const spa = document.createElement('img');
                                spa.setAttribute('src', 'https://github.com/rudyoriginal/sex/blob/main/icns/beta.png?raw=true');
                                spa.classList.add('sexBadgesGame');
                                spa.style.marginBottom = "10px";
                                spa.style.marginRight = "5px";
                                newleaderm.insertBefore(spa, newleaderm.childNodes[0]);
                            }
                            if (menuloop[i] === "CC") {
                                const spa = document.createElement('img');
                                spa.setAttribute('src', 'https://github.com/rudyoriginal/sex/blob/main/icns/cc.png?raw=true');
                                spa.classList.add('sexBadgesGame');
                                spa.style.marginBottom = "10px";
                                spa.style.marginRight = "5px";
                                newleaderm.insertBefore(spa, newleaderm.childNodes[0]);
                            }
                        }
                    }
                }

                const targetNode = document.getElementById('leaderContainer');
                const config = { childList: true };

                const callback = (mutationList, observer) => {
                for (const mutation of mutationList) {
                    if (mutation.type === 'childList') {
                        bdgsmagic();
                        observer.disconnect();
                    }
                }
                observer.observe(targetNode, config);
                };
                const observer = new MutationObserver(callback);
                observer.observe(targetNode, config);
            });
        });
    }
    badges();


    function blacklist() {
        fetch("https://raw.githubusercontent.com/rudyoriginal/sex/main/bl.json").then(response => response.json()).then(data => {
            const accs = data.accounts;
            accs.forEach(element => blist(element));
        });
    
        function blist(element) {
            if (localStorage.getItem('krunker_username') === element) {
                console.log(`The account: "${localStorage.getItem('krunker_username')}" is Blacklisted`);
                let bl = alert("This account is blacklisted from this client.");
                if (bl === null) {
                    window.close()
                }
                else {
                    window.close();
                }
            }
        }
        }
    blacklist();


    let x = document.createElement('div');
    document.getElementById('uiBase').appendChild(x);
    function local() { 
        var rand = Math.random().toString(36).substring(2,7);
        localStorage.setItem('sexID', rand);
        if (x) {
        x.setAttribute('id', localStorage.getItem('sexID'));
        x.setAttribute('style', 'display: inline-block !important; opacity: 1 !important; visibility: visible !important; position: absolute !important; bottom: 0px !important; right: 0px !important; color: rgba(255, 255, 255, 0.7) !important; z-index: 2147483647 !important; text-shadow: rgba(0, 0, 0, 0.75) 0px 0px 5px !important;'); 
        };
        
        ipcRenderer.invoke("get-app-info").then(info => (document.getElementById(localStorage.getItem('sexID')).innerText = `Sex Client v${info.version}`));
        
    };
    setInterval(local, 5000);

    function gfull() {
        var struct = document.querySelector('#instructionsUpdate > :nth-child(2)');
        if (struct && struct.innerText === "Game is full.") {
            window.location.href = "https://krunker.io/";
        }
    }

    const targetNode = document.getElementById('instructionsUpdate');
    const config = { childList: true };
    const callback = (mutationList, observer) => {
    for (const mutation of mutationList) {
        if (mutation.type === 'childList') {
        gfull();
        observer.disconnect();
        }
    }
    observer.observe(targetNode, config);
    };
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
});