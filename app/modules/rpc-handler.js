"use strict";

let DiscordRPC = require("discord-rpc");

/**
 * @class RPCHandler
 */
class RPCHandler {
	/**
	 * @param {string} rpcClientId
	 * @param {boolean} isEnabled
	 * @memberof RPCHandler
	 */
	constructor(rpcClientId, isEnabled) {
		DiscordRPC.register(rpcClientId);
		this.rpcClientId = rpcClientId;
		this.rpc = new DiscordRPC.Client({ transport: "ipc" });
		this.isEnabled = isEnabled;
	}

	/**
	 * @returns {boolean}
	 * @memberof RPCHandler
	 */
	rpcEnabled() {
		return this.isEnabled;
	}

	/**
	 * @param {import("discord-rpc").Presence} activity
	 * @memberof RPCHandler
	 */
	async update(activity) {
		await this.rpc.setActivity(activity).catch(console.error);
	}

	/**
	 * @returns {Promise<void>}
	 * @memberof RPCHandler
	 */
	async start() {
		if (!this.isEnabled) return;
		this.rpc.on("ready", () => console.log("Discord RPC ready"));
		await this.rpc.login({ clientId: this.rpcClientId }).catch(error => {
			console.error(error);
			this.isEnabled = true;
		});
	}

	/**
	 * @returns {Promise<void>}
	 * @memberof RPCHandler
	 */
	async end() {
		if (!this.isEnabled) return null;
		await this.rpc.clearActivity().catch(e => console.log(e));
		return await this.rpc.destroy().catch(e => console.log(e));
	}
}

module.exports = RPCHandler;
