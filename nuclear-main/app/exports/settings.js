// @ts-nocheck
"use strict";
let UtilManager = require("../modules/util-manager");

module.exports = {
	disableFrameRateLimit: {
		name: "Uncap FPS",
		id: "disableFrameRateLimit",
		cat: "Performance",
		type: "checkbox",
		val: true,
		needsRestart: true,
		html() {
			return UtilManager.instance.clientUtils.genCSettingsHTML(this);
		}
	},
	feelnice: {
		name: "Make the game feel nice",
		id: "feelnice",
		cat: "Performance",
		type: "checkbox",
		val: true,
		needsRestart: true,
		html() {
			return UtilManager.instance.clientUtils.genCSettingsHTML(this);
		}
	},
	angleBackend: {
	name: "Angle Backend",
	id: "angleBackend",
	cat: "Performance",
	platforms: ["win32", "linux", "darwin"],
	type: "select",
	options: {
		"default": "Default",
		gl: "OpenGL",
		d3d11: "D3D11",
		d3d9: "D3D9",
		d3d11on12: "D3D11on12",
	},
	val: "default",
	needsRestart: true,
	html() {
		return UtilManager.instance.clientUtils.genCSettingsHTML(this);
	},
	},
	realping: {
		name: "Show more accurate ping",
		id: "realping",
		cat: "Performance",
		type: "checkbox",
		val: true,
		needsRestart: true,
		html() {
			return UtilManager.instance.clientUtils.genCSettingsHTML(this);
		},
		set: val => {
			function ping() {
				var ping = document.getElementById("pingText").innerHTML;
				if (ping) {
				var calc = Math.floor(ping * 2);
				document.getElementById("pingText").innerText = calc;
				}
			}

			const targetNode = document.getElementById('pingText');

			const config = { childList: true };

			const callback = (mutationList, observer) => {
			for (const mutation of mutationList) {
				if (mutation.type === 'childList') {
				ping();
				observer.disconnect();
				}
			}
			observer.observe(targetNode, config);
			};

			const observer = new MutationObserver(callback);

			observer.observe(targetNode, config);

			if (val === false) {
				observer.disconnect();
			}
		}
	},
	acceleratedCanvas: {
		name: "Accelerated Canvas",
		id: "acceleratedCanvas",
		cat: "Performance",
		type: "checkbox",
		val: true,
		needsRestart: true,
		html() {
			return UtilManager.instance.clientUtils.genCSettingsHTML(this);
		},
	},
	inProcessGPU: {
		name: "In-Process GPU",
		id: "inProcessGPU",
		cat: "Chromium",
		type: "checkbox",
		val: false,
		needsRestart: true,
		html() {
			return UtilManager.instance.clientUtils.genCSettingsHTML(this);
		},
	},
	raw_mouse_input: {
		name: "Raw Mouse Input",
		id: "raw_mouse_input",
		cat: "Chromium",
		type: "checkbox",
		val: false,
		needsRestart: true,
		html() {
			return UtilManager.instance.clientUtils.genCSettingsHTML(this);
		},
	},
	hideAds: {
		name: "Hide all Ad's",
		id: "hideAds",
		cat: "Interface",
		type: "checkbox",
		val: true,
		needsRestart: true,
		html() {
			return UtilManager.instance.clientUtils.genCSettingsHTML(this);
		},
		set: val => {
			const sti = require('../modules/styles-injection');
			const targetNode = document.getElementById('popupHolder');

			const config = { attributes: true };

			const callback = (mutationList, observer) => {
			for (const mutation of mutationList) {
				if (mutation.type === 'attributes') {
				clearPops();
				observer.disconnect(); 
				}
			}
			};

			const observer = new MutationObserver(callback);

			observer.observe(targetNode, config);

			if (val === true) {
				document.addEventListener('DOMContentLoaded', () => {
					document.head.appendChild(document.createElement('style')).innerText = `
					${sti.removeAds}
					`
				})
			}
		}
	},
	showExitButton: {
		name: "Show Exit Button",
		id: "showExitButton",
		cat: "Interface",
		type: "checkbox",
		val: true,
		html() {
			return UtilManager.instance.clientUtils.genCSettingsHTML(this);
		},
		set: val => {
			let btn = document.getElementById("clientExit");
			if (btn) btn.style.display = val ? "flex" : "none";
		}
	},
	showAltManagerButton: {
		name: "Show Alt-Manager Button",
		id: "showAltManagerButton",
		cat: "Interface",
		type: "checkbox",
		val: true,
		html() {
			return UtilManager.instance.clientUtils.genCSettingsHTML(this);
		},
		set: val => {
			let btn = document.getElementById("accManagerBtn");
			if (btn) btn.style.display = val ? "block" : "none";
		}
	},
	enableMenuTimer: {
		name: "Show Menu-Timer",
		id: "enableMenuTimer",
		cat: "Interface",
		type: "checkbox",
		val: true,
		needsRestart: true,
		html() {
			return UtilManager.instance.clientUtils.genCSettingsHTML(this);
		}
	},
	enabletwitch: {
		name: "Twitch Chat",
		id: "enabletwitch",
		cat: "Twitch",
		type: "checkbox",
		val: false,
		needsRestart: true,
		html() {
			return UtilManager.instance.clientUtils.genCSettingsHTML(this);
		},
		set: val => {
			if (val === true) {
				localStorage.setItem('connect', 'true');
				localStorage.setItem('twitch', 'true');
			}
			if (val === false) {
				localStorage.setItem('connect', 'false');
				localStorage.setItem('twitch', 'false');
			}
		}
	},
	twitchstreamer: {
		name: "Twitch Streamer",
		id: "twitchstreamer",
		cat: "Twitch",
		type: "input",
		val: '',
		placeholder: 'twitch.tv/',
		needsRestart: true,
		html() {
			return UtilManager.instance.clientUtils.genCSettingsHTML(this);
		},
		set: val => {
			const el = document.getElementById('c_slid_twitchstreamer');
			if (el) {
			localStorage.setItem("twInput", el.value);
		};
		}
	},
	keystrokes: {
		name: "Keystrokes",
		id: "keystrokes",
		cat: "Keystrokes",
		type: "checkbox",
		val: false,
		html() {
			return UtilManager.instance.clientUtils.genCSettingsHTML(this);
		},
		set: val => {
			let btn = document.getElementById("inputHolder");
			if (btn) btn.style.display = val ? "block" : "none";
		}
	},
	keystrokesRain: {
		name: "Keystrokes Rainbow on Press",
		id: "keystrokesRain",
		cat: "Keystrokes",
		type: "checkbox",
		val: false,
		html() {
			return UtilManager.instance.clientUtils.genCSettingsHTML(this);
		},
		set: val => {
			const sti = require('../modules/styles-injection');
			if (val === true) {
				document.getElementById('keyRain').innerText = sti.keyRain;
			}
			if (val === false) {
				document.getElementById('keyRain').innerText = "";
			}
		}
	},
	keystrokesColor: {
		name: "Keystrokes Color",
		id: "keystrokesColor",
		cat: "Keystrokes",
		type: "color",
		val: 'var(--ks-color)',
		html() {
			return UtilManager.instance.clientUtils.genCSettingsHTML(this);
		},
		set: val => {
			let kc = document.getElementById('c_slid_keystrokesColor');
			if (kc) {
				document.documentElement.style.setProperty('var(--ks-color)', kc.value);
				localStorage.setItem("c_slid_keystrokesColor", kc.value);
			
				document.getElementById('inputHolder').appendChild(wKeyPress).style.color = localStorage.getItem("c_slid_keystrokesColor");
				document.getElementById('inputHolder').appendChild(aKeyPress).style.color = localStorage.getItem("c_slid_keystrokesColor");
				document.getElementById('inputHolder').appendChild(sKeyPress).style.color = localStorage.getItem("c_slid_keystrokesColor");
				document.getElementById('inputHolder').appendChild(dKeyPress).style.color = localStorage.getItem("c_slid_keystrokesColor");
				document.getElementById('inputHolder').appendChild(shiftKeyPress).style.color = localStorage.getItem("c_slid_keystrokesColor");
				document.getElementById('inputHolder').appendChild(spaceKeyPress).style.color = localStorage.getItem("c_slid_keystrokesColor");};
		},
	},
	keystrokesInputColor: {
		name: "Keystrokes Color on Press",
		id: "keystrokesInputColor",
		cat: "Keystrokes",
		type: "color",
		val: 'var(--ks-input)',
		html() {
			return UtilManager.instance.clientUtils.genCSettingsHTML(this);
		},
		set: val => {
			let kc = document.getElementById('c_slid_keystrokesInputColor');
			if (kc) {
				document.documentElement.style.setProperty('var(--ks-input)', kc.value);
				localStorage.setItem("c_slid_keystrokesInputColor", kc.value); };
		},
	},
	keystrokesBackgroundColor: {
		name: "Keystrokes Background",
		id: "keystrokesBackgroundColor",
		cat: "Keystrokes",
		type: "color",
		val: 'var(--ks-bg)',
		html() {
			return UtilManager.instance.clientUtils.genCSettingsHTML(this);
		},
		set: val => {
			let kc = document.getElementById('c_slid_keystrokesBackgroundColor');
			if (kc) {
				document.documentElement.style.setProperty('var(--ks-bg)', kc.value);
				localStorage.setItem("c_slid_keystrokesBackgroundColor", kc.value);
			
				document.getElementById('inputHolder').appendChild(wKeyPress).style.backgroundColor = localStorage.getItem("c_slid_keystrokesBackgroundColor");
				document.getElementById('inputHolder').appendChild(aKeyPress).style.backgroundColor = localStorage.getItem("c_slid_keystrokesBackgroundColor");
				document.getElementById('inputHolder').appendChild(sKeyPress).style.backgroundColor = localStorage.getItem("c_slid_keystrokesBackgroundColor");
				document.getElementById('inputHolder').appendChild(dKeyPress).style.backgroundColor = localStorage.getItem("c_slid_keystrokesBackgroundColor");
				document.getElementById('inputHolder').appendChild(shiftKeyPress).style.backgroundColor = localStorage.getItem("c_slid_keystrokesBackgroundColor");
				document.getElementById('inputHolder').appendChild(spaceKeyPress).style.backgroundColor = localStorage.getItem("c_slid_keystrokesBackgroundColor"); };
		},
	},
	keystrokesOpacity: {
		name: "Keystrokes Opacity",
		id: "keystrokesOpacity",
		cat: "Keystrokes",
		type: "slider",
		val: '1',
		min: '0',
		max: '1',
		step: '0.1',
		html() {
			return UtilManager.instance.clientUtils.genCSettingsHTML(this);
		},
		set: val => {
			let el = document.getElementById('inputHolder');
			let slider = document.getElementById("c_slid_keystrokesOpacity");
			if (slider) {
				localStorage.setItem("keystrokesOpacity", slider.value);
				el.style.opacity = slider.value;
			};
			document.addEventListener('DOMContentLoaded', () => {
			el.style.opacity = localStorage.getItem("keystrokesOpacity");
			});
		},
	},
	keystrokesPosX: {
		name: "Keystrokes Position - X",
		id: "keystrokesPosX",
		cat: "Keystrokes",
		type: "slider",
		val: '50',
		min: '0',
		max: '100',
		step: '1',
		html() {
			return UtilManager.instance.clientUtils.genCSettingsHTML(this);
		},
		set: val => {
			let el = document.getElementById('inputHolder');
			let slider = document.getElementById("c_slid_keystrokesPosX");
			if (slider) {
				localStorage.setItem("keystrokesPosX", slider.value + "%");
				el.style.left = slider.value + "%";
			};
			document.addEventListener('DOMContentLoaded', () => {
			el.style.left = localStorage.getItem("keystrokesPosX");
			});
		},
	},
	keystrokesPosY: {
		name: "Keystrokes Position - Y",
		id: "keystrokesPosY",
		cat: "Keystrokes",
		type: "slider",
		val: '2',
		min: '0',
		max: '85',
		step: '1',
		html() {
			return UtilManager.instance.clientUtils.genCSettingsHTML(this);
		},
		set: val => {
			let el = document.getElementById('inputHolder');
			let slider = document.getElementById("c_slid_keystrokesPosY");
			if (slider) {
				localStorage.setItem("keystrokesPosY", slider.value + "%");
				el.style.bottom = slider.value + "%";
			};
			document.addEventListener('DOMContentLoaded', () => {
			el.style.bottom = localStorage.getItem("keystrokesPosY");
			});
		},
	},
	selectcss: {
		name: "Client CSS",
		id: "selectcss",
		cat: "Misc",
		type: "select",
		val: "default",
		options: {
			default: "Default",
			stretched: "Stretched",
			frosted: "Frosted Glass",
		},
		html() {
			return UtilManager.instance.clientUtils.genCSettingsHTML(this);
		},
		set: val => {
			const sti = require('../modules/styles-injection');
			if (val === "stretched") {
				document.getElementById('sexCSS').innerText = sti.stretched;
			}
			if (val === "frosted") {
				document.getElementById('sexCSS').innerText = sti.frosted;
			}
			if (val === "default") {
				document.getElementById('sexCSS').innerText = "";
			}
		}
	},
	gamefull: {
		name: "Auto F6 on Gamefull",
		id: "gamefull",
		cat: "Misc",
		type: "checkbox",
		val: false,
		html() {
			return UtilManager.instance.clientUtils.genCSettingsHTML(this);
		},
		set: val => {
			if (val === true) {
				localStorage.setItem('gfull', 'true');
			}
			if (val === false) {
				localStorage.setItem('gfull', 'false');
			}
		},
	},
	discordRPC: {
		name: "Discord Rich Presence",
		id: "discordRPC",
		cat: "Discord",
		type: "checkbox",
		val: true,
		needsRestart: true,
		html() {
			return UtilManager.instance.clientUtils.genCSettingsHTML(this);
		}
	},
	autoUpdate: {
		name: "Auto Update Behavior",
		id: "autoUpdate",
		cat: "Maintenance",
		type: "select",
		options: {
			download: "Download",
			check: "Check only",
			skip: "Skip"
		},
		val: "download",
		html() {
			return UtilManager.instance.clientUtils.genCSettingsHTML(this);
		}
	},
	enableUserscripts: {
		name: "Enable Userscripts",
		id: "enableUserscripts",
		cat: "Maintenance",
		type: "checkbox",
		val: false,
		needsRestart: true,
		html() {
			return UtilManager.instance.clientUtils.genCSettingsHTML(this);
		}
	},
	userscriptsPath: {
		name: "Userscripts Path",
		id: "userscriptsPath",
		cat: "Maintenance",
		type: "text",
		val: "",
		placeholder: "Userscripts Folder Path",
		needsRestart: true,
		html() {
			return UtilManager.instance.clientUtils.genCSettingsHTML(this);
		}
	},
	resourceSwapperMode: {
		name: "Resource Swapper Mode",
		id: "resourceSwapperMode",
		cat: "Maintenance",
		type: "select",
		options: {
			normal: "Normal",
			advanced: "Advanced",
			disabled: "Disabled"
		},
		val: "normal",
		needsRestart: true,
		html() {
			return UtilManager.instance.clientUtils.genCSettingsHTML(this);
		}
	},
	resourceSwapperPath: {
		name: "Resource Swapper Path",
		id: "resourceSwapperPath",
		cat: "Maintenance",
		type: "text",
		val: "",
		placeholder: "Resource Swapper Folder Path",
		needsRestart: true,
		html() {
			return UtilManager.instance.clientUtils.genCSettingsHTML(this);
		}
	}
};
