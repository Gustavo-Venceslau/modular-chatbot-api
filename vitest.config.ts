import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
		testTimeout: 25000,
		exclude: ["node_modules", "build"],
    setupFiles: './test/config/vitest.setup.ts',
		environmentMatchGlobs: [[ "src/**/*Controller.spec.ts", "prisma" ]],
		maxConcurrency: 5
  },
})