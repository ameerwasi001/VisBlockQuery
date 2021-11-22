Blockly.JavaScript['obj'] = block => {
    const obj = Blockly.JavaScript.statementToCode(block, 'PAIRS')
    return [`{\n${obj}}`, Blockly.JavaScript.ORDER_FUNCTION_CALL]
}

Blockly.JavaScript['pattern_field'] = block => {
    const key = block.getFieldValue('KEY')
    const val = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_FUNCTION_CALL)
    return `${JSON.stringify(key)}: ${val == "" ? "\"0\"" : val},\n`
}

Blockly.JavaScript['property'] = block => {
    const obj = Blockly.JavaScript.valueToCode(block, 'OBJ', Blockly.JavaScript.ORDER_FUNCTION_CALL)
    const prop = block.getFieldValue('PROPERTY')
    return [obj == "" ? "" : `${obj}[${prop == "" ? "''" : JSON.stringify(prop)}]`, Blockly.JavaScript.ORDER_ATOMIC] 
}
