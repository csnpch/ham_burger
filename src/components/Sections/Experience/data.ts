interface dataTimelineInterface {
  title: string;
  subtitle: string;
  description: string;
  date: {
    start: string;
    end: string;
    helper: string;
  }
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
    }
  },
  {
    title: `iWant ( Mobile App, APK )`,
    subtitle: `( Frontend  |  project in university subjects )`,
    description: `An application for anyone who wants something But don't want to go out and buy it yourself. Or don't have a vehicle to go out to buy`,
    date: {
      start: `April, 2023`,
      end: ``,
      helper: '1 months',
    }
  },
  {
    title: `Queueee ( Realtime WebApp )`,
    subtitle: `( Fullstack  |  cooperate with the department of lands )`,
    description: `Realtime queue service on local network & local machine, Charitable project for government agencies, Department of Lands, Prachinburi Province, Thailand`,
    date: {
      start: `Jan, 2023`,
      end: ``,
      helper: '3 weeks',
    }
  },
  {
    title: `Siblings matching ( WebApp )`,
    subtitle: `( Fullstack  |  project to facilitate work in university )`,
    description: `Sibling matching program which is an activity of my university, Take a random approach`,
    date: {
      start: `Nov, 2022`,
      end: ``,
      helper: '1 weeks',
    }
  },
  {
    title: `Dormitory System ( WebApp )`,
    subtitle: `( Fullstack  |  project in university subjects )`,
    description: `Charity project for student dormitory Increase convenience for students to use the booking website`,
    date: {
      start: `Jun, 2022`,
      end: `Apr, 2022`,
      helper: '3 months',
    }
  },
] 