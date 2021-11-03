const compiledOutput = document.getElementById("code")
const runButtons = [...document.getElementsByClassName("round-btn")]
const workspace = Blockly.inject('blocklyDiv', {media: '../../media/', toolbox: document.getElementById('toolbox')})

Blockly.Xml.domToWorkspace(document.getElementById('startBlocks'), workspace)

const generateCode = () => Blockly.JavaScript.workspaceToCode(workspace)

const showCode = () => { 
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null
    compiledOutput.innerText = generateCode()
}

const runCode = () => {
    window.LoopTrap = 1000
    Blockly.JavaScript.INFINITE_LOOP_TRAP = "if (--window.LoopTrap == 0) throw \"Infinite loop.\";\n"
    const code = generateCode()
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null
    try {
        eval(code)
    } catch (e) {
        alert(e)
    }
}

workspace.addChangeListener(showCode)

runButtons.forEach(el => el.onclick = runCode)

showCode()