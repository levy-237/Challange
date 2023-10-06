const locomotives = [];
const wagons = [];

// Add locomotive to the train
function addLocomotive(
  type,
  manufacturer,
  year,
  serialNumber,
  emptyWeight,
  length,
  tractiveEffort,
  maxPassengers,
  maxGoodsWeight
) {
  locomotives.push({
    type,
    manufacturer,
    year,
    serialNumber,
    emptyWeight,
    length,
    tractiveEffort,
    maxPassengers,
    maxGoodsWeight,
  });
}

// Add wagon to the train
function addWagon(
  type,
  manufacturer,
  year,
  serialNumber,
  emptyWeight,
  length,
  maxPassengers,
  maxGoodsWeight
) {
  wagons.push({
    type,
    manufacturer,
    year,
    serialNumber,
    emptyWeight,
    length,
    maxPassengers,
    maxGoodsWeight,
  });
}

function getEmptyWeight() {
  return (
    locomotives.reduce((total, loco) => total + loco.emptyWeight, 0) +
    wagons.reduce((total, wagon) => total + wagon.emptyWeight, 0)
  );
}

function getMaxPassengers() {
  return (
    locomotives.reduce((total, loco) => total + loco.maxPassengers, 0) +
    wagons.reduce((total, wagon) => total + wagon.maxPassengers, 0)
  );
}

function getMaxGoodsWeight() {
  return (
    locomotives.reduce((total, loco) => total + loco.maxGoodsWeight, 0) +
    wagons.reduce((total, wagon) => total + wagon.maxGoodsWeight, 0)
  );
}

function getMaxTotalWeight() {
  return getEmptyWeight() + getMaxPassengers() * 75 + getMaxGoodsWeight();
}

function getTrainLength() {
  return (
    locomotives.reduce((total, loco) => total + loco.length, 0) +
    wagons.reduce((total, wagon) => total + wagon.length, 0)
  );
}

function isRoadworthy() {
  const totalTractiveEffort = locomotives.reduce(
    (total, loco) => total + loco.tractiveEffort,
    0
  );
  return totalTractiveEffort >= getMaxTotalWeight();
}

function getRequiredConductors() {
  const maxPassengers = getMaxPassengers();
  return maxPassengers > 0 ? Math.ceil(maxPassengers / 50) : 0;
}

/// example:
addLocomotive("Diesel", "GMC", 2022, "12345", 2500, 20, 1000, 150, 13000);
addWagon("Passenger", "HIT", 2019, "67890", 2000, 10, 50, 6000);

console.log("Is roadworthy:", isRoadworthy());
console.log("Required conductors:", getRequiredConductors());

module.exports = {
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
};
