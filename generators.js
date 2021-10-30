Blockly.JavaScript['text_log'] = block => {
    const arg = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_FUNCTION_CALL)
    return "console.log(" + arg + ");\n"
}

Blockly.JavaScript['pattern_field'] = block => {
    const key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_FUNCTION_CALL)
    const val = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_FUNCTION_CALL)
    return `${key}: ${val},\n`
}

Blockly.JavaScript['pattern_num'] = block => {
    const f = Blockly.JavaScript.valueToCode(block, 'NUM', Blockly.JavaScript.ORDER_FUNCTION_CALL)
    return [`pattern.Num(${f})`, Blockly.JavaScript.ORDER_FUNCTION_CALL]
}

Blockly.JavaScript['pattern_str'] = block => {
    const f = Blockly.JavaScript.valueToCode(block, 'STR', Blockly.JavaScript.ORDER_FUNCTION_CALL)
    return [`pattern.Str(${f})`, Blockly.JavaScript.ORDER_FUNCTION_CALL]
}

Blockly.JavaScript['pattern_any'] = block => {
    const x = Blockly.JavaScript.valueToCode(block, 'VAL', Blockly.JavaScript.ORDER_FUNCTION_CALL)
    return [`pattern.Any(${x})`, Blockly.JavaScript.ORDER_FUNCTION_CALL]
}

Blockly.JavaScript['pattern_arr'] = block => {
    const x = Blockly.JavaScript.valueToCode(block, 'PATTERN', Blockly.JavaScript.ORDER_FUNCTION_CALL)
    return [`pattern.Arr(${x})`, Blockly.JavaScript.ORDER_FUNCTION_CALL]
}

Blockly.JavaScript['pattern_or'] = block => {
    const a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_FUNCTION_CALL)
    const b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_FUNCTION_CALL)
    return [`pattern.Or(${a}, ${b})`, Blockly.JavaScript.ORDER_FUNCTION_CALL]
}

Blockly.JavaScript['pattern_block'] = block => {
    const obj = Blockly.JavaScript.statementToCode(block, 'PAIRS')
    return [`pattern.Pattern({\n${obj}})`, Blockly.JavaScript.ORDER_FUNCTION_CALL]
}

Blockly.JavaScript['predicate_block'] = block => {
    const id = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('FIELD_NAME'), Blockly.VARIABLE_CATEGORY_NAME)
    const pred = Blockly.JavaScript.valueToCode(block, 'COND', Blockly.JavaScript.ORDER_FUNCTION_CALL)
    return [`(${id}) => {return ${pred}}`, Blockly.JavaScript.ORDER_FUNCTION_CALL]
}