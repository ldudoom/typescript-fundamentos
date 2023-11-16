"use strict";
(() => {
    class Avenger {
        static getAvgAge() {
            return Avenger.avgAge;
        }
        constructor(name, team, avgAge, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
            Avenger.avgAge = avgAge;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('Antman', 'Team Capi', 35, 'Scott Lang');
    console.log(antman);
    console.log(Avenger.avgAge);
    console.log(antman.bio());
})();
//# sourceMappingURL=myapp.js.map