import { JSDOM } from 'jsdom';
import {
  windowInit,
  svgInit
} from '../src/scripts.js';

// Mock the global window object
const { window } = new JSDOM('<!doctype html><html><body></body></html>');
global.window = window;
global.document = window.document;

// Mock the implementations
jest.mock('../src/scripts.js', () => ({
  ...jest.requireActual('../src/scripts.js'),
  svgAppendComingSoon: jest.fn(),
  createMenu: jest.fn(),
  createKofiWidget: jest.fn()
}));

describe('windowInit', () => {
  it('should return the window dimensions', () => {
    const dimensions = windowInit();
    expect(dimensions).toHaveProperty('width');
    expect(dimensions).toHaveProperty('height');
  });
});

describe('svgInit', () => {
  it('should create an SVG element with the correct dimensions', () => {
    const windowDimensions = { width: 800, height: 600 };
    const svg = svgInit(windowDimensions);
    expect(svg.attr('width')).toBe('800');
    expect(svg.attr('height')).toBe('600');
  });
});
