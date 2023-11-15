"use strict";
(() => {
    const fullName = (firstname, ...restArgs) => {
        return `${firstname} ${restArgs.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent', 'Ojeda');
    console.log({ superman });
})();
//# sourceMappingURL=args-rest.js.map