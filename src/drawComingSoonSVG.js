import { getPentagramStarData } from './calculateGeometry.js';

const PADDING_TOP = 50;
const PENTAGRAM_BACKGROUND_COLOR = "red";
const PENTAGRAM_BACKGROUND_RADIUS = 125;
const PENTAGRAM_RING_RADIUS = 100;
const PENTAGRAM_STROKE_WIDTH = 10;
const PENTAGRAM_STROKE_COLOR = "black";
const PENTAGRAM_FILL_COLOR = "none";
const MESSAGE = "Coming Soon...";

export function svgAppendComingSoon(windowDimensions, svg) {
  const pentagramData = getPentagramStarData(PENTAGRAM_RING_RADIUS, PENTAGRAM_STROKE_WIDTH);
  svgAppendBackground(windowDimensions, svg);
  svgAppendRing(windowDimensions, svg);
  svgAppendStar(windowDimensions, svg, pentagramData);
  svgAppendMessage(windowDimensions, svg);
}

export function svgAppendBackground(windowDimensions, svg) {
  svg.append("circle")
    .attr("cx", windowDimensions.width / 2)
    .attr("cy", PENTAGRAM_BACKGROUND_RADIUS + PADDING_TOP)
    .attr("r", PENTAGRAM_BACKGROUND_RADIUS)
    .attr("fill", PENTAGRAM_BACKGROUND_COLOR);
}

export function svgAppendRing(windowDimensions, svg) {
  svg.append("circle")
    .attr("cx", windowDimensions.width / 2)
    .attr("cy", PENTAGRAM_BACKGROUND_RADIUS + PADDING_TOP)
    .attr("r", PENTAGRAM_RING_RADIUS)
    .attr("stroke", PENTAGRAM_STROKE_COLOR)
    .attr("stroke-width", PENTAGRAM_STROKE_WIDTH)
    .attr("fill", PENTAGRAM_FILL_COLOR);
}

export function svgAppendStar(windowDimensions, svg, pathData) {
  svg.append("path")
    .attr("transform", `translate(${windowDimensions.width / 2}, ${PENTAGRAM_BACKGROUND_RADIUS + PADDING_TOP})`)
    .attr("d", pathData)
    .attr("stroke", PENTAGRAM_STROKE_COLOR)
    .attr("stroke-width", PENTAGRAM_STROKE_WIDTH)
    .attr("fill", PENTAGRAM_FILL_COLOR);
}

export function svgAppendMessage(windowDimensions, svg) {
  svg.append("text")
    .attr("class", "coming-soon-text")
    .attr("x", windowDimensions.width / 2)
    .attr("y", (PENTAGRAM_BACKGROUND_RADIUS + PADDING_TOP) * 2)
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "middle")
    .text(MESSAGE);
}