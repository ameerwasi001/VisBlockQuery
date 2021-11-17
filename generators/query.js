Blockly.JavaScript['query'] = block => {
    const dbName = Blockly.JavaScript.valueToCode(block, 'DB_NAME', Blockly.JavaScript.ORDER_FUNCTION_CALL)
    const query = Blockly.JavaScript.statementToCode(block, 'QUERY')
    return [`new Graph(${dbName}).query()${query}`, Blockly.JavaScript.ORDER_FUNCTION_CALL]
}

Blockly.JavaScript['index'] = block => {
    const index = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_FUNCTION_CALL)
    return `.index(${index == "" ? "0" : index})`
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

Blockly.JavaScript['tag'] = block => {
    const attr = Blockly.JavaScript.valueToCode(block, 'ATTR', Blockly.JavaScript.ORDER_FUNCTION_CALL)
    return `.tag(${attr == "" ? "{}" : attr})`
}

Blockly.JavaScript['hasTag'] = block => {
    const pattern = Blockly.JavaScript.valueToCode(block, 'PATTERN', Blockly.JavaScript.ORDER_FUNCTION_CALL)
    return `.hasTag(${pattern == "" ? "pattern.Any()" : pattern})`
}

Blockly.JavaScript['fromTag'] = block => {
    const pattern = Blockly.JavaScript.valueToCode(block, 'PATTERN', Blockly.JavaScript.ORDER_FUNCTION_CALL)
    return `.fromTag(${pattern == "" ? "pattern.Any()" : pattern})`
}

Blockly.JavaScript['dfs'] = block => {
    const side = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('SIDE'), Blockly.VARIABLE_CATEGORY_NAME)
    const rel = Blockly.JavaScript.valueToCode(block, 'REL', Blockly.JavaScript.ORDER_FUNCTION_CALL)
    return `.dfs(${rel == "" ? "\"\"" : rel}, DFSSide.${side.toUpperCase()})`
}

Blockly.JavaScript['relatesTo'] = block => {
    const side = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('SIDE'), Blockly.VARIABLE_CATEGORY_NAME)
    const rel = Blockly.JavaScript.valueToCode(block, 'REL', Blockly.JavaScript.ORDER_FUNCTION_CALL)
    const pattern = Blockly.JavaScript.valueToCode(block, 'PATTERN', Blockly.JavaScript.ORDER_FUNCTION_CALL)
    return `.relatesTo(${rel == "" ? "\"\"" : rel}, ${pattern == "" ? "pattern.Any()" : pattern}, DFSSide.${side.toUpperCase()})`
}

Blockly.JavaScript['outs'] = block => {
    const rel = Blockly.JavaScript.valueToCode(block, 'RELATION', Blockly.JavaScript.ORDER_FUNCTION_CALL)
    return `.outs(${rel == "" ? "\"\"" : rel})`
}

Blockly.JavaScript['ins'] = block => {
    const rel = Blockly.JavaScript.valueToCode(block, 'RELATION', Blockly.JavaScript.ORDER_FUNCTION_CALL)
    return `.ins(${rel == "" ? "\"\"" : rel})`
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

Blockly.JavaScript['take'] = block => {
    const query = Blockly.JavaScript.valueToCode(block, 'TAKE', Blockly.JavaScript.ORDER_FUNCTION_CALL)
    return `.take(${query})`
}