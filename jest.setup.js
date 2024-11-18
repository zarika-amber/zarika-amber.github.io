const { TextEncoder, TextDecoder } = require('util');

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

global.kofiWidgetOverlay = {
  draw: jest.fn()
};
