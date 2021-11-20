const OBJECT_HUE = 290

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
        this.appendDummyInput("PROP")
            .appendField('.')
            .appendField(new Blockly.FieldTextInput(""), 'PROPERTY')
        this.setOutput(true)
        this.setInputsInline(true)
        this.setColour(OBJECT_HUE)
        this.setTooltip('Logs the given value to the console.')
        this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp')
    }
}

Blockly.Blocks['pattern_field'] = {
    init: function() {
        this.appendDummyInput('KEY')
            .appendField('set key')
            .appendField(new Blockly.FieldTextInput(""), 'KEY')
        this.appendValueInput('VALUE')
            .appendField('to ')
        this.setColour(OBJECT_HUE)
        this.setPreviousStatement(true)
        this.setInputsInline(true)
        this.setNextStatement(true)
        this.setTooltip('Logs the given value to the console.')
        this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp')
    }
}
