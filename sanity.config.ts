import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import { schemas } from './sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'Sanity Next.js Site',

  projectId: 'yno2oiby',
  dataset: 'production',

  basePath: "/studio",

  plugins: [deskTool()],

  schema: {
    types: schemas,
  },
})
