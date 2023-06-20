import { IdevToolsItem, dev_tools } from "@/data/dev_tools"

export interface dataTimelineInterface {
  title: string
  subtitle: string
  description: string
  date: {
    start: string
    end: string
    helper: string
  }
  link: string
  tools_used: IdevToolsItem[]
}


export const dataTimeline: dataTimelineInterface[] = [
  {
    title: `Hai Dashbaord ( WebApp )`,
    subtitle: `( Frontend | cooperate with the government )`,
    description: `The Project of Quality Data Project for Hospitals Nationwide Requested to cooperate with government agencies`,
    date: {
      start: `June, 2023`,
      end: `May, 2023`,
      helper: '2 months',
    },
    link: `#`,
    tools_used: [
      dev_tools.languages.typescript,
      dev_tools.languages.react,
      dev_tools.tools.redux,
      dev_tools.tools.tailwind_css,
      dev_tools.tools.antd,
      dev_tools.tools.mantine_ui,
    ],
  },
  {
    title: `iWant ( Mobile App, APK )`,
    subtitle: `( Frontend  |  project in university subjects )`,
    description: `An application for anyone who wants something But don't want to go out and buy it yourself. Or don't have a vehicle to go out to buy`,
    date: {
      start: `April, 2023`,
      end: ``,
      helper: '1 months',
    },
    link: `#`,
    tools_used: [
      dev_tools.tools.android_studio,
      dev_tools.languages.kotlin,
    ],
  },
  {
    title: `Queueee ( Realtime WebApp )`,
    subtitle: `( Fullstack  |  cooperate with the department of lands )`,
    description: `Realtime queue service on local network & local machine, Charitable project for government agencies, Department of Lands, Prachinburi Province, Thailand`,
    date: {
      start: `Jan, 2023`,
      end: ``,
      helper: '3 weeks',
    },
    link: `#`,
    tools_used: [
      dev_tools.languages.javascript,
      dev_tools.languages.nodejs,
      dev_tools.languages.react,
      dev_tools.tools.redux,
      dev_tools.tools.socket_io,
      dev_tools.tools.tailwind_css,
      dev_tools.tools.antd,
    ],
  },
  {
    title: `Siblings matching ( WebApp )`,
    subtitle: `( Fullstack  |  project to facilitate work in university )`,
    description: `Sibling matching program which is an activity of my university, Take a random approach`,
    date: {
      start: `Nov, 2022`,
      end: ``,
      helper: '1 weeks',
    },
    link: `#`,
    tools_used: [
      dev_tools.languages.javascript,
      dev_tools.languages.nodejs,
      dev_tools.languages.vue,
      dev_tools.tools.tailwind_css,
    ],
  },
  {
    title: `Dormitory System ( WebApp )`,
    subtitle: `( Fullstack  |  project in university subjects )`,
    description: `Charity project for student dormitory Increase convenience for students to use the booking website`,
    date: {
      start: `Jun, 2022`,
      end: `Apr, 2022`,
      helper: '3 months',
    },
    link: `#`,
    tools_used: [
      dev_tools.languages.php,
      dev_tools.tools.tailwind_css,
      dev_tools.tools.mysql
    ],
  },
] 