const powerByCoordinate = (x, y, serial) => {
  //
  // Calculate power per coordinate based on instructions in challenge
  //
  
  // Find the fuel cell's rack ID, which is its X coordinate plus 10.
  let rackId = x + 10;

  // Begin with a power level of the rack ID times the Y coordinate.
  let result = rackId * y;

  // Increase the power level by the value of the grid serial number.
  result += serial;

  // Set the power level to itself multiplied by the rack ID.
  result *= rackId;

  // Keep only the hundreds digit of the power level (so 12345 becomes 3; 
  // numbers with no hundreds digit become 0).
  result = Math.floor((result / 100) % 10);

  // Subtract 5 from the power level.
  result -=5;

  return result;
};

const maxPowerBySerialNumber = (serial, gridHorizSize, gridVertSize) => {
  let grid = [];
  let result = { x: 0, y: 0, power: 0, totalPower: 0 };

  for (x = gridHorizSize; x > 0 ; x--) {
    for (y = gridVertSize; y > 0 ; y--) {
      let power = powerByCoordinate(x, y, serial);
      grid.push({ x, y, power });
      if (x <= (gridHorizSize-2) && y <= (gridVertSize-2)) {
        let totalPower = 
          grid.reduce((total, item) => {
            return total += ((item.y <= y+2 && item.y >= y) ? item.power : 0)
          }, 0);
        if (totalPower > result.totalPower) {
          result = { x, y, power, totalPower };
        }
      }
    }
    if (x <= (gridHorizSize-2)) {
      grid.splice(0, gridVertSize);
    }
  }
  
  return result;
};

module.exports.powerByCoordinate = powerByCoordinate;
module.exports.maxPowerBySerialNumber = maxPowerBySerialNumber;