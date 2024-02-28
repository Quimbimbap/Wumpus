import { world } from "@minecraft/server";

export default class WumpusPlayer {
    static init() {
        world.sendMessage("Initializing Player")
    }
    static test() {
        if (WumpusPlayer.testing) {
            world.sendMessage("Testing Player");
        }
    }
}

WumpusPlayer.testing = false;