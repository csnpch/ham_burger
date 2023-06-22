import { dev_tools, IdevToolsItem } from "@/data/dev_tools";

interface itemOfMySkills {
  basic: IdevToolsItem[]
  intermediate: IdevToolsItem[]
  expert: IdevToolsItem[]
}

export interface mySkillsInterface {
  languages: itemOfMySkills
  frameworks: itemOfMySkills
  tools: itemOfMySkills
}


export const mySkills: mySkillsInterface = {
  languages: {
    basic: [
    ],
    intermediate: [
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