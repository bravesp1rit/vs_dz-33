void function (){
'use strict';

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() { // показывает текущую ступеньку
        console.log(this.step);
    }
  };
//   ladder.up();
//   ladder.up();
//   ladder.down();
//   ladder.showStep(); // 1
ladder.up().up().down().showStep(); // 1

}()