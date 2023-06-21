import { IdevToolsItem, dev_tools } from "@/data/dev_tools"

export interface dataProjectMadeInterface {
  title: string
  subtitle: string
  description: string
  link: string
  tools_used: IdevToolsItem[]
  img_path: string
}

export const dataProjectMade: dataProjectMadeInterface[] = [
  {
    title: `Dormitory System ( WebApp )`,
    subtitle: `( Fullstack  |  project in university subjects )`,
    description: `Charity project for student dormitory Increase convenience for students to use the booking website`,
    link: `#`,
    tools_used: [
      dev_tools.languages.php,
      dev_tools.tools.tailwind_css,
      dev_tools.tools.mysql
    ],
    img_path: `https://images.unsplash.com/photo-1560472354-0088b5dc9d8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1130&q=80`
  },
  {
    title: `Auto-populate datas in google sheet`,
    subtitle: ``,
    description: `This is my first portfolio, I made it with Vue.js and TailwindCSS`,
    link: ``,
    tools_used: [
      dev_tools.languages.cpp,
    ],
    img_path: `https://images.unsplash.com/photo-1560472354-0088b5dc9d8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1130&q=80`
  },
  {
    title: `Raffle Prize`,
    subtitle: ``,
    description: `description`,
    link: ``,
    tools_used: [
      dev_tools.languages.cpp,
    ],
    img_path: `https://images.unsplash.com/photo-1560472354-0088b5dc9d8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1130&q=80`
  },
  {
    title: `Brain plz Calendar`,
    subtitle: ``,
    description: `description`,
    link: ``,
    tools_used: [
      dev_tools.languages.cpp,
    ],
    img_path: `https://images.unsplash.com/photo-1560472354-0088b5dc9d8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1130&q=80`
  },
  {
    title: `Bababrown QRcode`,
    subtitle: ``,
    description: `description`,
    link: ``,
    tools_used: [
      dev_tools.languages.cpp,
    ],
    img_path: `https://images.unsplash.com/photo-1560472354-0088b5dc9d8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1130&q=80`
  },
  {
    title: `Java File Manage ( CMD )`,
    subtitle: ``,
    description: `description`,
    link: ``,
    tools_used: [
      dev_tools.languages.cpp,
    ],
    img_path: `https://images.unsplash.com/photo-1560472354-0088b5dc9d8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1130&q=80`
  },
  {
    title: `Dormitory System ( CMD )`,
    subtitle: ``,
    description: `description`,
    link: ``,
    tools_used: [
      dev_tools.languages.cpp,
    ],
    img_path: `https://images.unsplash.com/photo-1560472354-0088b5dc9d8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1130&q=80`
  },
]