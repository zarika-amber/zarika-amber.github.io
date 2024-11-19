export function getPentagramStarData(pentagramRingRadius, pentagramStrokeWidth) {
  const points = calculatePentagramPoints(pentagramRingRadius, pentagramStrokeWidth);
  const pathData = generatePentagramPath(points);
  return pathData;
}

export function calculatePentagramPoints(pentagramRingRadius, pentagramStrokeWidth) {
  const starRadius = pentagramRingRadius - (pentagramStrokeWidth * 1.1);
  if (starRadius <= 0) {
    throw new Error("Star radius must be greater than 0");
  }

  const points = [];
  for (let i = 0; i < 5; i++) {
    const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2;
    const x = starRadius * Math.cos(angle);
    const y = starRadius * Math.sin(angle);

    points.push([x, y]);
  }
  return points;
}

export function generatePentagramPath(points) {
  return [
    "M", points[0][0], points[0][1],
    "L", points[2][0], points[2][1],
    "L", points[4][0], points[4][1],
    "L", points[1][0], points[1][1],
    "L", points[3][0], points[3][1],
    "Z"
  ].join(" ");
}