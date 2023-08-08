//! Swap date start and end if you want to show the latest first

import { IdevToolsItem, dev_tools } from "@/common/data/dev_tools"

// Matching
import matching_main from '@/common/assets/img/projects/matching/main.webp'
import { getCustomExternalLink } from "@/common/utils/functions/helper"

// Queuee
import queuee_main from '@/common/assets/img/projects/queuee/queuee.webp'

// iWant
import iwant_main from '@/common/assets/img/projects/iwant/main.webp'
import iwant_detail1 from '@/common/assets/img/projects/iwant/detail1.webp'
import iwant_detail2 from '@/common/assets/img/projects/iwant/detail2.webp'
import iwant_detail3 from '@/common/assets/img/projects/iwant/detail3.webp'
import iwant_detail4 from '@/common/assets/img/projects/iwant/detail4.webp'
import iwant_detail5 from '@/common/assets/img/projects/iwant/detail5.webp'

// Internship QA
import scb_intern_qa_main from '@/common/assets/img/projects/intern/qa/main.webp'
import scb_intern_qa_team from '@/common/assets/img/projects/intern/qa/qa_team.webp'
import scb_intern_cert from '@/common/assets/img/certificates/scb/cert.webp'

// Hai Dashboard
import hai_cert from '@/common/assets/img/certificates/hai_dashboard/cert.webp'



export interface dataTimelineInterface {
  title: string
  subtitle: string
  description: JSX.Element|React.ReactNode|string
  date: {
    start: string
    end: string
    helper: string
  }
  link: string
  link_live_preview?: JSX.Element|React.ReactNode|string|undefined,
  tools_used: IdevToolsItem[],
  img_path?: string[],
}


export const dataTimeline: dataTimelineInterface[] = [
  {
    title: `Hai Dashbaord ( WebApp )`,
    subtitle: `( Frontend  |  Cooperate with healthcare accreditation institute )`,
    description: `Nationwide hospital quality report project in collaboration with state enterprises`,
    date: {
      start: `July, 2023`,
      end: `May, 2023`,
      helper: '3 months',
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
    img_path: [hai_cert],
  },
  {
    title: `iWant ( Mobile App, APK )`,
    subtitle: `( Frontend  |  Project in university subjects )`,
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
    img_path: [
      iwant_main, iwant_detail1, iwant_detail2,
      iwant_detail3, iwant_detail4, iwant_detail5,
    ],
  },
  {
    title: `ITuy ( WebApp )`,
    subtitle: `( Fullstack  |  Project to facilitate work in university )`,
    description: `Web app for the field of IT that I am currently studying. made to facilitate the collection of money or suggest different places, including various features in the future that are going to happen`,
    date: {
      start: `April, 2023`,
      end: `Feb, 2023`,
      helper: '3 months',
    },
    link: `https://github.com/csnpch/ITuy`,
    tools_used: [
      dev_tools.languages.nodejs,
      dev_tools.languages.typescript,
      dev_tools.languages.nextts,
      dev_tools.tools.redux,
      dev_tools.tools.tailwind_css,
      dev_tools.tools.mantine_ui,
      dev_tools.tools.antd,
      dev_tools.tools.postgreSQL
    ],
    img_path: [],
  },
  {
    title: `Queuee ( Realtime WebApp )`,
    subtitle: `( Fullstack  |  Cooperate with the department of lands )`,
    description: <>
      Realtime queue service on local network & local machine, Charitable project for government agencies, Department of Lands, Prachinburi Province, Thailand
      <span className={`hide-on-body`}>
        {getCustomExternalLink(`https://www.facebook.com/groups/thaidev/posts/1030605681072295`)}
      </span>
    </>,
    date: {
      start: `Jan, 2023`,
      end: ``,
      helper: '3 weeks',
    },
    link: `https://github.com/csnpch/queueee`,
    tools_used: [
      dev_tools.tools.vite,
      dev_tools.languages.javascript,
      dev_tools.languages.nodejs,
      dev_tools.languages.react,
      dev_tools.tools.redux,
      dev_tools.tools.socket_io,
      dev_tools.tools.tailwind_css,
      dev_tools.tools.antd,
    ],
    img_path: [queuee_main],
  },
  {
    title: `Siblings matching ( WebApp )`,
    subtitle: `( Fullstack  |  Project to facilitate work in university )`,
    description: <>
      Sibling matching program which is an activity of my university, Take a random approach
      <span className={`hide-on-body`}>
        {getCustomExternalLink(`https://www.facebook.com/csnp.ch/videos/843967539853364`)}
      </span>
    </>,
    date: {
      start: `Nov, 2022`,
      end: ``,
      helper: '1 weeks',
    },
    link: `https://github.com/csnpch/siblings_matching_activities`,
    tools_used: [
      dev_tools.tools.vite,
      dev_tools.languages.javascript,
      dev_tools.languages.nodejs,
      dev_tools.languages.vue,
      dev_tools.tools.tailwind_css,
    ],
    img_path: [matching_main],
  },
  {
    title: `QA Tester ( Automation )`,
    subtitle: `( Intership 2 months at Siam Commercial Bank )`,
    description: `Automation testing for bank's teller machine employee services, use Python, Selenium, Robot framework, Postman, etc...`,
    date: {
      start: `July, 2022`,
      end: `June, 2022`,
      helper: '2 months',
    },
    link: `https://github.com/csnpch/iWant`,
    tools_used: [
      dev_tools.languages.robot_framework,
      dev_tools.languages.python,
    ],
    img_path: [
      scb_intern_qa_team, 
      scb_intern_qa_main,
      scb_intern_cert
    ],
  },
] 