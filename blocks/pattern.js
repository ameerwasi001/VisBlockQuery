const PATTERN_HUE = 1

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
