const Process = require("./Process");
const ProcessManager = require("./ProcessManager");

const procMan = new ProcessManager();

procMan.addProcess(new Process("Minecraft", "node lol"), true);
procMan.addProcess(new Process("main-front", "node lol1"), true);
procMan.addProcess(new Process("utils-api", "node lol2"), true);


procMan.removeProcess("main-front");

function interpretCommand(command){
    switch (command) {
        case "ls":
            console.log(procMan.processes);
            break;
    
        default:
            break;
    }
}

module.exports = interpretCommand;