import { dev_tools, IdevToolsItem } from "@/data/dev_tools";

export interface itemSkillInterface {
  label: string
  basic: IdevToolsItem[]
  intermediate: IdevToolsItem[]
  expert: IdevToolsItem[]
}

export interface objectSkillsInterface {
  languages: itemSkillInterface
  frameworks: itemSkillInterface
  tools: itemSkillInterface
}


export const mySkills: objectSkillsInterface = {
  languages: {
    label: 'Languages',
    basic: [
    ],
    intermediate: [
      dev_tools.languages.kotlin,
      dev_tools.languages.javascript,
      dev_tools.languages.typescript,
      // mockup,
      dev_tools.languages.kotlin,
      dev_tools.languages.javascript,
      dev_tools.languages.typescript,
      dev_tools.languages.kotlin,
      dev_tools.languages.javascript,
      dev_tools.languages.typescript,
      dev_tools.languages.kotlin,
      dev_tools.languages.javascript,
      dev_tools.languages.typescript,
      dev_tools.languages.kotlin,
      dev_tools.languages.javascript,
      dev_tools.languages.typescript,
    ],
    expert: [
      dev_tools.languages.python,
      dev_tools.languages.cpp,
      dev_tools.languages.php,
    ],
  },
  frameworks: {
    label: 'Frameworks',
    basic: [
    ],
    intermediate: [
      dev_tools.languages.vue,
      dev_tools.languages.nodejs,
    ],
    expert: [
      dev_tools.languages.react,
      dev_tools.languages.nextjs,      
    ],
  },
  tools: {
    label: 'Tools',
    basic: [
    ],
    intermediate: [
      dev_tools.tools.socket_io,
    ],
    expert: [
      dev_tools.tools.android_studio,
    ],       
  }
}