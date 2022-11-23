const scuberHqLoc = 42;

const distanceFromHqInBlocks = function (pickUpLoc) {
  return Math.abs(pickUpLoc - scuberHqLoc);
};

const distanceFromHqInFeet = function (pickUpLoc) {
  return Math.abs(pickUpLoc - scuberHqLoc) * 264;
};

const distanceTravelledInFeet = function (locA, locB) {
  return Math.abs(locA - locB) * 264;
};

const calculatesFarePrice = function (start, destination) {
  const distanceSqft = Math.abs(destination - start) * 264;
  let fare;

  if (distanceSqft <= 400) {
    fare = 0;
    return fare;
  } else if (distanceSqft > 400 && distanceSqft < 2000) {
    fare = (distanceSqft - 400) * (2 / 100);
    return fare;
  } else if (distanceSqft > 2000 && distanceSqft < +2500) {
    fare = 25;
    return fare;
  } else if (distanceSqft > 2500) {
    return "cannot travel that far";
  }
};
