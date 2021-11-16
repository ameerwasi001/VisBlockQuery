const QUERY_HUE = 190
const PATTERN_HUE = 1
const OBJECT_HUE = 290
const SIDES = [
    ['BOTH', 'BOTH'],
    ['INCOMING', 'INCOMING'],
    ['OUTGOING', 'OUTGOING']
]

// Object
Blockly.Blocks['obj'] = {
    init: function() {
        this.appendStatementInput('PAIRS')
            .appendField('values')
        this.setColour(OBJECT_HUE)
        this.setOutput("Pattern")
        this.setTooltip('Logs the given value to the console.')
        this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp')
    }
}

Blockly.Blocks['property'] = {
    init: function() {
        this.appendValueInput('OBJ')
        this.appendValueInput('PROPERTY')
            .appendField('.')
        this.setOutput(true)
        this.setInputsInline(true)
        this.setColour(OBJECT_HUE)
        this.setTooltip('Logs the given value to the console.')
        this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp')
    }
}

Blockly.Blocks['pattern_field'] = {
    init: function() {
        this.appendValueInput('KEY')
            .setCheck(['String', 'Number'])
            .appendField('set key ')
        this.appendValueInput('VALUE')
            .setCheck(['String', 'Number'])
            .appendField('to ')
        this.setColour(OBJECT_HUE)
        this.setPreviousStatement(true)
        this.setInputsInline(true)
        this.setNextStatement(true)
        this.setTooltip('Logs the given value to the console.')
        this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp')
    }
}

// Pattern
Blockly.Blocks['pattern_or'] = {
    init: function() {
        this.appendValueInput('A')
        this.appendValueInput('B')
            .appendField('or')
        this.setColour(PATTERN_HUE)
        this.setOutput("Pattern")
        this.setInputsInline(true)
        this.setTooltip('Logs the given value to the console.')
        this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp')
    }
}

Blockly.Blocks['pattern_str'] = {
    init: function() {
        this.appendValueInput('STR')
            .appendField('Str')
        this.setColour(PATTERN_HUE)
        this.setOutput("Pattern")
        this.setInputsInline(true)
        this.setTooltip('Logs the given value to the console.')
        this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp')
    }
}

Blockly.Blocks['pattern_regex'] = {
    init: function() {
        this.appendDummyInput("RegEx")
            .appendField('Matches')
            .appendField(new Blockly.FieldTextInput(""), 'REGEX')
        this.appendValueInput('COMPLETE')
            .appendField(', completely ')
        this.setColour(PATTERN_HUE)
        this.setOutput("Pattern")
        this.setInputsInline(true)
        this.setTooltip('Logs the given value to the console.')
        this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp')
    }
}

Blockly.Blocks['pattern_any'] = {
    init: function() {
        this.appendValueInput('VAL')
            .appendField('Any')
        this.setColour(PATTERN_HUE)
        this.setOutput("Pattern")
        this.setInputsInline(true)
        this.setTooltip('Logs the given value to the console.')
        this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp')
    }
}

Blockly.Blocks['pattern_arr'] = {
    init: function() {
        this.appendValueInput('PATTERN')
            .appendField('Array of')
        this.setColour(PATTERN_HUE)
        this.setOutput("Pattern")
        this.setInputsInline(true)
        this.setTooltip('Logs the given value to the console.')
        this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp')
    }
}

Blockly.Blocks['pattern_num'] = {
    init: function() {
        this.appendValueInput('NUM')
            .appendField('Num')
        this.setColour(PATTERN_HUE)
        this.setOutput("Pattern")
        this.setInputsInline(true)
        this.setTooltip('Logs the given value to the console.')
        this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp')
    }
}

Blockly.Blocks['pattern_block'] = {
    init: function() {
        this.appendValueInput('OBJ')
            .appendField('Pattern')
        this.setColour(PATTERN_HUE)
        this.setOutput("Pattern")
        this.setTooltip('Logs the given value to the console.')
        this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp')
    }
}

Blockly.Blocks["predicate_block"] = {
    init: function() {
        this.appendDummyInput()
            .appendField('Given ')
            .appendField(new Blockly.FieldVariable("VAR_NAME"), "FIELD_NAME")
        this.appendValueInput('COND')
            .appendField('condition ')
        this.setColour(PATTERN_HUE)
        this.setOutput("Function")
        this.setInputsInline(true)
        this.setTooltip('Logs the given value to the console.')
        this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp')
    }
}

Blockly.Blocks["no_name_predicate_block"] = {
    init: function() {
        this.appendValueInput('COND')
            .appendField('Given _ condition')
        this.setColour(PATTERN_HUE)
        this.setOutput("Function")
        this.setInputsInline(true)
        this.setTooltip('Logs the given value to the console.')
        this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp')
    }
}

Blockly.Blocks['variable_underscore_get'] = {
    init: function() {
        this.appendDummyInput('NUM')
            .appendField('_')
        this.setColour(330)
        this.setOutput("Pattern")
        this.setInputsInline(true)
        this.setTooltip('Logs the given value to the console.')
        this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp')
    }
}

// Query language blocks

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