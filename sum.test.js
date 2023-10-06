// Import the functions you want to test
const {
  locomotives,
  wagons,
  addLocomotive,
  addWagon,
  getEmptyWeight,
  getMaxPassengers,
  getMaxGoodsWeight,
  getMaxTotalWeight,
  getTrainLength,
  isRoadworthy,
  getRequiredConductors,
} = require("./task");

beforeEach(() => {
  locomotives.length = 0; // Clearing
  wagons.length = 0; // Clearing
});

// Testing
test("Adding locomotive and wagon", () => {
  addLocomotive("Electric", "ACME", 2020, "12345", 5000, 20, 10000, 150, 10000);
  addWagon("Passenger", "WagonCo", 2019, "67890", 2000, 10, 50, 5000);

  // Checking
  expect(locomotives).toHaveLength(1);
  expect(wagons).toHaveLength(1);
});

// Testing
test("Calculating empty weight", () => {
  addLocomotive("Electric", "ACME", 2020, "12345", 5000, 20, 10000, 150, 10000);
  addWagon("Passenger", "WagonCo", 2019, "67890", 2000, 10, 50, 5000);

  expect(getEmptyWeight()).toBe(7000);
});
