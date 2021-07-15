{
  init: function(elevators, floors) {
    console.log('エレベーターの数 %d', elevators.length);
    console.log('フロアの数 %d', floors.length);

    let
      e = elevators[0], // Let's use the first elevator
      e2 = elevators[1],
      e3 = elevators[2],
      e4 = elevators[3];

    // Whenever the elevator is idle (has no more queued destinations) ...
    e.on("idle", function() {
      // let's go to all the floors (or did we forget one?)
      e.goToFloor(0);
      // e.goToFloor(1);
    });
    e2.on("idle", function(){
      e2.goToFloor(floors.length/elevators.length);
    });
    e3.on("idle", function(){
      e3.goToFloor(floors.length * 2/elevators.length);
    });
    e4.on("idle", function(){
      e4.goToFloor(floors.length * 3 /elevators.length);
    });

    e.on("floor_button_pressed", function(fn){
      e.goToFloor(fn);
    });
    floors.forEach(function(f){
      f.on("up_button_pressed down_button_pressed", function(){
        if(e.loadFactor() < 0.2){
          e.goToFloor(f.floorNum());
        }else if(e2.loadFactor() < 0.2){
          e2.goToFloor(f.floorNum());
        }else if(e3.loadFactor() < 0.2){
          e3.goToFloor(f.floorNum());
        }else if(e4.loadFactor() < 0.2){
          e4.goToFloor(f.floorNum());
        }
      })
    });

    e2.on("floor_button_pressed", function(fn){
      e2.goToFloor(fn);
    });

    e3.on("floor_button_pressed", function(fn){
      e3.goToFloor(fn);
    });

    e4.on("floor_button_pressed", function(fn){
      e4.goToFloor(fn);
    });

  },
  update: function(dt, elevators, floors) {
    // We normally don't need to do anything here
  }
}
