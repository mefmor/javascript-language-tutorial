var assert = require('assert');
var chai = require('chai');

describe('Statements', function() {

    it('when trying to set a constant a new value, an exception will be thrown', function() {
        const constVar = 5;
        
        try {
            constVar = 666;
            throw new Error('The test should have failed before this line of code');
        } catch(e) {
            assert.equal('Assignment to constant variable.', e.message);
        }
    });
    
    
    it('a let variable visible only inside a block', function() {
        {
            let letVar = 14;
        }
        
        try {
            letVar;
            throw new Error('The test should have failed before this line of code');
        } catch(e) {
            assert.equal('letVar is not defined', e.message);
        }
    });

});

