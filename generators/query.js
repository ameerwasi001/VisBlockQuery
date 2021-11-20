Blockly.JavaScript['query'] = block => {
    const dbName = block.getFieldValue('DB_NAME')
    const query = Blockly.JavaScript.statementToCode(block, 'QUERY')
    return [`new Graph("${JSON.stringify(dbName).slice(1, -1)}").query()${query}`, Blockly.JavaScript.ORDER_FUNCTION_CALL]
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
    const rel = block.getFieldValue('REL')
    return `.dfs(${rel == "" ? "''" : JSON.stringify(rel)}, DFSSide.${side.toUpperCase()})`
}

Blockly.JavaScript['relatesTo'] = block => {
    const side = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('SIDE'), Blockly.VARIABLE_CATEGORY_NAME)
    const rel = block.getFieldValue('REL')
    const pattern = Blockly.JavaScript.valueToCode(block, 'PATTERN', Blockly.JavaScript.ORDER_FUNCTION_CALL)
    return `.relatesTo(${rel == "" ? "''" : JSON.stringify(rel)}, ${pattern == "" ? "pattern.Any()" : pattern}, DFSSide.${side.toUpperCase()})`
}

Blockly.JavaScript['outs'] = block => {
    const rel = block.getFieldValue('RELATION')
    return `.outs(${rel == "" ? "''" : JSON.stringify(rel)})`
}

Blockly.JavaScript['ins'] = block => {
    const rel = block.getFieldValue('RELATION')
    return `.ins(${rel == "" ? "''" : JSON.stringify(rel)})`
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