Blockly.Blocks['text_log'] = {
    init: function() {
        this.appendValueInput('VALUE')
            .setCheck(['String', 'Number'])
            .appendField('logs')
        this.setColour(160)
        this.setPreviousStatement(true)
        this.setNextStatement(true)
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
        this.setColour(160)
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
        this.setColour(160)
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
        this.setColour(160)
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
        this.setColour(160)
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
        this.setColour(160)
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
        this.setColour(160)
        this.setOutput("Pattern")
        this.setInputsInline(true)
        this.setTooltip('Logs the given value to the console.')
        this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp')
    }
}

Blockly.Blocks['pattern_block'] = {
    init: function() {
        this.appendStatementInput('PAIRS')
            .appendField('values')
        this.setColour(160)
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
        this.setColour(160)
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
        this.setColour(160)
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
