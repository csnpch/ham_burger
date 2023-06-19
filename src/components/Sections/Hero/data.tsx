import { ReactNode } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { 
  faGithub, 
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'



interface contactInterface {
  icon: ReactNode,
  label: string,
  link: string,
  customSize?: string
}


export const contacts: contactInterface[] = [
  {
    icon: <FontAwesomeIcon icon={faGithub} />,
    label: 'Github',
    link: ''
  },
  {
    icon: <FontAwesomeIcon icon={faFacebookF} />,
    label: 'Facebook',
    link: ''
  },
  {
    icon: <FontAwesomeIcon icon={faInstagram} />,
    label: 'Instagram',
    link: ''
  },
  {
    icon: <FontAwesomeIcon icon={faTwitter} />,
    label: 'Twitter',
    link: ''
  },
  {
    icon: <FontAwesomeIcon icon={faLinkedinIn} />,
    label: 'LinkedIn',
    link: ''
  },
  {
    icon: <FontAwesomeIcon icon={faEnvelope} />,
    label: 'Email',
    link: ''
  }
]
