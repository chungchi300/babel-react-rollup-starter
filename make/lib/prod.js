// Rollup plugins.
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';

// Import the development configuration.
import config from '../app/dev';

// Inject the production settings.
config.dest = 'build/lib/index.min.js';
// config.external = ['react', 'react-dom'];
// config.plugins[3] = replace({
//   'process.env.NODE_ENV': JSON.stringify('production')
// });
// config.plugins.push(uglify());

export default config;
