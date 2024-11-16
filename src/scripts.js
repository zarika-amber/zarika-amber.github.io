import * as d3 from 'd3';
import './styles.css';

const comingSoon = true;
const radius = 125;
const paddingTop = 50;
const message = "Coming Soon...";

function windowInit() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

function svgInit(windowDimensions) {
  return d3.select("body") // Select the body of the page
    .append("svg") // Append an SVG element to the body
    .attr("width", windowDimensions.width)  // Set width of the SVG to the width of the window
    .attr("height", windowDimensions.height)  // Set height of the SVG to the height of the window
    .style("position", "absolute") // Absolute positioning for floating effect
    .style("top", `${paddingTop}px`) // Fixed vertical position from the top
    .style("left", "50%")  // Horizontally center the SVG
    .style("transform", "translateX(-50%)"); // Adjust for perfect horizontal centering
}
function svgAppendCircle(windowDimensions, svg) {
  svg.append("circle")
    .attr("cx", windowDimensions.width / 2) // Center of the circle on the x-axis (relative to the SVG container)
    .attr("cy", radius) // Position the circle's center vertically with respect to the SVG container
    .attr("r", radius) // Radius of the circle
    .attr("fill", "red"); // Fill color for the circle
}

function svgAppendMessage(windowDimensions, svg) {
  svg.append("text")
    .attr("class", "coming-soon-text") // Add a class for styling
    .attr("x", windowDimensions.width / 2) // Horizontal center of the text
    .attr("y", radius) // Vertical center of the text (same as circle's vertical position)
    .attr("text-anchor", "middle") // Center the text horizontally
    .attr("dominant-baseline", "middle") // Center the text vertically
    .text(message);
}

function createKofiWidget() {
  kofiWidgetOverlay.draw('zarikaamber', {
    'type': 'floating-chat',
    'floating-chat.donateButton.text': 'Support me',
    'floating-chat.donateButton.background-color': '#794bc4',
    'floating-chat.donateButton.text-color': '#fff'
  });
}

function placeholder() {
  console.log('placeholder');
}

function controlFlow() {
  if (comingSoon) {
    const windowDimensions = windowInit();
    const svg = svgInit(windowDimensions);
    svgAppendCircle(windowDimensions, svg);
    svgAppendMessage(windowDimensions, svg);
  } else {
    placeholder();
  }
  createKofiWidget();
}

controlFlow();