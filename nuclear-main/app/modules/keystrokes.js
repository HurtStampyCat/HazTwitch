const { keystrokeStyles } = require("./styles-injection");

document.addEventListener('DOMContentLoaded', () => {

    const styles = document.head.appendChild(document.createElement("style")).innerText = keystrokeStyles;

    let holder =  document.createElement("div");
    holder.setAttribute("id", "inputHolder"); 
    document.getElementById('bottomLeftHolder').appendChild(holder);
        
    const wKey = document.createElement("div")
    wKey.setAttribute("id", "wKeyPress");
    wKey.innerText = '🡹';
        document.addEventListener('keydown', (event) => { 
            if (event.keyCode == localStorage.getItem('cont_0') || event.keyCode == localStorage.getItem('cont_0_alt')) {
            wKey.style.color = localStorage.getItem("c_slid_keystrokesInputColor");
            wKey.classList.add('press');}
        })
        document.addEventListener('keyup', (event) => { 
            if (event.keyCode == localStorage.getItem('cont_0') || event.keyCode == localStorage.getItem('cont_0_alt')) {
            wKey.style.color = localStorage.getItem("c_slid_keystrokesColor");
            wKey.classList.remove('press');}
        })
            
    const aKey = document.createElement("div")
    aKey.setAttribute("id", "aKeyPress");
        aKey.innerText = '🡰';
        document.addEventListener('keydown', (event) => { 
            if (event.keyCode == localStorage.getItem('cont_2') || event.keyCode == localStorage.getItem('cont_2_alt')) {
            aKey.style.color = localStorage.getItem("c_slid_keystrokesInputColor");
            aKey.classList.add('press');}
            })
            document.addEventListener('keyup', (event) => { 
                    if (event.keyCode == localStorage.getItem('cont_2') || event.keyCode == localStorage.getItem('cont_2_alt')) {
                    aKey.style.color = localStorage.getItem("c_slid_keystrokesColor");
                    aKey.classList.remove('press');}
                })
            
    const sKey = document.createElement("div")
    sKey.setAttribute("id", "sKeyPress");
        sKey.innerText = '🡻';
        document.addEventListener('keydown', (event) => { 
            if (event.keyCode == localStorage.getItem('cont_1') || event.keyCode == localStorage.getItem('cont_1_alt')) {
            sKey.style.color = localStorage.getItem("c_slid_keystrokesInputColor");
            sKey.classList.add('press');}
            })
            document.addEventListener('keyup', (event) => { 
                if (event.keyCode == localStorage.getItem('cont_1') || event.keyCode == localStorage.getItem('cont_1_alt')) {
                sKey.style.color = localStorage.getItem("c_slid_keystrokesColor");
                sKey.classList.remove('press');}
            })
            
    const dKey = document.createElement("div")
    dKey.setAttribute("id", "dKeyPress");
        dKey.innerText = '🡺';
        document.addEventListener('keydown', (event) => { 
            if (event.keyCode == localStorage.getItem('cont_3') || event.keyCode == localStorage.getItem('cont_3_alt')) {
            dKey.style.color = localStorage.getItem("c_slid_keystrokesInputColor");
            dKey.classList.add('press');}
            })
            document.addEventListener('keyup', (event) => { 
                if (event.keyCode == localStorage.getItem('cont_3') || event.keyCode == localStorage.getItem('cont_3_alt')) {
                dKey.style.color = localStorage.getItem("c_slid_keystrokesColor");
                dKey.classList.remove('press');}
            })

    const shiftKey = document.createElement("div")
    shiftKey.setAttribute("id", "shiftKeyPress");
        shiftKey.innerText = 'CROUCH';
            document.addEventListener('keydown', (event) => { 
                if (event.keyCode == localStorage.getItem('cont_crouchKey') || event.keyCode == localStorage.getItem('cont_crouchKey_alt')) {
                shiftKey.style.color = localStorage.getItem("c_slid_keystrokesInputColor");
                shiftKey.classList.add('press');}
            })
            document.addEventListener('keyup', (event) => { 
                if (event.keyCode == localStorage.getItem('cont_crouchKey') || event.keyCode == localStorage.getItem('cont_crouchKey_alt')) {
                shiftKey.style.color = localStorage.getItem("c_slid_keystrokesColor");
                shiftKey.classList.remove('press');}
            })

    const spaceKey = document.createElement("div")
    spaceKey.setAttribute("id", "spaceKeyPress");
        spaceKey.innerText = 'JUMP';
        document.addEventListener('keydown', (event) => { 
            if (event.keyCode == localStorage.getItem('cont_jumpKey') || event.keyCode == localStorage.getItem('cont_jumpKey_alt')) {
            spaceKey.style.color = localStorage.getItem("c_slid_keystrokesInputColor");
            spaceKey.classList.add('press');}
        })
        document.addEventListener('keyup', (event) => { 
            if (event.keyCode == localStorage.getItem('cont_jumpKey') || event.keyCode == localStorage.getItem('cont_jumpKey_alt')) {
            spaceKey.style.color = localStorage.getItem("c_slid_keystrokesColor");
            spaceKey.classList.remove('press');}
        })

        holder.style.opacity = localStorage.getItem("keystrokesOpacity");
        holder.style.left = localStorage.getItem("keystrokesPosX");
        holder.style.bottom = localStorage.getItem("keystrokesPosY");
        document.getElementById('inputHolder').appendChild(wKey)
        wKey.style.color = localStorage.getItem("c_slid_keystrokesColor");
        wKey.style.backgroundColor = localStorage.getItem("c_slid_keystrokesBackgroundColor");
        document.getElementById('inputHolder').appendChild(aKey)
        aKey.style.color = localStorage.getItem("c_slid_keystrokesColor")
        aKey.style.backgroundColor = localStorage.getItem("c_slid_keystrokesBackgroundColor");
        document.getElementById('inputHolder').appendChild(sKey)
        sKey.style.color = localStorage.getItem("c_slid_keystrokesColor")
        sKey.style.backgroundColor = localStorage.getItem("c_slid_keystrokesBackgroundColor");
        document.getElementById('inputHolder').appendChild(dKey)
        dKey.style.color = localStorage.getItem("c_slid_keystrokesColor")
        dKey.style.backgroundColor = localStorage.getItem("c_slid_keystrokesBackgroundColor");
        document.getElementById('inputHolder').appendChild(shiftKey)
        shiftKey.style.color = localStorage.getItem("c_slid_keystrokesColor")
        shiftKey.style.backgroundColor = localStorage.getItem("c_slid_keystrokesBackgroundColor");
        document.getElementById('inputHolder').appendChild(spaceKey)
        spaceKey.style.color = localStorage.getItem("c_slid_keystrokesColor")
        spaceKey.style.backgroundColor = localStorage.getItem("c_slid_keystrokesBackgroundColor");
    });
