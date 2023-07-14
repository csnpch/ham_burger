import { IdevToolsItem, dev_tools } from "@/common/data/dev_tools"

export interface dataProjectMadeInterface {
  title: string
  subtitle: string
  description: string
  link: string
  tools_used: IdevToolsItem[]
  img_path: string[],
  can_hide?: boolean
}

export const dataProjectMade: dataProjectMadeInterface[] = [
  {
    title: `Dormitory System ( WebApp )`,
    subtitle: `( Fullstack  |  project in university subjects )`,
    description: `Charity project for student dormitory Increase convenience for students to use the booking website`,
    link: `https://github.com/csnpch/dormitory_system`,
    tools_used: [
      dev_tools.languages.php,
      dev_tools.tools.tailwind_css,
      dev_tools.tools.mysql
    ],
    img_path: [
      `https://images.unsplash.com/photo-1560472354-0088b5dc9d8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1130&q=80`
    ],
  },
  {
    title: `Auto-populate datas in google sheet`,
    subtitle: `( Fullstack  |  project to facilitate work in university )`,
    description: `This is my first portfolio, I made it with Vue.js and TailwindCSS`,
    link: `https://github.com/csnpch/auto_populate_datas_in_google_sheet`,
    tools_used: [
      dev_tools.languages.cpp,
    ],
    img_path: [
      `https://images.unsplash.com/photo-1560472354-0088b5dc9d8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1130&q=80`
    ],
  },
  {
    title: `Raffle Prize`,
    subtitle: `( Frontend  |  hobbies project, parties, New Year's Eve )`,
    description: `Random prize project from the input list fireworks are used and sound effects for entertainment while using`,
    link: `https://github.com/csnpch/raffle_prize`,
    tools_used: [
      dev_tools.languages.cpp,
    ],
    img_path: [
      `https://images.unsplash.com/photo-1560472354-0088b5dc9d8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1130&q=80`
    ],
  },
  {
    title: `Brain plz Calendar`,
    subtitle: `( Fullstack  |  project in university subjects )`,
    description: `Calendar for daily life, create events and generate invite links. to share activities as a group`,
    link: `https://github.com/csnpch/brain_plz_calendar`,
    tools_used: [
      dev_tools.languages.cpp,
    ],
    img_path: [
      `https://images.unsplash.com/photo-1560472354-0088b5dc9d8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1130&q=80`
    ],
  },
  {
    title: `Bababrown QRcode`,
    subtitle: `( Fullstack  |  project in university subjects )`,
    description: `Calendar for daily life, create events and generate invite links. to share activities as a group`,
    link: `https://github.com/csnpch/bababrown_qrcode`,
    tools_used: [
      dev_tools.languages.cpp,
    ],
    img_path: [
      `https://images.unsplash.com/photo-1560472354-0088b5dc9d8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1130&q=80`
    ],
  },
  {
    title: `Incopens`,
    subtitle: `( Fullstack  |  hobbies project, use in my family )`,
    description: `description`,
    link: `https://incopens4489.netlify.app/`,
    tools_used: [
      dev_tools.languages.cpp,
    ],
    img_path: [
      `https://images.unsplash.com/photo-1560472354-0088b5dc9d8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1130&q=80`,
    ],
    can_hide: true
  },
  {
    title: `Java File Manage ( CMD )`,
    subtitle: `( Project in university subjects )`,
    description: `CRUD data in small-file eg. -> (.txt, .md), Easy to use file by java class`,
    link: `https://github.com/csnpch/JavaFileManage`,
    tools_used: [
      dev_tools.languages.cpp,
    ],
    img_path: [
      `https://images.unsplash.com/photo-1560472354-0088b5dc9d8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1130&q=80`,
    ],
    can_hide: true,
  },
  {
    title: `Dormitory System ( CMD )`,
    subtitle: `( Project in university subjects )`,
    description: `Charity project for student dormitory Increase convenience for students to use the booking website`,
    link: `https://github.com/csnpch/dormitory_system_cmd`,
    tools_used: [
      dev_tools.languages.cpp,
    ],
    img_path: [
      `https://images.unsplash.com/photo-1560472354-0088b5dc9d8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1130&q=80`
    ],
  },
]