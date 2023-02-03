"use strict";

let Store = require("electron-store");

let { baseStyles } = require("./styles-injection");

const config = new Store();

/**
 * @class WindowManager
 */
class WindowManager {
	/**
	 * @param {string} callerId
	 * @param {boolean} [hideKrunkerWindowsOnShow=true]
	 * @memberof WindowManager
	 */
	constructor(callerId, hideKrunkerWindowsOnShow = true) {
		this.callerId = callerId;
		this.hideOnShow = hideKrunkerWindowsOnShow;
		this.shown = false;

		document.addEventListener("DOMContentLoaded", () => {
			if (!document.getElementById("sex-windowHolder")) {
				let w = document.createElement("div");
				w.setAttribute("id", "sex-windowHolder");
				w.setAttribute("style", "display: none;");
				w.innerHTML = '<div id="sex-menuWindow"></div>';
				document.getElementsByTagName("body")[0].appendChild(w);

				let s = document.createElement("style");
				s.setAttribute("class", this.#randomStr(10));
				s.setAttribute("id", this.#randomStr(10));
				s.innerHTML = baseStyles;
				if (config.get("enableMenuTimer", true)) s.innerHTML += require("./styles-injection").menuTimerStyles;
				document.getElementsByTagName("body")[0].appendChild(s);
				if (config.get("hideAds", true)) s.innerHTML += require("./styles-injection").removeAds;
				document.getElementsByTagName("body")[0].appendChild(s);

				document.getElementsByTagName("body")[0].addEventListener("click", e => {
					// @ts-ignore
					(!e.path.find(p => p.id === "sex-menuWindow" || p.id === this.callerId)) && this.hide();
				});
			}
		});
	}

	/**
	 * @param {number} length
	 * @private
	 * @returns {string}
	 */
	#randomStr = (length) => {
		return [...Array(length)].map(() => Math.random().toString(36)[2]).join("");
	};

	/**
	 * @param {string} content
	 * @memberof WindowManager
	 */
	setContent(content) {
		document.getElementById("sex-menuWindow").innerHTML = content;
	}

	/**
	 * @memberof WindowManager
	 */
	show() {
		if (this.hideOnShow) document.getElementById("windowHolder").setAttribute("style", "display: none;");
		document.getElementById("sex-windowHolder").setAttribute("style", "display: block;");
		this.shown = true;
	}

	/**
	 * @memberof WindowManager
	 */
	hide() {
		document.getElementById("sex-windowHolder").setAttribute("style", "display: none;");
		this.shown = false;
	}

	/**
	 * @memberof WindowManager
	 */
	toggle() {
		this.shown ? this.hide() : this.show();
	}

	/**
	 * @returns {boolean} shown
	 * @memberof WindowManager
	 */
	isShown() {
		return this.shown;
	}
}

module.exports = WindowManager;
