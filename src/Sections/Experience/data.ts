import { IdevToolsItem, dev_tools } from "@/common/data/dev_tools"

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
  link_live_preview?: string|undefined,
  tools_used: IdevToolsItem[],
  img_path?: string[],
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
    link: `https://github.com/csnpch/HaiDashboard`,
    tools_used: [
      dev_tools.languages.typescript,
      dev_tools.languages.react,
      dev_tools.tools.redux,
      dev_tools.tools.tailwind_css,
      dev_tools.tools.antd,
      dev_tools.tools.mantine_ui,
    ],
    // link_live_preview: `https://dashboard.hai.moph.go.th/`,
    img_path: [
      `https://images.unsplash.com/photo-1560472354-0088b5dc9d8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1130&q=80`,
      `https://images.unsplash.com/photo-1560472354-0088b5dc9d8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1130&q=80`
    ],
  },
  {
    title: `iWant ( Mobile App, APK )`,
    subtitle: `( Frontend  |  project in university subjects )`,
    description: `An application for anyone who wants something But don't want to go out and buy it yourself. Or don't have a vehicle to go out to buy, this app look like delivery food`,
    date: {
      start: `April, 2023`,
      end: ``,
      helper: '3 weeks',
    },
    link: `https://github.com/csnpch/iWant`,
    tools_used: [
      dev_tools.tools.android_studio,
      dev_tools.languages.kotlin,
    ],
    img_path: [],
  },
  {
    title: `ITuy ( WebApp )`,
    subtitle: `( Fullstack  |  project to facilitate work in university )`,
    description: `Web app for the field of IT that I am currently studying. made to facilitate the collection of money or suggest different places, including various features in the future that are going to happen`,
    date: {
      start: `April, 2023`,
      end: `Feb, 2023`,
      helper: '3 months',
    },
    link: `https://github.com/csnpch/ITuy`,
    tools_used: [
      dev_tools.languages.php,
      dev_tools.tools.tailwind_css,
      dev_tools.tools.mysql
    ],
    img_path: [],
  },
  {
    title: `Queuee ( Realtime WebApp )`,
    subtitle: `( Fullstack  |  cooperate with the department of lands )`,
    description: `Realtime queue service on local network & local machine, Charitable project for government agencies, Department of Lands, Prachinburi Province, Thailand`,
    date: {
      start: `Jan, 2023`,
      end: ``,
      helper: '3 weeks',
    },
    link: `https://github.com/csnpch/queueee`,
    tools_used: [
      dev_tools.languages.javascript,
      dev_tools.languages.nodejs,
      dev_tools.languages.react,
      dev_tools.tools.redux,
      dev_tools.tools.socket_io,
      dev_tools.tools.tailwind_css,
      dev_tools.tools.antd,
    ],
    img_path: [],
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
    link: `https://github.com/csnpch/siblings_matching_activities`,
    tools_used: [
      dev_tools.languages.javascript,
      dev_tools.languages.nodejs,
      dev_tools.languages.vue,
      dev_tools.tools.tailwind_css,
    ],
    img_path: [],
  },
  {
    title: `QA Tester ( Automation )`,
    subtitle: `( Intership 2 months at Siam Commercial Bank )`,
    description: `Automation testing for bank's teller machine employee services, use Python, Selenium, Robot framework, Postman, etc...`,
    date: {
      start: `April, 2023`,
      end: ``,
      helper: '3 weeks',
    },
    link: `https://github.com/csnpch/iWant`,
    tools_used: [
      dev_tools.tools.android_studio,
      dev_tools.languages.kotlin,
    ],
    img_path: [],
  },
] 