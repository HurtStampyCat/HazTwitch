"use strict";
    document.addEventListener('DOMContentLoaded', () => {

    document.head.appendChild(document.createElement('style')).setAttribute('id', 'sexCSS');
    document.head.appendChild(document.createElement('style')).setAttribute('id', 'sexClans');
    document.head.appendChild(document.createElement('style')).setAttribute('id', 'keyRain');

});


const baseStyles = `
:root {
    --ks-bg: #000000;
    --ks-color: #ffffff;
    --ks-input: #00ffff;
    --background: rgba(0,0,0,.3);
}

.sexBadges {
    vertical-align: middle;
    margin-left: 4px;
}

.sexBadgesGame {
    vertical-align: middle;
    margin-left: -3px;
    margin-right: 5px;
    height: 22px !important;
    margin-bottom: 12px !important;
}

.leaderItem {
    height: 35px;
}

#chatList * {
    user-select: text;
}

#mouseAccel_div {
    display: block !important;
}

#accManagerBtn {
    margin-left: 4px !important;
    border: 4px solid #ff4747;
}

.setBod.sex > .settName > .slidecontainer {
    position: relative;
    bottom: 10px;
}

.setBod.sex {
    margin-left: 25px;
    width: calc(100% - 100px);
    padding: 20px;
    padding-bottom: 10px;
    padding-top: 5px;
    border-radius: 5px;
    background-color: rgba(0,0,0,.5);
}

.setBod.sex > .settName {
    color: #fff !important;
}

.settName {
    border-bottom: none !important;
}

.setHed.sex, .setHed.sex > span {
    color: rgb(255 255 255 / 1) !important;
}

.setHed.sex {
    background-color: rgba(0,0,0,.7);
    border: 4px solid rgba(255,255,255,.7);
    border-radius: 5px;
}

#altAdd, #addAccountButtonB {
    height: 40px;
    top: 5px;
    line-height: 40px;
    position: relative;
    cursor: pointer;
    background-color: rgba(200,200,200);
    text-align: center;
    width: 100%;
    border-radius: 5px;
}

#altAccounts {
    height: auto;
    max-height: 200px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    scroll-behavior: smooth;
}

#altAccounts > :nth-child(1) {
    margin-top: 0px !important;
}

.altAccountsLISTED {
    margin-top: 5px;
    height: 55px;
    background-color: #292929 !important;
    transition: all 0.3s;
}

.altAccountsLISTED:hover {
    transform: none;
    box-shadow: inset 0px 0px 10px 1px white !important;
}

.altAccountsLISTED > span {
    background-color: transparent;
    box-shadow: none;
}
.altAccountsLISTED > :nth-child(2) {
    border-radius: 0;
    background-color: red;
}

.altdeletebtn {
    float: right;
}

#altAdd {
    margin-top: 10px;
    position: sticky !important;
    background-color: #fff !important;
}

#settingsTabLayout>div:nth-last-child(2) {
	display: none
}

#sex-windowHolder {
	width: 100%;
	height: 100%;
	position: absolute
}

#sex-menuWindow {
	position: absolute;
	left: 50%;
	top: 50%;
	border-radius: 6px;
	max-height: calc(100% - 480px);
	transform: translate(-50%, -50%);
	z-index: 2;
	overflow-y: auto;
	display: inline-block;
	text-align: left;
	pointer-events: auto;
	padding: 20px;
	width: 705px;
	font-size: 20px;
	background-color: #353535;
	box-shadow: 0px 0px 10px 2px #a6a6a6;
}

#settHolder > .setHed:first-child:not(:only-child, [id]) {
	display: none;
}
`;

const menuTimerStyles = `
#uiBase.onMenu #spectateUI {
    display: block!important;
    position: fixed;
    bottom: 48.5%;
    top: unset;
    left: 50%;
    right: unset;
    transform: translate(-50%, 50%);
    z-index: 1;
    width: 10px;
    height: 10px;
}

#uiBase.onMenu #spectateHUD {
    display: flex;
    justify-content: center;
    transform: unset;
    left: unset;
}

#uiBase.onMenu #specTeam0, #uiBase.onMenu #spec0, #uiBase.onMenu #spec1, #uiBase.onMenu #specNames, #uiBase.onMenu #specStats, #uiBase.onMenu #specContr, #uiBase.onMenu #specKPDContr, #uiBase.onMenu #specSus, #uiBase.onMenu #specTeam1, #uiBase.onMenu #specGMessage, #uiBase.onMenu #specGameInfo {
    display: none!important
}

#uiBase.onMenu #specTimer {
    display: block!important;
    font-size: 35px;
    background-color: transparent;
    color: rgba(255,255,255,.55)
}
`;

const keystrokeStyles = `
#inputHolder {
    z-index: 1;
    display: block;
    position: fixed;
    left: 50%;
    bottom: 2%;
    transform: translate(-50%, -50%);
}

#wKeyPress, #aKeyPress, #sKeyPress, #dKeyPress, #shiftKeyPress, #spaceKeyPress {
    display: block;
    font-size: 18px;
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    color: var(--ks-color);
    background-color: var(--ks-bg);
    position: fixed !important;
    transform: translateY(45px) !important;
    transition: all 0.3s;
}

#wKeyPress.press, #aKeyPress.press, #sKeyPress.press, #dKeyPress.press, #shiftKeyPress.press, #spaceKeyPress.press {
    color: var(--ks-input);
}

#wKeyPress, #aKeyPress, #sKeyPress, #dKeyPress {
    font-size: 30px !important;
    line-height: 35px !important;
    font-weight: bolder !important;
    border: 2px solid;
}

#wKeyPress {
    border-radius: 5px;
    left: 50%;
    bottom: 115px;
}

#aKeyPress {
    border-radius: 5px;
    left: calc(50% - 65px) !important;
    bottom: 50px;
}

#sKeyPress {
    border-radius: 5px;
    left: 50%;
    bottom: 50px;
}

#dKeyPress {
    border-radius: 5px;
    left: 125px;
    bottom: 50px;
}

#shiftKeyPress {
    line-height: 40px !important;
    height: 40px !important;
    width: 115px !important;
    border-radius: 5px;
    left: -38px !important;
    top: 43px;
}

#spaceKeyPress {
    line-height: 40px !important;
    height: 40px !important;
    width: 115px !important;
    border-radius: 5px;
    right: -93px !important;
    bottom: 1px;
}

#shiftKeyPress, #spaceKeyPress {
    border: 2px solid;
    position: relative !important;
    transform: translateY(50px) !important;
}
`;

const twitchStyles = `
.twClass {
    z-index: 9;
    word-wrap: break-word;
    display: inline-block;
    font-size: 14px;
    color: white;
    margin-left: 5px;
    padding: 10px;
    max-width: 310px;
}

.twClass::before {
    content: "[Twitch] ";
    text-align: left;
    color: #9146ff !important;
}

.twMsg {
    color: rgba(255,255,255,.7);
}`;

const stretched = `
#uiBase[style*=scale] {
    transform: scale(0.9, 0.6) !important;
    width: 111.1% !important;
    height: 166.5% !important
}`;

const frosted = `
:root {
    --main-color: rgba(255,255,255,.3);
    --accent-color: rgba(234, 240, 240, 0.2);
    --misc-color: #eaeaea;
    --menu-color: #fff;
    --shad: 1px 1px black, -1px -1px black, -1px 1px black, 1px -1px black;
}

* {
    font-family: gamefont, JP;
}

@font-face {
    font-family: gamefont;
    src: url(https://raw.githubusercontent.com/rudyoriginal/fonts/master/Poppins-ExtraBold.ttf)
}

@font-face {
    font-family: JP;
    src: url(https://raw.githubusercontent.com/rudyoriginal/fonts/master/NotoSerifJP-Bold.otf)
}

@keyframes window {
    0% {
        transform: translateX(-100%) rotate(0deg);
    }
    100% {
        transform: translateY(0%) rotate(360deg);
    }
}

@keyframes spin {
    0% {
        transform: rotateY(-180deg);
    }
    100% {
        transform: rotateY(180deg);
    }
}

@keyframes rain {
    0% {
        background-position: 0% 0%;
    }
    100% {
        background-position: -150% 100%;
    }
}

/* GENERAL MENU SHIT */

#mainLogoFace, #endAMerger, #endAContainer, #curGameInfo, #rankedSoonTm, #teamScores, #killsIcon, #livesIcon, #scoreCount > i, #streakIcon, #deathsIcon, #kdIcon, .weapKey, #ammoIcon, #timerIcon, #challIcon,#hudClassIcon, #menuClassNameTag, #mainLogo, #bubbleContainer, .menuSocialB, #headerRight > div.verticalSeparator, #editorBtnM, #voiceDisplay, #aHolder, #tlInfHold, #seasonLabel, #newsHolder, #faceItIconM, #chatSwitch, #instructions, #mLevelCont, #menuUsernameContainer, #menuLvlHold, .verticalSeparator, #mapInfo {
    display: none !important;
}

#menuClassSubtext, #menuClassName {
    opacity: 0;
}

#menuBtnBrowser, #menuBtnHost {
    font-size: 0 !important;
}

#menuBtnBrowser::before {
    content: "Servers";
    font-size: 20px !important;
}

#menuBtnHost::before {
    content: "Host";
    font-size: 20px !important;
}

#menuItemContainer, .headerBarRight {
    background-size: cover;
    background-position: center;
    animation: rain 2s linear infinite;
    image-rendering: optimizequality;
    background: url(https://cdn.discordapp.com/attachments/852817363409960960/893771256485257216/rain.png);
    box-shadow: 5px 0px var(--accent-color);
    background-color: rgba(255,255,255,.05);
    top: 0;
}

#menuClassContainer:hover > #classPreviewCanvas {
    transform: scale(1);
}

#classPreviewCanvas {
    position: relative;
    top: 150px;
    transition: 0.5s;
    transform: scale(0);
    -webkit-mask-image: linear-gradient(#000 65%, transparent)
}

#menuClassContainer {
    position: unset;
    width: 100% !important
}

#customizeButton {
    transition: 0.5s;
    padding-bottom: 28px;
    position: absolute !important;
    top: 34px;
    left: 48.6%;
    transform: translateY(-100%);
    font-size: 0 !important;
    background-color: transparent !important;
}

#customizeButton::before {
    text-shadow: 2px 2px black, -2px -2px black, -2px 2px black, 2px -2px black;
    background-color: rgba(255,255,255,.05) !important;
    padding: 10px;
    border-top: none;
    padding-right: 15px;
    padding-left: 15px;
    border: 5px solid var(--accent-color);
    content: 'brush';
    font-family: 'Material Icons';
    font-size: 60px;
    color: var(--menu-color);
    padding-top: 300px !important;
    border-bottom: none !important;
    -webkit-mask-image: linear-gradient(#000 80%, transparent);
    background-size: cover;
    background-position: center;
    animation: rain 6s linear infinite;
    image-rendering: optimizequality;
    background: url(https://cdn.discordapp.com/attachments/852817363409960960/893771256485257216/rain.png); 
    text-align: center;
    border-radius: 0;
}

#customizeButton::after {
    text-shadow: none !important;
    position: fixed;
    font-size: 60px;
    margin-left: -75px;
    padding-right: 10px;
    color: var(--menu-color);
    font-family: 'JP';
    content: '設';
    bottom: 110px;
}

#customizeButton > span {
    font-size: 0 !important;
}

#customizeButton > span::before {
    content: '計';
    position: fixed;
    font-size: 60px !important;
    margin-left: -215px;
    padding-right: 10px;
    bottom: 180px;
    left: 108%;
    text-shadow: none !important;
    font-weight: bolder !important;
    color: var(--menu-color);

}

#customizeButton:hover {
    top: 205px;
}

#policeButton {
    background-color: rgba(255,255,255,.05) !important;
    transition: 0.5s;
    position: absolute !important;
    top: 0;
    right: 52%;
    margin-top: -350px;
    border: 5px solid var(--accent-color) !important;
    padding-top: 300px !important;
    text-shadow: none !important;
    padding: 10px;
    border-top: none;
    padding-right: 15px;
    padding-left: 15px;
    border: 5px solid var(--accent-color);
    font-size: 60px;
    border-bottom: none !important;
    -webkit-mask-image: linear-gradient(#000 80%, transparent);
    background-size: cover;
    background-position: center;
    animation: rain 6s linear infinite;
    image-rendering: optimizequality;
    background: url(https://cdn.discordapp.com/attachments/852817363409960960/893771256485257216/rain.png); 
    text-align: center;
    border-radius: 0;
}

#policeButton::before {
    position: fixed;
    font-size: 60px;
    margin-left: -5px;
    color: var(--menu-color);
    font-family: 'JP';
    content: "警";
    bottom: 120px;
}

#policeButton::after {
    content: '察';
    position: fixed;
    font-size: 60px;
    font-family: 'JP';
    bottom: 200px;
    color: var(--menu-color);
    margin-left: -54px;
}

#policeButton:hover {
    top: 180px;
}

#accManagerBtn {
    pointer-events: all !important;
    text-shadow: none !important;
    position: absolute !important;
    right: 50px;
    top: 0;
    margin-top: -45px !important;
    margin-left: -120px !important;
    font-size: 0 !important;
    width: 400px !important;
}

#accManagerBtn::before {
    padding-top: 50px !important;
    border-top: none !important;
    text-shadow: none !important;
    padding: 10px;
    border-top: none;
    padding-right: 90px !important;
    padding-left: 90px !important;
    border: 5px solid var(--accent-color);
    font-size: 60px;
    border-bottom: none !important;
    -webkit-mask-image: linear-gradient(#000 50%, transparent);
    background-size: cover;
    background-position: center;
    animation: rain 3s linear infinite;
    image-rendering: optimizequality;
    background: url(https://cdn.discordapp.com/attachments/852817363409960960/893771256485257216/rain.png); 
    text-align: center;
    color: var(--menu-color);
    content: 'Alt-manager';
    font-size: 28px;
}

#gameNameHolder {
    top: calc(50% - 35px);
}

#gameNameHolder::after {
    text-shadow: 2px 2px 5px var(--accent-color);
    color: var(--accent-color);
    content: 'すりガラス';
    font-family: 'JP';
    font-size: 32px;
    font-weight: bold;
}

#gameNameHolder::before {
    text-shadow: 2px 2px 5px var(--accent-color);
    content: 'Frosted Glass';
    font-family: 'JP';
    font-size: 64px;
    font-weight: bold;
    color: var(--accent-color);
}

#uiBase.onMenu #spectButton {
    transition: 0.5s;
    position: fixed;
    top: 62px;
    left: 48.7%;
}

#uiBase.onMenu #spectButton:hover {
    top: 200px;
}

#uiBase.onMenu #spectButton::before {
    color: var(--menu-color);
    position: fixed;
    font-size: 42px;
    font-family: 'JP';
    content: '観客';
    margin-left: 20px;
    bottom: 70px;
}

#spectButton span[style="font-size:15px;color:rgba(255,255,255,.6)"] {
    display: none;
    color: transparent !important;
}

#spectButton .switchsml {
    margin: 0;
    position: absolute;
    width: 100%;
}

.sliderSml::before {
    content: "Spectate";
    font-size: 20px;
    color: #fff;
    text-shadow: 1px 1px black, -1px -1px black, -2px 2px black, 2px -1px black;
    width: max-content;
    height: auto;
    background-color: transparent;
    text-align: center;
}

.sliderSml::before {
    padding-top: 300px !important;
    border-bottom: none !important;
    -webkit-mask-image: linear-gradient(#000 80%, transparent);
    background-size: cover;
    background-position: center;
    animation: rain 6s linear infinite;
    image-rendering: optimizequality;
    background: url(https://cdn.discordapp.com/attachments/852817363409960960/893771256485257216/rain.png); 
    background-color: rgba(255,255,255,.05);
    content: "visibility_off";
    font-size: 48px;
    color: var(--menu-color);
    border: 5px solid var(--accent-color);
    border-top: none;
    padding: 10px;
    width: max-content;
    height: auto;
    text-align: center;
    border-radius: 0;
    font-family: 'Material Icons';
}

input:checked+.sliderSml::before {
    content: "visibility";
    transform: unset;
}

input:checked+.sliderSml {
    background-color: transparent !important;
}

.sliderSml {
    background-color: transparent;
}

#menuFPS[style*="color:#9eeb56"] {
    color: var(--menu-color) !important;
}

#menuPingIcon {
    font-size: 0 !important;
}

#menuPingText::after {
    content: " MS";
}

.menuDebugInfo {
    position: relative;
    left: 10px;
    top: 20px;
    display: flex;
    flex-direction: column;
    text-align: center;
}

#menuPingText, #menuPingIcon, #menuFPSDisplay {
    font-size: 15px;
    color: var(--menu-color) !important;
}

#menuRegionLabel {
    position: relative;
    left: 10px;
    bottom: 10px;
    text-align: center;
}

#uiBase.onEndScrn .terms {
    opacity: 0;
}

#signedOutHeaderBar {
    border-top: none !important;
    text-shadow: none !important;
    padding: 0 !important;
    border-top: none;
    border: 5px solid var(--accent-color);
    font-size: 60px;
    border-bottom: none !important;
    -webkit-mask-image: linear-gradient(#000 10%, transparent);
    background-size: cover;
    background-position: center;
    animation: rain 2.5s linear infinite;
    image-rendering: optimizequality;
    background: url(https://cdn.discordapp.com/attachments/852817363409960960/893771256485257216/rain.png);
    background-color: transparent;
    left: 13%;
    top: 0;
    margin-top: -10px;
}

#signedInHeaderBar {
    width: auto !important;
    z-index: 9999;
    top: 7.5%;
    background-color: transparent !important;
    right: -0.3%;
    left: unset;
    padding-bottom: 0;
    padding-right: 15px !important;
    position: fixed;
    border-bottom-left-radius: 15px !important;
    border-bottom-right-radius: 15px !important;
}

#signedInHeaderBar > div:nth-child(1) {
    position: fixed;
    right: 5px;
    top: 115px;
    display: flex !important;
    flex-direction: column;
    align-items: center;
}

#menuJNKCount, #menuKRCount {
    font-size: 18px !important;
    padding-bottom: 45px;
}

#menuJNKCount > span {
    font-size: 0 !important;
}

#menuJNKCount {
    position: relative;
    top: 85px;
    padding-left: 10px;
    color: var(--menu-color) !important;
}

#menuJNKCount::after {
    padding-right: 15px;
    padding-left: 5px;
    color: var(--menu-color) !important;
    content: "JUNK";
    font-size: 18px !important;
}

#menuKRCount {
    position: relative;
    top: 75px;
    padding-bottom: 50px;
    color: var(--menu-color) !important;
}

#menuKRCount > span {
    color: var(--menu-color) !important;
}

#mailContainer {
    position: fixed;
    top: 300px;
    right: 50px;
}

#termsInfo {
    padding-right: 15px;
    padding-bottom: 50px;
    box-shadow: none;
    background-color: transparent;
    text-align: center;
    display: flex;
    flex-direction: column;
    height: 200px;
}

.terms {
    color: var(--menu-color) !important;
}

.terms:hover {
    text-decoration: none;
    transform: scale(0.95);
}

.verticalSeparatorInline {
    opacity: 0;
}

.headerBarRight {
    width: 95px;
    padding-top: 40px;
    box-shadow: -5px -1px var(--accent-color);
    border-radius: 0;
    padding-bottom: 1900px;
    padding-left: 30px;
}

.menBtnIcn {
    will-change: transform;
    color: var(--menu-color) !important;
}

.menuItem:hover {
    will-change: transform;
    background-color: var(--accent-color);
}

.menuItem:hover > .menBtnIcn {
    will-change: transform;
    transform: rotate(15deg);
}

.menuItem:hover > .menuItemTitle {
    will-change: transform;
    transform: rotate(15deg);
    position: relative;
    right: 15px;
    bottom: 0px;
}

#menuBtnProfile, #menuBtnShop, #menuBtnChall, #menuBtnSocial, #menuBtnMaps, #menuBtnMods, #menuBtnSettings, #menuBtnExit {
    will-change: transform;
    font-size: 0 !important;
    transition: 0.5s;
}

#menuBtnProfile::before {
    font-family: JP;
    content: "アカウント";
    font-size: 18px;
}

#menuBtnShop::before {
    font-family: JP;
    content: "お店";
    font-size: 18px;

}

#menuBtnChall::before {
    font-family : JP;
    content: "課題";
    font-size: 18px;
}

#menuBtnSocial::before {
    font-family: JP;
    content: "ソーシャル";
    font-size: 18px;
}

#menuBtnMaps::before {
    font-family: JP;
    content: "ゲーム";
    font-size: 18px;
}

#menuBtnMods::before {
    font-family: JP;
    content: "モッド";
    font-size: 18px;
}

#menuBtnSettings::before {
    font-family: JP;
    content: "設定";
    font-size: 18px;
}

#menuBtnExit::before {
    font-family: JP;
    content: "出口";
    font-size: 18px;
}

.menuItemTitle {
    will-change: transform;
    opacity: 0;
}

.menuItem:hover > .menuItemTitle {
    opacity: 1 !important;
}

#menuItemContainer:hover{
    width: 200px;
    transition: 0.5s;
}

#menuItemContainer {
    top: 0;
    width: 145px;
}

#mLevelCont {
    background-color: transparent;
}

#instructionsUpdate {
    box-shadow: 0px 5px var(--accent-color);
    background-color: var(--accent-color);
    border: none !important;
}

.button, .button:hover {
    border: none !important;
}

#subLogoButtons {
    height: auto;
    justify-content: space-evenly;
    z-index: 99999999;
    display: flex;
    flex-direction: column;
    background-color: transparent !important;
    bottom: 310px;
    left: unset;
    transform: none;
    top: unset;
    right: 5px;
}

.button.small {
    height: 35px;
}

.button {
    background-color: transparent;
}

#uiBase.onMenu #chatList, #uiBase.onMenu #chatInputHolder{
    border-top: none !important;
    border-bottom: none !important;
    background-size: cover;
    background-position: center;
    animation: rain 2s linear infinite;
    image-rendering: optimizequality;
    background: url(https://cdn.discordapp.com/attachments/852817363409960960/893771256485257216/rain.png);
    background-color: rgba(255,255,255,.05) !important;
    border-radius: 0;
    border: 5px solid var(--accent-color);
    text-align: center;
    background-color: var(--accent-color);
}

#uiBase.onMenu #chatList {
    border-top: none;
    -webkit-mask-image: linear-gradient(transparent, #000 80%, transparent);
}

#uiBase.onMenu #chatInput {
    margin-left: 25px;
    text-align: center;
}

#uiBase.onMenu #chatHolder {
    position: absolute;
    left: 50%;
    bottom: 0px;
    transform: translateX(-50%);
}

#uiBase.onMenu #chatInputHolder {
    margin-top: 0px;
    -webkit-mask-image: linear-gradient(transparent, #000 90%);
    border-bottom: none;
    text-align: left;
}

#uiBase.onMenu #chatInput {
    background-color: transparent;
    border: none;
    padding-left: 0;
}

#modVote {
    position: relative;
    right: calc(50% + 80px);
    margin-bottom: -220px;   
}

/* SETTINGS WINDOW */

.slider {
    margin-left: 20px;
    transition: 0s;
    background-color: var(--menu-color);
    height: 31px;
    width: 32px;
    border-radius: 20px;
}

.slider::before {
    display: none;
}

input:checked + .slider {
    display: inline-block;
    position: absolute;
    top: 0px;
    left: -5px;
    transition: 0.3s;
    border: 5px solid var(--menu-color);
    background-color: var(--accent-color);
}

input:checked + .slider::after {
    content: " ";
    transform: scale(0.7);
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    top: 0px;
    border-radius: 20px;
    background-color: var(--menu-color);
    transition: 0.3s;
}

#settingsTabLayout {
    background-color: transparent;
}

.setBodH {
    background-color: transparent;
}

.setHed {
    background-color: transparent;
    border: 4px solid white;
}

.setHed:hover {
    background-color: var(--main-color);
}

.settingTab {
    text-shadow: 1px 1px black, -1px -1px black;
    background-color: transparent;
}

.settingsHeader {
    backdrop-filter: blur(5px);
    border-bottom: 2px solid;
    background-color: var(--accent-color);
    padding-right: 20px;
}

#menuWindow.dark {
    border: 3px solid var(--menu-color);
    background-color: var(--accent-color) !important;
}

#windowHolder {
    will-change: transform;
    background-color: transparent !important;
    animation: window .5s;
}

.selectorItem.selectedItem {
    filter: grayscale(0);
    position: relative;
    bottom: 3px;
    right: 3px;
}

.selectorItem {
    filter: grayscale(1);
}

.classCard:hover > img {
    transition: 0.5s;
    transform: scale(1.5) rotate(-2deg);
}

.punishButton.vote {
    width: 30px;
    background-color: transparent;
    font-size: 0 !important;
}

.punishButton.vote::before {
    content: 'person_off';
    font-size: 24px !important;
    font-family: 'Material Icons';
}

.punishButton.kdf {
    visibility: hidden;
    background-color: transparent;
}

.punishButton.kdf::before {
    visibility: visible;
    position: absolute;
    content: 'phone_in_talk';
    font-size: 24px;
    font-family: 'Material Icons';
}

#playerSearchH {
    border: 5px solid var(--misc-color);
}

.pListTable {
    box-shadow: -4px -4px 15px var(--main-color);
    border: 4px solid var(--misc-color);
}

/* IN-GMAME/HUD */

#gameMessage {
    text-shadow: var(--shad) !important;
    border-top: none !important;
    border-bottom: none !important;
    border: 3px solid var(--accent-color);
    border-radius: 5px;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    top: 115px;
    background-color: var(--main-color);
    padding-right: 15px;
    padding-left: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    color: var(--misc-color);
    text-transform: capitalize;
}

#timerDisplay {
    padding: 5px !important;
    border: 3px solid var(--accent-color);
    border-bottom: none !important;
    text-align: center;
    width: auto !important;
    position: fixed;
    left: 50%;
    top: 15px;
    transform: translateX(-50%);
    background-color: var(--main-color);
    border-radius: 5px;
}

#timerVal {
    text-shadow: var(--shad);
    text-align: center;
    color: var(--misc-color);
}

.debugInfo {
    position: fixed;
    left: 15px;
    top: 15px;
    border-radius: 5px;
    width: 100px;
    background-color: var(--main-color);
    padding: 10px;
    border: 3px solid var(--main-color);
    border-right: none !important;
    border-bottom: none !important;
}

#fpsDisplay, #pingText, #ingameFPS {
    text-shadow: var(--shad);
    color: var(--misc-color) !important;
}

#pingIcon {
    font-size: 0 !important;
}

#pingText::after {
    content: ' MS';
}

#leaderDisplay {
    position: fixed;
    right: 15px;
    top: 15px;
    height: auto !important;
    border: 3px solid var(--main-color);
    border-left: none !important;
    border-bottom: none !important;
    background-color: var(--main-color);
    border-radius: 5px;
}

.leaderCounter,
.leaderScore,
.leaderNameM,
.leaderNameM > span[style*="color:#fff"],
.leaderNameF > span[style*="color:#fff"],
.leaderName,
.leaderNameF,
.leaderNameM[style*="color: #eb5656;"] {
    color: var(--misc-color) !important;
    text-shadow: var(--shad);
}

.leaderName span[style*='color:#FBC02D'],
.newLeaderName span[style*='color:#FBC02D'],
.leaderNameM span[style*='color:#FBC02D'],
.newLeaderNameM span[style*='color:#FBC02D'],
.leaderNameF span[style*='color:#FBC02D'],
.newLeaderNameF span[style*='color:#FBC02D'] {
    color: #eaeaea80 !important;
    text-shadow: var(--shad);
}

#uiBase.onGame #chatHolder {
    position: fixed;
    bottom: 15px;
    left: 15px;
}

#uiBase.onGame #chatList::-webkit-scrollbar {
    display: none !important;
}

#uiBase.onGame #chatList {
    border: 3px solid var(--main-color);
    border-bottom: none !important;
    border-right: none !important;
    border-top: none !important;
    border-radius: 5px;
    background-color: var(--main-color);
}

#uiBase.onGame #chatInputHolder, #uiBase.onGame #chatInput {
    border: none;
    padding-left: 0;
    border-radius: 0;
    background-color: var(--main-color);
}

#uiBase.onGame #chatInputHolder {
    height: 40px;
    border: 3px solid var(--main-color);
    border-radius: 5px;
    border-top: none !important;
    border-right: none !important;
}

#uiBase.onGame #chatInput {
    transform: translate(5px, -5px);
    width: calc(100% - 15px);
    margin-left: 0 !important;
    background-color: transparent !important;
}

#uiBase.onGame #chatInput::placeholder {
    color: var(--misc-color);
}

#uiBase.onGame input,
#uiBase.onGame .chatMsg,
#uiBase.onGame .chatMsg[style*="color:#fff;"],
#uiBase.onGame .chatMsg > span[style*="color:#fff;"] {
    color: var(--misc-color);
    text-shadow: var(--shad);
}

.chatItem > span, .chatItem {
    text-shadow: var(--shad) !important;
}

#healthValueHolder {
    border-radius: 0;
    background-color: transparent;
    border: none;
    position: fixed;
    left: calc(50% - 155px);
    bottom: 38px;
    z-index: 99999999;
}

#healthValue {
    text-shadow: var(--shad);
    color: var(--misc-color);
}

#maxHP {
    display: none;
}

#healthValue, #ammoVal, #ammoMax {
    position: fixed;
    width: auto !important;
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    color: var(--misc-color);
}

#healthBar {
    left: calc(50% - 130px);
    bottom: 15px;
    position: fixed;
    transform: translate(-50%);
    border: 3px solid var(--main-color);
    border-top: none !important;
    border-left: none !important;
    overflow: hidden;
    border-radius: 5px;
    background-color: var(--accent-color);
    width: 250px !important;
    height: 37px !important;
    display: inline-flex;
}

.healthBarSeg {
    border-radius: 0 !important;
    margin-right: 0px !important;
    background-color: unset !important;
    width: -webkit-fill-available !important;
}

.hpBSeg {
    background-color: var(--accent-color) !important; 
    border-radius: 0 !important;
    -webkit-box-shadow: unset !important;
}

#ammoVal {
    transform: rotate(180deg) translate(0, -50%);
}

#ammoVal {
    position: absolute;
    left: 50%;
    bottom: calc(50% + 2px);
    color: var(--misc-color);
    text-shadow: var(--shad);
}

#ammoMax {
    display: none;
}

#ammoDisplay {
    text-align: center !important;
    height: 37px;
    border-radius: 5px;
    right: calc(50% - 120px);
    bottom: 15px;
    position: fixed;
    transform: translate(50%) rotate(180deg);
    width: 250px;
    border: 3px solid var(--main-color);
    border-left: none !important;
    border-bottom: none !important;
    padding: 0 !important;
    background-image: linear-gradient(90deg, var(--main-color), var(--main-color)) !important;
    background-color: var(--main-color);
}

#ammoDisplay[style*="background-size"] { 
    background-color: var(--accent-color) !important;
}

#ammoDisplay[style*="background-size: 0"] {
    background-color: var(--main-color) !important;
}

#weapDisplay {
    border: 3px solid var(--main-color);
    border-radius: 5px;
    border-top: none !important;
    border-bottom: none !important;
    position: absolute;
    transform: translate(50%) scale(0.8) !important;
    background-color: var(--main-color);
    right: 50%;
    bottom: 55px;
    width: 180px !important;
    height: 110px !important;
}

.weapItem {
    transform: translateY(0);
    align-items: center;
    justify-content: center;
    position: relative;
    top: 25px;
    right: 20px;
}

.meleeChatIcon, .weaponChatIcon {
    filter: brightness(1);
}

#weapIconMel {
    transform: translateY(-5%);
}

.weapIcon {
    filter: brightness(1) drop-shadow(1px 1px 1px black);
    opacity: 0 !important;
    transition-duration: .3s;
    transform: scale(1.1);
    width: 0px;
    height: 0;
}

.weapIcon[style*="1"] {
    transform: scale(1.1);
    opacity: 1 !important;
    width: 140px;
    height: 70px;
}

#weapIconMel {
    margin: 0 !important;
}

.topRightCounters {
    padding-top: 15px;
    padding-bottom: 0px;
    padding-right: 5px;
    padding-left: 5px;
    border-right: 3px solid var(--main-color) !important;
    border: none;
    border-radius: 5px;
    background-color: var(--main-color);
    display: flex;
    flex-direction: column;
    position: fixed;
    right: 15px;
    bottom: 50%;
    transform: translate(0, 50%);
    align-items: center;
    justify-content: center;
    width: auto !important;
    line-height: 10px;
}

#killCount, #deathCount, #streakCount, #kdCount, #scoreCount, #livesCount {
    background-color: transparent;
}

#killsVal, #deathsVal, #streakVal, #kdVal, #myScoreVal, #livesDisp {
    text-shadow: var(--shad);
    font-size: 25px;
    color: var(--misc-color);
}

#killsVal::after {
    content: " K";
    padding-left: 1px;
    font-size: 25px; 
}

#deathsVal::after {
    content: " D";
    padding-left: 1px;
    font-size: 25px; 
}

#streakVal::after {
    content: " S";
    padding-left: 1px;
    font-size: 25px; 
}

#kdVal::after {
    content: " KD";
    padding-left: 1px;
    font-size: 25px; 
}

#myScoreVal::after {
    content: " P";
    padding-left: 1px;
    font-size: 25px; 
}

#livesDisp::after {
    content: " L";
    padding-left: 1px;
    font-size: 25px; 
}

#reloadMsg {
    position: absolute;
    left: 50%;
    margin-left: -60px;
    transform: translate(-50%,0);
    bottom: 40%;
    animation: spin 1.8s infinite alternate ease-in-out;
    background-color: transparent;
    border: none;
    font-size: 0;
}

#reloadMsg::before {
    color: var(--misc-color);
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    position: absolute;
    content: "priority_high";
    font-size: 48px;
    font-weight: 600;
    font-family: 'Material Icons';
}

#killStreakHolder {
    margin: 0 !important;
    position: fixed;
    right: 10px;
    bottom: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: auto !important;
}

.killStreakItem {
    border-radius: 5px;
    margin-right: 5px !important;
    border-top: none !important;
    border-left: none !important;
    background-color: var(--main-color) !important;
    border: 3px solid var(--main-color);
}

.killStreakItem > span {
    color: var(--misc-color) !important;
}

.killStreakCnt {
    color: var(--misc-color) !important;
}

#krTagHolder, #giftTagHolder {
    position: fixed;
    bottom: 95px;
    right: 10px;
    margin: 0 !important;
}

#krTagHolder > div, #giftTagHolder > div {
    border-bottom: none !important;
}

/* END OF MATCH */

.matchVote {
    border: 3px solid var(--menu-color); 
}

#endTimer {
    color: var(--misc-color) !important;
}

.tabHeader.selected {
    color: var(--misc-color) !important;
    border-bottom: 5px solid var(--misc-color);
}

.endTablePfp {
    border: 4px solid var(--misc-color);
}

.endCard {
    border: 3px solid var(--misc-color)
}

/* LOADER */

#loadInfoLHolder, #loadInfoRHolder {
    display: none;
}

#initLoader {
    filter: grayscale(100%);
    background-image: url('https://cdn.discordapp.com/attachments/852817363409960960/897383112294666261/window_rain.gif') !important;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    pointer-events: all;
}

.lds-ring {
    display: none;
}

.lds-ring > div {
    display: none;
}

div#loadTipsHolder {
    font-size: 0;
}

#loadTipsHolder:before {
    text-shadow: 5px 4px #000;
    content: "読み込み中";
    font-family: 'JP';
    font-size: 32px;
}

#loadTipsHolder:after {
    text-shadow: 5px 4px #000;
    position: absolute !important;
    right: 50%;
    top: 10%;
    transform: translateY(-100%) translateX(50%);
    content: url('https://cdn.discordapp.com/attachments/852817363409960960/900660652408995880/Double_Ring-1s-200px.gif');
    font-size: 32px;
}

#loadHeader {
    display: none;
}

#loadEditrBtn {
    display: none;
}

#adCon {
    display: none;
}

#streamEvents {
    display: none;
}

#loadTipsHolder > span {
    display: none;
}

#lC-cont {
    display: none;
}

#loadGamNm {
    display: none;
}

#mLevelCont {
    display: none;
}

.youNewDiv {
    display: none !important;
}`

const removeAds = `
#bundlePop, #adCon, #aHolder, #endAMerger, #newsHolder {
    display: none !important;
}
`;

const keyRain = `
#wKeyPress.press, #aKeyPress.press, #sKeyPress.press, #dKeyPress.press, #shiftKeyPress.press, #spaceKeyPress.press {
    animation: rainbowT 0.5s linear infinite;
}
`;

module.exports = {
	baseStyles,
	menuTimerStyles,
	keystrokeStyles,
    twitchStyles,
    stretched,
    frosted,
    removeAds,
    keyRain
};
