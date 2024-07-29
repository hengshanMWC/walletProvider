import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  clean: true,
  failOnWarn: false,
  declaration: true,
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
    dts: {
      respectExternal: true,
    },
    esbuild: {
      minify: true,
    },
  },
})
