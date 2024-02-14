import { world, system } from "@minecraft/server";
import { Tests } from "test/test_main.js";

// global variables to run test or debug script
var debug = true;
var test = false;

function mainTick() {
    try {
        if (system.currentTick % 100 === 0) {
            var my_name = "Steve";
            // write code here to get the player's name
            world.sendMessage("Hello " + my_name + "! Tick: " + system.currentTick);
        }
    }
    catch (e) {
        world.sendMessage("Error: " + e);
    }
    system.run(mainTick);
}

if (debug) {
    world.sendMessage("Debug mode is enabled");
    system.run(mainTick);
}

if (test) {
    world.sendMessage("Test mode is enabled");
    try {
        Tests.runTests();
    }
    catch (e) {
        world.sendMessage("Error: " + e);
    }
}