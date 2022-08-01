import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-import-css'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

export default [
  {
    input: './index.js',
    output: [
      {
        format: 'esm',
        file: 'dist/vue3-carousel.mjs'
      },
      {
        format: 'cjs',
        file: 'dist/vue3-carousel.js'
      }
    ],
    plugins: [
      vue(), css(), peerDepsExternal()
    ]
  }
]