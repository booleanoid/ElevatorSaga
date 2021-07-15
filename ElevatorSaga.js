{
  init: function(elevators, floors) {
    let e = elevators[0]; // Let's use the first elevator

    // Whenever the elevator is idle (has no more queued destinations) ...
    e.on("idle", function() {
      // let's go to all the floors (or did we forget one?)
      e.goToFloor(0);
      // e.goToFloor(1);
    });
    e.on("floor_button_pressed", function(fn){
      e.goToFloor(fn);
    });
    floors.forEach(function(f){
      f.on("up_button_pressed down_button_pressed", function(){
        e.goToFloor(f.floorNum())
      })
    });

  },
  update: function(dt, elevators, floors) {
    // We normally don't need to do anything here
  }
}
