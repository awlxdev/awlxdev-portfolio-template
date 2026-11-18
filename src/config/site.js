import awlxdev from '../data/profiles/awlxdev'
import blank from '../data/profiles/blank'
import { projectPresets } from '../data/projects'
import { skillPresets } from '../data/skills'
import { experiencePresets } from '../data/experience'

const profiles = {
  awlxdev,
  blank,
}

const requestedProfile = import.meta.env.VITE_PORTFOLIO_PROFILE || 'awlxdev'

export const activeProfile =
  profiles[requestedProfile] ? requestedProfile : 'awlxdev'

export const siteConfig = {
  ...profiles[activeProfile],
  projects: projectPresets[activeProfile],
  skills: skillPresets[activeProfile],
  experience: experiencePresets[activeProfile],
}
