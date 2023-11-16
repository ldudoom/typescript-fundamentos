"use strict";
(() => {
    class Avenger {
        constructor(name, team, avgAge, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
            Avenger.avgAge = avgAge;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('Antman', 'Team Capi', 35, 'Scott Lang');
    console.log(antman);
    console.log(Avenger.avgAge);
})();
//# sourceMappingURL=myapp.js.map