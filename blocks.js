const QUERY_HUE = 190
const PATTERN_HUE = 1

// Pattern
Blockly.Blocks['pattern_field'] = {
    init: function() {
        this.appendValueInput('KEY')
            .setCheck(['String', 'Number'])
            .appendField('set key ')
        this.appendValueInput('VALUE')
            .setCheck(['String', 'Number'])
            .appendField('to ')
        this.setColour(PATTERN_HUE)
        this.setPreviousStatement(true)
        this.setInputsInline(true)
        this.setNextStatement(true)
        this.setTooltip('Logs the given value to the console.')
        this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp')
    }
}

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

Blockly.Blocks['obj'] = {
    init: function() {
        this.appendStatementInput('PAIRS')
            .appendField('values')
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