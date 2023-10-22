import { type SchemaTypeDefinition } from 'sanity'

import skill from './schemas/skill'
import pageInfo from './schemas/pageInfo'
import project from './schemas/project'
import experience from './schemas/experience'
import social from './schemas/social'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo, social, project, experience, skill],
}
