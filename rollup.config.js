import { terser } from 'rollup-plugin-terser';
// plugin-node-resolve and plugin-commonjs are required for a rollup bundled project
// to resolve dependencies from node_modules. See the documentation for these plugins
// for more details.
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import replace from '@rollup/plugin-replace';
import eslint from '@rollup/plugin-eslint';
import alias from '@rollup/plugin-alias';
import inject from "@rollup/plugin-inject";

export default {
  input: 'src/index.ts',
  output: {
    exports: 'named',
    format: 'esm',
    file: 'dist/index.mjs',
    sourcemap: true,
  },
  plugins: [
    alias({
      entries: [
        { find: 'fs', replacement: 'browserfs/dist/shims/fs' },
        { find: 'buffer', replacement: 'browserfs/dist/shims/buffer' },
        { find: 'path', replacement: 'browserfs/dist/shims/path' }
      ]
    }),
    nodeResolve({
      browser: true,
      preferBuiltins: false
    }),
    commonjs(),
    typescript(),
    inject({
      "BrowserFS": "browserfs"
    }),
    eslint(),
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      __buildDate__: () => JSON.stringify(new Date()),
      __buildVersion__: 15,
    }),
    terser(),
  ],
};
