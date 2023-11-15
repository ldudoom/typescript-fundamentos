"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        return upper ? `${firstName} ${lastName || 'No lastname'}`.toUpperCase() : `${firstName} ${lastName || 'No lastname'}`;
    };
    const name = fullName('Tony', 'Stark', true);
    console.log({ name });
})();
//# sourceMappingURL=args-default.js.map