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
