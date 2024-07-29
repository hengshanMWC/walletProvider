import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  clean: true,
  failOnWarn: false,
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
    dts: {
      respectExternal: false,
    },
  },
})
