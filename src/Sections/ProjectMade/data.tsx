import { IdevToolsItem, dev_tools } from "@/common/data/dev_tools"

// Dormitory System ( WebApp )
import dorm_home from '@/common/assets/img/projects/dormitory/home.webp'
import dorm_home2 from '@/common/assets/img/projects/dormitory/home_2.webp'
import dorm_example_room from '@/common/assets/img/projects/dormitory/example_room.webp'
import dorm_plan_dorm from '@/common/assets/img/projects/dormitory/plan_dorm.webp'
import dorm_fee from '@/common/assets/img/projects/dormitory/fee.webp'
import dorm_auth from '@/common/assets/img/projects/dormitory/auth.webp'
import dorm_auth_admin from '@/common/assets/img/projects/dormitory/auth_admin.webp'
import dorm_register from '@/common/assets/img/projects/dormitory/register.webp'
// Dormitory System ( WebApp ) - Admin
import dorm_admin_dashboard from '@/common/assets/img/projects/dormitory/admin/dashboard.webp'
import dorm_admin_branch_manage from '@/common/assets/img/projects/dormitory/admin/branch_manage.webp'
import dorm_admin_building from '@/common/assets/img/projects/dormitory/admin/building.webp'
import dorm_admin_controls from '@/common/assets/img/projects/dormitory/admin/controls.webp'
import dorm_admin_controls_2 from '@/common/assets/img/projects/dormitory/admin/controls_2.webp'
import dorm_admin_fix_report from '@/common/assets/img/projects/dormitory/admin/fix_report.webp'
import dorm_admin_kick_std_booking from '@/common/assets/img/projects/dormitory/admin/kick_std_booking.webp'
import dorm_admin_log_booking from '@/common/assets/img/projects/dormitory/admin/log_booking.webp'
import dorm_admin_manage_booking from '@/common/assets/img/projects/dormitory/admin/manage_booking.webp'
import dorm_admin_manage_booking_room_assign from '@/common/assets/img/projects/dormitory/admin/manage_booking_room_assign.webp'
import dorm_admin_news from '@/common/assets/img/projects/dormitory/admin/news.webp'
import dorm_admin_owner_manage from '@/common/assets/img/projects/dormitory/admin/owner_manage.webp'
import dorm_admin_user_manage from '@/common/assets/img/projects/dormitory/admin/user_manage.webp'
import dorm_admin_user_manage_one_by_one from '@/common/assets/img/projects/dormitory/admin/user_manage_one_by_one.webp'
// Dormitory System ( WebApp ) - User
import dorm_booked from '@/common/assets/img/projects/dormitory/user/booked.webp'
import dorm_change_passwd from '@/common/assets/img/projects/dormitory/user/change_passwd.webp'
import dorm_dashboard from '@/common/assets/img/projects/dormitory/user/dashboard.webp'
import dorm_fix_report from '@/common/assets/img/projects/dormitory/user/fix_report.webp'
import dorm_hold_booking from '@/common/assets/img/projects/dormitory/user/hold_booking.webp' 
import dorm_profile from '@/common/assets/img/projects/dormitory/user/profile.webp'

// Auto-populate datas in google sheet
import auto_populate_main from '@/common/assets/img/projects/auto_popular/main.webp'

// Raffle prize
import raffle_prize_main from '@/common/assets/img/projects/raffle_prize/main.webp' 

// Brain plz Calendar
import brain_plz_main from '@/common/assets/img/projects/brain_plz/main.webp' 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"

// Bababrown QRcode
import bbbrown_main from '@/common/assets/img/projects/bababrown/hold_insert_text.webp'
import bbbrown_on_insert from '@/common/assets/img/projects/bababrown/on_insert_text.webp'
import bbbrown_on_scan from '@/common/assets/img/projects/bababrown/on_scan_for_view_text.webp'
import bbbrown_gen_qr from '@/common/assets/img/projects/bababrown/on_gen_qr_code.webp'

// Java File Manage
import java_main from '@/common/assets/img/projects/java_file_manage/java01.webp'
import java_main2 from '@/common/assets/img/projects/java_file_manage/java02.webp'

// Incopens
import incopens_home from '@/common/assets/img/projects/incopens/home.webp'

// Dormitory System ( CMD )
import dorm_cmd_main from '@/common/assets/img/projects/dormitory_cmd/cpp_example.webp'



export interface dataProjectMadeInterface {
  title: string
  subtitle: string
  description: string|JSX.Element|React.ReactNode
  link: string,
  external_link?: string,
  link_live_preview?: string|undefined,
  tools_used: IdevToolsItem[]
  img_path: string[],
  can_hide?: boolean,
}


const getCustomExternalLink = (link: string) => (
  <>
    <br />
    <br />
    <a 
      className={`linkExternal`}
      style={{ fontSize: '1.2rem', letterSpacing: '0.04rem' }}
      target="_blank"
      href={link}
    >
      <FontAwesomeIcon icon={faLink} /> Preview external link
    </a>
  </>
)


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
      dorm_home, dorm_home2, dorm_example_room, dorm_plan_dorm, 
      dorm_fee, dorm_auth, dorm_auth_admin, dorm_register,
      // user
      dorm_booked, dorm_change_passwd, dorm_dashboard, dorm_fix_report, dorm_hold_booking, dorm_profile,
      // admin
      dorm_admin_dashboard, dorm_admin_controls, dorm_admin_controls_2, dorm_admin_news, 
      dorm_admin_building, dorm_admin_user_manage, dorm_admin_user_manage_one_by_one, dorm_admin_owner_manage, 
      dorm_admin_manage_booking, dorm_admin_manage_booking_room_assign, dorm_admin_kick_std_booking, 
      dorm_admin_log_booking, dorm_admin_fix_report, dorm_admin_branch_manage,  
    ],
  },
  {
    title: `Auto-populate datas in google sheet`,
    subtitle: `( Fullstack  |  project to facilitate work in university )`,
    description: <>
      This is my first portfolio, I made it with Vue.js and TailwindCSS
      {getCustomExternalLink(`https://www.facebook.com/csnp.ch/videos/843967539853364`)}
    </>,
    link: `https://github.com/csnpch/auto_populate_datas_in_google_sheet`,
    external_link: `https://www.facebook.com/csnp.ch/videos/843967539853364`,
    tools_used: [
      dev_tools.languages.cpp,
    ],
    img_path: [auto_populate_main],
    link_live_preview: ``,
  },
  {
    title: `Raffle Prize`,
    subtitle: `( Frontend  |  hobbies project, parties, New Year's Eve )`,
    description: `Random prize project from the input list fireworks are used and sound effects for entertainment while using`,
    link: `https://github.com/csnpch/raffle_prize`,
    tools_used: [
      dev_tools.languages.cpp,
    ],
    img_path: [raffle_prize_main],
    link_live_preview: `https://prizegift.netlify.app/`,
  },
  {
    title: `Brain plz Calendar`,
    subtitle: `( Fullstack  |  project in university subjects )`,
    description: `Calendar for daily life, create events and generate invite links. to share activities as a group`,
    link: `https://github.com/csnpch/brain_plz_calendar`,
    tools_used: [
      dev_tools.languages.cpp,
    ],
    img_path: [brain_plz_main],
    link_live_preview: `https://www.youtube.com/embed/UEK239MyU7Y`,
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
      bbbrown_main, bbbrown_on_insert, bbbrown_on_scan, bbbrown_gen_qr
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
    img_path: [incopens_home],
    link_live_preview: `https://incopens4489.netlify.app/`,
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
    img_path: [java_main, java_main2],
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
      dorm_cmd_main,
    ],
  },
]