"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('Antman', 'Team Capi');
    console.log(antman);
    console.log(Avenger.avgAge);
})();
//# sourceMappingURL=myapp.js.map