"use strict";
var validations;
(function (validations) {
    validations.validateText = (text) => {
        return (text.length > 3) ? true : false;
    };
    validations.validateDate = (myDate) => {
        return (isNaN(myDate.valueOf())) ? false : true;
    };
})(validations || (validations = {}));
console.log(validations.validateText('Raul'));
//# sourceMappingURL=myapp.js.map