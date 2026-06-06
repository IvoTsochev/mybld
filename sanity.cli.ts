import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'ot86yj05',
    dataset: 'production'
  },
  typegen: {
    enabled: true,
    path: "./src/**/*.{ts,tsx,js,jsx}",
    schema: "schema.json",
    generates: "./src/sanity.types.ts",
    overloadClientMethods: true,
  },
})
