import { makeObject } from "./components/global_ulitlity_types/utilityTypes";

let aa = makeObject({
    data: {x: 0, y: 0},
    methods: {
        moveBy(dx: number, dy: number) {
            this.x += dx; // Strongly typed this
            this.y += dy; 
        }
    }
});

aa.x = 10;
aa.y = 20;
aa.moveBy(5, 5);