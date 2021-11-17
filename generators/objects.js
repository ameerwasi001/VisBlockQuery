Blockly.JavaScript['obj'] = block => {
    const obj = Blockly.JavaScript.statementToCode(block, 'PAIRS')
    return [`{\n${obj}}`, Blockly.JavaScript.ORDER_FUNCTION_CALL]
}

Blockly.JavaScript['pattern_field'] = block => {
    const key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_FUNCTION_CALL)
    const val = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_FUNCTION_CALL)
    return `${key}: ${val == "" ? "0" : val},\n`
}

Blockly.JavaScript['property'] = block => {
    const obj = Blockly.JavaScript.valueToCode(block, 'OBJ', Blockly.JavaScript.ORDER_FUNCTION_CALL)
    const prop = Blockly.JavaScript.valueToCode(block, 'PROPERTY', Blockly.JavaScript.ORDER_FUNCTION_CALL)
    return [`${obj}[${prop == "" ? "" : prop}]`, Blockly.JavaScript.ORDER_ATOMIC]
}
