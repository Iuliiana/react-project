const fs = require('fs');
const path = require('path');

const cachePath = path.resolve(__dirname, '..', 'node_modules', '.cache');
fs.rm(cachePath, { recursive: true }, () => console.log('deleted node_modules/.cache'));
