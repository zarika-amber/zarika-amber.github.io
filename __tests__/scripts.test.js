import { JSDOM } from 'jsdom';
import {
  controlFlow,
  initialize,
  windowInit,
  svgInit,
  svgAppendComingSoon,
  svgAppendCircle,
  svgAppendMessage,
  createMenu,
  createKofiWidget
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

describe('svgAppendCircle', () => {
  it('should append a circle to the SVG element', () => {
    const windowDimensions = { width: 800, height: 600 };
    const svg = svgInit(windowDimensions);
    svgAppendCircle(windowDimensions, svg);
    const circle = svg.select('circle');
    expect(circle.size()).toBe(1);
    expect(circle.attr('cx')).toBe('400');
    expect(circle.attr('cy')).toBe('125');
    expect(circle.attr('r')).toBe('125');
    expect(circle.attr('fill')).toBe('red');
  });
});

describe('svgAppendMessage', () => {
  it('should append a text message to the SVG element', () => {
    const windowDimensions = { width: 800, height: 600 };
    const svg = svgInit(windowDimensions);
    svgAppendMessage(windowDimensions, svg);
    const text = svg.select('text');
    expect(text.size()).toBe(1);
    expect(text.attr('x')).toBe('400');
    expect(text.attr('y')).toBe('125');
    expect(text.text()).toBe('Coming Soon...');
  });
});

describe('createKofiWidget', () => {
  it('should call kofiWidgetOverlay.draw with the correct parameters', () => {
    createKofiWidget();
    expect(global.kofiWidgetOverlay.draw).toHaveBeenCalledWith('zarikaamber', {
      'type': 'floating-chat',
      'floating-chat.donateButton.text': 'Support me',
      'floating-chat.donateButton.background-color': '#794bc4',
      'floating-chat.donateButton.text-color': '#fff'
    });
  });
});
