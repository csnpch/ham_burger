import { dev_tools, IdevToolsItem } from "@/common/data/dev_tools";

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
      dev_tools.languages.dart,
      dev_tools.languages.flutter,
      dev_tools.languages.golang,
    ],
    intermediate: [
      dev_tools.languages.java,
      dev_tools.languages.kotlin,
      dev_tools.languages.javascript,
      dev_tools.languages.typescript,
    ],
    expert: [
      dev_tools.languages.python,
      dev_tools.languages.cpp,
      dev_tools.languages.php,
      dev_tools.languages.robot_framework,
      dev_tools.languages.css,
      dev_tools.languages.sass,
    ],
  },
  frameworks: {
    label: 'Frameworks',
    basic: [
    ],
    intermediate: [
      dev_tools.languages.vue,
      dev_tools.languages.nodejs,
      dev_tools.languages.svelte,
    ],
    expert: [
      dev_tools.languages.react,
      dev_tools.languages.nextts,      
    ],
  },
  tools: {
    label: 'Tools',
    basic: [
      dev_tools.tools.docker,
    ],
    intermediate: [
      dev_tools.tools.socket_io,
      dev_tools.tools.gitlab,
      dev_tools.tools.selenium,
      dev_tools.tools.mongodb,
      dev_tools.tools.postgreSQL,
    ],
    expert: [
      dev_tools.tools.android_studio,
      dev_tools.tools.tailwind_css,
      dev_tools.tools.antd,
      dev_tools.tools.mantine_ui,
      dev_tools.tools.mui,
    ],
  }
}