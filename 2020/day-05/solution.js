const format = (input) => input.trim().split('\n');

// Returns an array of seats given passes
const getSeats = (passes) => {
  // Generate the plane's rows and column
  const rows = [...Array(128).keys()];
  const columns = [...Array(8).keys()];

  const seats = passes.map(pass => {    
    // Get seat row
    const rowInput = pass.slice(0, 7).split('');
    let myRow = rows;
    rowInput.forEach(input => {
      if (input === 'F') {
        myRow = myRow.slice(0, myRow.length / 2);
      } else if (input === 'B') {
        myRow = myRow.slice(myRow.length / 2);
      }
    });
    
    // Get seat column
    const columnInput = pass.slice(7).split('');
    let myColumn = columns;
    columnInput.forEach(input => {
      if (input === 'L') {
        myColumn = myColumn.slice(0, myColumn.length / 2);
      } else if (input === 'R') {
        myColumn = myColumn.slice(myColumn.length / 2);
      }
    });

    const seat = {
      row: Number(myRow[0]),
      column: Number(myColumn[0]),
      seatId: Number(myRow) * 8 + Number(myColumn)
    };

    return seat;
  });

  return seats;
};

const partOne = (input) => {
  const passes = format(input);

  const seats = getSeats(passes);
  const seatIds = seats.map(seat => seat.seatId);

  return Math.max(...Object.values(seatIds));
};

const partTwo = (input) => {
  const passes = format(input);
  const seats = getSeats(passes);

  const sortSeats = (a, b) => {
    if (a['seatId'] > b['seatId']) return 1;
    if (a['seatId'] < b['seatId']) return -1;
    return 0;
  };

  const findMissingSeat = (ids) => {
    const start = ids[0];
    const end = ids[ids.length - 1];

    for (let i = start; i < end; i++) {
      if (!ids.includes(i)) return i;
    }
  };

  seats.sort(sortSeats);
  seatIds = seats.map(seat => seat.seatId);
  const missingSeat = findMissingSeat(seatIds);

  return `Missing seat ID is ${missingSeat}`;
};

module.exports = {
  partOne,
  partTwo
};