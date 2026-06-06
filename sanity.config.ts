import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './src/schemaTypes'

// Using the project ID from the one I just created since you didn't provide yours.
// If you want to use "mybld-sanity", replace `projectId` here!
export default defineConfig({
  name: 'default',
  title: 'mybld',
  projectId: 'ot86yj05',
  dataset: 'production',
  basePath: '/sanity',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
})
