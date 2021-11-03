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
    return [`pattern.Arr(${x == "" ? "pattern.Any()" : x})`, Blockly.JavaScript.ORDER_FUNCTION_CALL]
}

Blockly.JavaScript['pattern_or'] = block => {
    const a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_FUNCTION_CALL)
    const b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_FUNCTION_CALL)
    return [`pattern.Or(${a == "" ? "pattern.Any()" : a}, ${b == "" ? "pattern.Any()" : b})`, Blockly.JavaScript.ORDER_FUNCTION_CALL]
}

Blockly.JavaScript['obj'] = block => {
    const obj = Blockly.JavaScript.statementToCode(block, 'PAIRS')
    return [`{\n${obj}}`, Blockly.JavaScript.ORDER_FUNCTION_CALL]
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

// Query language blocks

Blockly.JavaScript['query'] = block => {
    const dbName = Blockly.JavaScript.valueToCode(block, 'DB_NAME', Blockly.JavaScript.ORDER_FUNCTION_CALL)
    const query = Blockly.JavaScript.statementToCode(block, 'QUERY')
    return [`Graph(${dbName}).query()${query}`, Blockly.JavaScript.ORDER_FUNCTION_CALL]
}

Blockly.JavaScript['vs'] = block => {
    const pattern = Blockly.JavaScript.valueToCode(block, 'PATTERN', Blockly.JavaScript.ORDER_FUNCTION_CALL)
    return `.vs(${pattern == "" ? "pattern.Any()" : pattern})`
}

Blockly.JavaScript['v'] = block => {
    const pattern = Blockly.JavaScript.valueToCode(block, 'PATTERN', Blockly.JavaScript.ORDER_FUNCTION_CALL)
    return `.v(${pattern == "" ? "pattern.Any()" : pattern})`
}

Blockly.JavaScript['filter'] = block => {
    const pattern = Blockly.JavaScript.valueToCode(block, 'PATTERN', Blockly.JavaScript.ORDER_FUNCTION_CALL)
    return `.filter(${pattern == "" ? "pattern.Any()" : pattern})`
}

Blockly.JavaScript['hasTag'] = block => {
    const pattern = Blockly.JavaScript.valueToCode(block, 'PATTERN', Blockly.JavaScript.ORDER_FUNCTION_CALL)
    return `.hasTag(${pattern == "" ? "pattern.Any()" : pattern})`
}

Blockly.JavaScript['outs'] = block => {
    const rel = Blockly.JavaScript.valueToCode(block, 'RELATION', Blockly.JavaScript.ORDER_FUNCTION_CALL)
    return `.outs(${rel})`
}

Blockly.JavaScript['ins'] = block => {
    const rel = Blockly.JavaScript.valueToCode(block, 'RELATION', Blockly.JavaScript.ORDER_FUNCTION_CALL)
    return `.ins(${rel})`
}

Blockly.JavaScript['intersect'] = block => {
    const query = Blockly.JavaScript.valueToCode(block, 'QUERY', Blockly.JavaScript.ORDER_FUNCTION_CALL)
    return `.intersect(${query})`
}

Blockly.JavaScript['union'] = block => {
    const query = Blockly.JavaScript.valueToCode(block, 'QUERY', Blockly.JavaScript.ORDER_FUNCTION_CALL)
    return `.union(${query})`
}

Blockly.JavaScript['difference'] = block => {
    const query = Blockly.JavaScript.valueToCode(block, 'QUERY', Blockly.JavaScript.ORDER_FUNCTION_CALL)
    return `.difference(${query})`
}

Blockly.JavaScript['unique'] = block => {
    return `.unique()`
}