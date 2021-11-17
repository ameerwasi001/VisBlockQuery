Blockly.JavaScript['pattern_num'] = block => {
    const f = Blockly.JavaScript.valueToCode(block, 'NUM', Blockly.JavaScript.ORDER_FUNCTION_CALL)
    return [`pattern.Num(${f})`, Blockly.JavaScript.ORDER_FUNCTION_CALL]
}

Blockly.JavaScript['pattern_str'] = block => {
    const f = Blockly.JavaScript.valueToCode(block, 'STR', Blockly.JavaScript.ORDER_FUNCTION_CALL)
    return [`pattern.Str(${f})`, Blockly.JavaScript.ORDER_FUNCTION_CALL]
}

Blockly.JavaScript['pattern_regex'] = block => {
    const regex = block.getFieldValue('REGEX')
    const completeness = Blockly.JavaScript.valueToCode(block, 'COMPLETE', Blockly.JavaScript.ORDER_FUNCTION_CALL)
    return [`pattern.RegEx(new RegExp(${regex == "" ? 'new RegExp("")' : `/${regex}/`}), ${completeness == "" ? "true" : completeness})`, Blockly.JavaScript.ORDER_FUNCTION_CALL]
}

Blockly.JavaScript['pattern_any'] = block => {
    const x = Blockly.JavaScript.valueToCode(block, 'VAL', Blockly.JavaScript.ORDER_FUNCTION_CALL)
    return [`pattern.Any(${x})`, Blockly.JavaScript.ORDER_FUNCTION_CALL]
}

Blockly.JavaScript['pattern_arr'] = block => {
    const x = Blockly.JavaScript.valueToCode(block, 'PATTERN', Blockly.JavaScript.ORDER_FUNCTION_CALL)
    return [`pattern.Arr(${x == "" ? "pattern.Any()" : x})`, Blockly.JavaScript.ORDER_FUNCTION_CALL]
}

Blockly.JavaScript['pattern_or'] = block => {
    const a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_FUNCTION_CALL)
    const b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_FUNCTION_CALL)
    return [`pattern.Or(${a == "" ? "pattern.Any()" : a}, ${b == "" ? "pattern.Any()" : b})`, Blockly.JavaScript.ORDER_FUNCTION_CALL]
}

Blockly.JavaScript['pattern_block'] = block => {
    const obj = Blockly.JavaScript.valueToCode(block, 'OBJ', Blockly.JavaScript.ORDER_FUNCTION_CALL)
    return [`pattern.Pattern(${obj == "" ? "{}" : obj})`, Blockly.JavaScript.ORDER_FUNCTION_CALL]
}

Blockly.JavaScript['predicate_block'] = block => {
    const id = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('FIELD_NAME'), Blockly.VARIABLE_CATEGORY_NAME)
    const pred = Blockly.JavaScript.valueToCode(block, 'COND', Blockly.JavaScript.ORDER_FUNCTION_CALL)
    return [`(${id}) => {return ${pred}}`, Blockly.JavaScript.ORDER_FUNCTION_CALL]
}

Blockly.JavaScript['no_name_predicate_block'] = block => {
    const pred = Blockly.JavaScript.valueToCode(block, 'COND', Blockly.JavaScript.ORDER_FUNCTION_CALL)
    return [`(_) => {return ${pred == "" ? "true" : pred}}`, Blockly.JavaScript.ORDER_FUNCTION_CALL]
}

Blockly.JavaScript['variable_underscore_get'] = block => {
    return [`_`, Blockly.JavaScript.ORDER_FUNCTION_CALL]
}
