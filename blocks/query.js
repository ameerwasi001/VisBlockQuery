const QUERY_HUE = 190
const SIDES = [
    ['BOTH', 'BOTH'],
    ['INCOMING', 'INCOMING'],
    ['OUTGOING', 'OUTGOING']
]

Blockly.Blocks['query'] = {
    init: function() {
        this.appendValueInput('DB_NAME')
            .appendField('Query on')
        this.appendStatementInput('QUERY')
            .appendField('with')
        this.setColour(QUERY_HUE)
        this.setInputsInline(true)
        this.setOutput(true)
        this.setTooltip('Logs the given value to the console.')
        this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp')
    }
}

Blockly.Blocks['vs'] = {
    init: function() {
        this.appendValueInput('PATTERN')
            .appendField('Vertices matching')
        this.setColour(QUERY_HUE)
        this.setPreviousStatement(true)
        this.setNextStatement(true)
        this.setTooltip('Logs the given value to the console.')
        this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp')
    }
}

Blockly.Blocks['v'] = {
    init: function() {
        this.appendValueInput('PATTERN')
            .appendField('Vertex matching')
        this.setColour(QUERY_HUE)
        this.setPreviousStatement(true)
        this.setNextStatement(true)
        this.setTooltip('Logs the given value to the console.')
        this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp')
    }
}

Blockly.Blocks['outs'] = {
    init: function() {
        this.appendValueInput('RELATION')
            .appendField('outs')
        this.setColour(QUERY_HUE)
        this.setInputsInline(true)
        this.setPreviousStatement(true)
        this.setNextStatement(true)
        this.setTooltip('Logs the given value to the console.')
        this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp')
    }
}

Blockly.Blocks['ins'] = {
    init: function() {
        this.appendValueInput('RELATION')
            .appendField('ins')
        this.setColour(QUERY_HUE)
        this.setInputsInline(true)
        this.setPreviousStatement(true)
        this.setNextStatement(true)
        this.setTooltip('Logs the given value to the console.')
        this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp')
    }
}

Blockly.Blocks['filter'] = {
    init: function() {
        this.appendValueInput('PATTERN')
            .appendField('Matching from result')
        this.setColour(QUERY_HUE)
        this.setPreviousStatement(true)
        this.setNextStatement(true)
        this.setTooltip('Logs the given value to the console.')
        this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp')
    }
}

Blockly.Blocks['relatesTo'] = {
    init: function() {
        this.appendDummyInput()
            .appendField('Towards ')
            .appendField(new Blockly.FieldDropdown(SIDES), 'SIDE')
        this.appendValueInput('REL')
            .appendField('relates')
        this.appendValueInput('PATTERN')
            .appendField('to vertex matching')
        this.setColour(QUERY_HUE)
        this.setPreviousStatement(true)
        this.setNextStatement(true)
        this.setTooltip('Logs the given value to the console.')
        this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp')
    }
}

Blockly.Blocks['dfs'] = {
    init: function() {
        this.appendValueInput('REL')
            .appendField('Related by')
        this.appendDummyInput()
            .appendField('towards')
            .appendField(new Blockly.FieldDropdown(SIDES), 'SIDE')
        this.setColour(QUERY_HUE)
        this.setPreviousStatement(true)
        this.setNextStatement(true)
        this.setTooltip('Logs the given value to the console.')
        this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp')
    }
}

Blockly.Blocks['take'] = {
    init: function() {
        this.appendValueInput('TAKE')
            .appendField('Take first')
        this.setColour(QUERY_HUE)
        this.setPreviousStatement(true)
        this.setNextStatement(true)
        this.setTooltip('Logs the given value to the console.')
        this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp')
    }
}

Blockly.Blocks['index'] = {
    init: function() {
        this.appendValueInput('INDEX')
            .appendField('Element at')
        this.setColour(QUERY_HUE)
        this.setPreviousStatement(true)
        this.setNextStatement(true)
        this.setTooltip('Logs the given value to the console.')
        this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp')
    }
}

Blockly.Blocks['fromTag'] = {
    init: function() {
        this.appendValueInput('PATTERN')
            .appendField('Values matching tag')
        this.setColour(QUERY_HUE)
        this.setPreviousStatement(true)
        this.setNextStatement(true)
        this.setTooltip('Logs the given value to the console.')
        this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp')
    }
}

Blockly.Blocks['tag'] = {
    init: function() {
        this.appendValueInput('ATTR')
            .appendField('Tag with')
        this.setColour(QUERY_HUE)
        this.setPreviousStatement(true)
        this.setNextStatement(true)
        this.setTooltip('Logs the given value to the console.')
        this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp')
    }
}

Blockly.Blocks['hasTag'] = {
    init: function() {
        this.appendValueInput('PATTERN')
            .appendField('Has tag matching')
        this.setColour(QUERY_HUE)
        this.setPreviousStatement(true)
        this.setNextStatement(true)
        this.setTooltip('Logs the given value to the console.')
        this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp')
    }
}

Blockly.Blocks['intersect'] = {
    init: function() {
        this.appendValueInput('QUERY')
            .appendField('intersect')
        this.setColour(QUERY_HUE)
        this.setPreviousStatement(true)
        this.setNextStatement(true)
        this.setTooltip('Logs the given value to the console.')
        this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp')
    }
}

Blockly.Blocks['union'] = {
    init: function() {
        this.appendValueInput('QUERY')
            .appendField('union')
        this.setColour(QUERY_HUE)
        this.setPreviousStatement(true)
        this.setNextStatement(true)
        this.setTooltip('Logs the given value to the console.')
        this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp')
    }
}

Blockly.Blocks['difference'] = {
    init: function() {
        this.appendValueInput('QUERY')
            .appendField('difference')
        this.setColour(QUERY_HUE)
        this.setPreviousStatement(true)
        this.setNextStatement(true)
        this.setTooltip('Logs the given value to the console.')
        this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp')
    }
}

Blockly.Blocks['unique'] = {
    init: function() {
        this.appendDummyInput('RELATION')
            .appendField('Unique')
        this.setColour(QUERY_HUE)
        this.setPreviousStatement(true)
        this.setNextStatement(true)
        this.setTooltip('Logs the given value to the console.')
        this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp')
    }
}