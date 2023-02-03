"use strict";

let log = require("electron-log");

/**
 * @param {import("electron").App} app
 * @param {import("electron-store")} config
 */
let cliSwitchHandler = function(app, config) {
	const angleBackend = /** @type {string} */ (config.get("angleBackend", "default"));
	if (angleBackend !== "default") app.commandLine.appendSwitch("use-angle", angleBackend);

	app.commandLine.appendSwitch("autoplay-policy", "no-user-gesture-required");


	if (!config.get("acceleratedCanvas", true)) {app.commandLine.appendSwitch("disable-accelerated-2d-canvas", "true")};
	if (config.get("disableFrameRateLimit", true)) {app.commandLine.appendSwitch('disable-frame-rate-limit')};
	if (config.get("feelnice"), true) {
		app.commandLine.appendSwitch('disable-gpu-vsync');
		app.commandLine.appendSwitch('max-gum-fps', '9999');
		app.commandLine.appendSwitch('force_high_performance_gpu');
		app.commandLine.appendSwitch('force-high-performance-gpu');
		app.commandLine.appendSwitch('enable-gpu-rasterization');
		app.commandLine.appendSwitch('enable-oop-rasterization');
		app.commandLine.appendSwitch('disable-zero-copy');
  		app.commandLine.appendSwitch('enable-native-gpu-memory-buffers', true);
		app.commandLine.appendSwitch('ignore-gpu-blacklist');
		app.commandLine.appendSwitch('max-active-webgl-contexts', 100);
		app.commandLine.appendSwitch('enable-quic');
		app.commandLine.appendSwitch('high-dpi-support', 1);
		app.commandLine.appendSwitch('disable-2d-canvas-clip-aa');
		app.commandLine.appendSwitch('enable-highres-timer');
		app.commandLine.appendSwitch('disable-metrics');
		app.commandLine.appendSwitch('disable-metrics-repo');
		app.commandLine.appendSwitch('disable-bundled-ppapi-flash');
		app.commandLine.appendSwitch('disable-logging');
		app.commandLine.appendSwitch('enable-javascript-harmony');
		app.commandLine.appendSwitch('enable-future-v8-vm-features');
		app.commandLine.appendSwitch('disable-low-end-device-mode');
		app.commandLine.appendSwitch('enable-webgl2-compute-context');
		app.commandLine.appendSwitch('disable-hang-monitor');
		app.commandLine.appendSwitch('renderer-process-limit', 100);
		app.commandLine.appendSwitch('disable-web-security');
		app.commandLine.appendSwitch('webrtc-max-cpu-consumption-percentage=100');
		app.commandLine.appendSwitch('enable-zero-copy');
		app.commandLine.appendSwitch('ignore-gpu-blocklist');
		app.commandLine.appendSwitch('enable-lazy-image-loading');


	}
	if (config.get("inProcessGPU", true)) {app.commandLine.appendSwitch("in-process-gpu")};
	if (config.get('raw_mouse_input', true)) {app.commandLine.appendSwitch('enable-pointer-lock-options')}
};

module.exports = cliSwitchHandler;
