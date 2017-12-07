
goog.require('Blockly.Blocks');

/************************
 *  BLOCKLY DEFINITIONS  *
 *************************/

Blockly.Blocks['whenrunclicked'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("When RUN is clicked");
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['clearscreen'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Clear Canvas");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(175);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['catpose'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Change Cat Pose")
            .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"]]), "catIndex");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(175);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['slothpose'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Change Sloth Pose")
            .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"]]), "slothIndex");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['say'] = {
    init: function() {
        this.appendValueInput('SAY_TEXT')
            .appendField("Say");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['whenrunclicked'] = function(block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    var blockCode = statements_name;
    return blockCode;
};

Blockly.JavaScript['clearscreen'] = function(block) {
    var blockCode = 'clearCanvas();';
    return blockCode;
};

Blockly.JavaScript['catpose'] = function(block) {
    var dropdown_catindex = block.getFieldValue('catIndex');
    var blockCode = 'updateCatPose('+dropdown_catindex+');';
    return blockCode;
};

Blockly.JavaScript['slothpose'] = function(block) {
    var dropdown_slothindex = block.getFieldValue('slothIndex');
    var blockCode = 'updateSlothPose('+dropdown_slothindex+');';
    return blockCode;
};

Blockly.JavaScript['say'] = function(block) {
    //var say_text = block.getFieldValue('SAY_TEXT');
    var say_text = Blockly.JavaScript.valueToCode(block, 'SAY_TEXT', Blockly.JavaScript.ORDER_ATOMIC);
    var blockCode = 'say('+say_text+');';
    return blockCode; 
};
