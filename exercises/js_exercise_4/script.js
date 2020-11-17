(function () {
  // Code goes in here
  //   let facingForward = true;
  //   let position = 0;

  //   function moveForward(numOfSpacesForward) {
  //     // increase position by distance
  //     if (facingForward) {
  //       position = position + numOfSpacesForward;
  //     } else {
  //       position = position - numOfSpacesForward;
  //     }
  //   }

  //   function moveBackward(numOfSpacesBackward) {
  //     // decrease position by distance
  //     if (facingForward) {
  //       position = position - numOfSpacesBackward;
  //     } else {
  //       position = position + numOfSpacesBackward;
  //     }
  //   }

  //   function turnAround() {
  //     // switch value of facingForward
  //     facingForward = !facingForward;
  //     console.log(`The person has turned around`);
  //   }

  //   function printLocation() {
  //     console.log(`The person is at position ${position}.`);
  //   }

  //   moveForward(5);
  //   moveBackward(3);
  //   printLocation();
  //   turnAround();
  //   moveForward(10);
  //   moveBackward(5);
  //   printLocation();

  let N = 0;
  let E = 0;
  let north = true;
  let forward = true;
  let direction = "North";

  if (north && forward) {
    direction = "North";
  } else if (north && !forward) {
    direction = "South";
  } else if (!north && forward) {
    direction = "East";
  } else if (!north && !forward) {
    direction = "West";
  }

  function moveForward1(spacesForward) {
    // increase position by distance
    if ((direction === "North")) {
      N = N + spacesForward;
    } else if (direction === "South") {
      N = N - spacesForward;
    } else if (direction === "East") {
      E = E + spacesForward;
    } else if (direction === "West") {
      E = E - spacesForward;
    }
  }

  function moveBackward1(spacesBackward) {
    if ((direction === "North")) {
        N = N - spacesBackward;
      } else if (direction === "South") {
        N = N + spacesBackward;
      } else if (direction === "East") {
        E = E - spacesBackward;
      } else if (direction === "West") {
        E = E + spacesBackward;
      }
  }

  function turnLeft() {
    if (direction === "North") {
        direction = "West";
      } else if (direction === "South") {
        direction = "East";
      } else if (direction === "East") {
        direction = "North";
      } else if (direction === "West") {
        direction = "South";
      }
  }

  function turnRight() {
    if (direction === "North") {
      direction = "East";
    } else if (direction === "South") {
      direction = "West";
    } else if (direction === "East") {
      direction = "South";
    } else if (direction === "West") {
      direction = "North";
    }
  }

  function printLocation1() {
    console.log(`${N}N, ${E}E`);
  }

  moveForward1(5);
  turnRight();
  moveForward1(2);
  printLocation1();
  turnLeft();
  turnLeft();
  moveForward1(7);
  turnRight();
  moveBackward1(3);
  printLocation1();
})();
