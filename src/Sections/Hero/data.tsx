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
    link: 'https://github.com/csnpch'
  },
  {
    icon: <FontAwesomeIcon icon={faFacebookF} />,
    label: 'Facebook',
    link: 'https://fb.com/csnp.ch'
  },
  {
    icon: <FontAwesomeIcon icon={faInstagram} />,
    label: 'Instagram',
    link: 'https://www.instagram.com/_csnpch'
  },
  {
    icon: <FontAwesomeIcon icon={faTwitter} />,
    label: 'Twitter',
    link: 'https://twitter.com/solasuuu'
  },
  {
    icon: <FontAwesomeIcon icon={faLinkedinIn} />,
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/chitsanuphong-chaihong-4b3b751bb/'
  },
  {
    icon: <FontAwesomeIcon icon={faEnvelope} />,
    label: 'Email',
    link: 'mailto:chitsanuphong.c@outlook.com?'
  }
]
