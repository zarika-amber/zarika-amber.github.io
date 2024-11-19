import * as d3 from 'd3';
import './styles.css';
import { createKofiWidget } from './kofiWidget.js';
import { svgAppendComingSoon } from './drawComingSoonSVG.js';

export function controlFlow() {
  const { windowDimensions, svg } = initialize();
  createKofiWidget();
  svgAppendComingSoon(windowDimensions, svg);
}

export function initialize() {
  const windowDimensions = windowInit();
  const svg = svgInit(windowDimensions);
  return { windowDimensions, svg };
}

export function windowInit() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

export function svgInit(windowDimensions) {
  return d3.select("body")
    .append("svg")
    .attr("width", windowDimensions.width)
    .attr("height", windowDimensions.height)
    .style("position", "absolute")
    .style("top", "0px")
    .style("left", "0px")
    .style("transform", "translateX(0%)");
}

controlFlow();