// Import D3.js module (since it's installed via npm)
import * as d3 from 'd3';
import './styles.css'; // Import CSS file

// Define the width and height of the window (viewport) at the top of the script
const width = window.innerWidth;
const height = window.innerHeight;

// Define the circle's radius
const radius = 125;

// Define the padding from the top
const paddingTop = 50;

// Create an SVG element and append it to the body
const svg = d3.select("body") // Select the body of the page
  .append("svg") // Append an SVG element to the body
  .attr("width", width)  // Set width of the SVG to the width of the window
  .attr("height", height)  // Set height of the SVG to the height of the window
  .style("position", "absolute") // Absolute positioning for floating effect
  .style("top", `${paddingTop}px`) // Fixed vertical position from the top
  .style("left", "50%")  // Horizontally center the SVG
  .style("transform", "translateX(-50%)"); // Adjust for perfect horizontal centering

// Append a circle to the SVG, positioning it at the center of the SVG container
svg.append("circle")
  .attr("cx", width / 2) // Center of the circle on the x-axis (relative to the SVG container)
  .attr("cy", radius) // Position the circle's center vertically with respect to the SVG container
  .attr("r", radius) // Radius of the circle
  .attr("fill", "red"); // Fill color for the circle

// Append text inside the circle, centering it
svg.append("text")
  .attr("class", "coming-soon-text") // Add a class for styling
  .attr("x", width / 2) // Horizontal center of the text
  .attr("y", radius) // Vertical center of the text (same as circle's vertical position)
  .attr("text-anchor", "middle") // Center the text horizontally
  .attr("dominant-baseline", "middle") // Center the text vertically
  .text("Coming Soon..."); // Text content

// ko-fi widget
kofiWidgetOverlay.draw('zarikaamber', {
  'type': 'floating-chat',
  'floating-chat.donateButton.text': 'Support me',
  'floating-chat.donateButton.background-color': '#794bc4',
  'floating-chat.donateButton.text-color': '#fff'
});