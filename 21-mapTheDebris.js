function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  return arr.map(a => ({"name": a.name, "orbitalPeriod": op(GM, earthRadius, a.avgAlt)}));
};

function op(GM, earthRadius, avgAlt) {
  let a = earthRadius + avgAlt;
  return Math.round(2 * Math.PI * 
  Math.sqrt(a ** 3 / GM));
};

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
// ---------------------------------*--------------------------------------------*--------------------------------------------------------------
