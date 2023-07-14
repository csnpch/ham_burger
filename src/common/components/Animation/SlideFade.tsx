import './SlideFade.sass'
import { useEffect, useState } from 'react';

interface propsInterface {
  children: React.ReactNode|JSX.Element,
  classes?: {
    container?: string,
    children?: string,
    slide?: string
  },
  style?: React.CSSProperties,
  delay?: number,
}


export default function SlideFade({
  children,
  classes = {
    container: '',
    children: '',
    slide: ''
  },
  style = {},
  delay = 0
}: propsInterface) {

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), delay)
    return () => clearTimeout(timeout)
  }, [delay])


  return (
    <>
    
      <div 
        style={style} 
        className={`
          container-slide-fade ${classes.container}
        `}
      >

        {
          isMounted && (
            <>
              <div className={`slider ${classes.slide}`} />
              <div className={`slider ${classes.slide}`} />
            </>
          )
        }

        <div className={`children ${classes.children}`}>
          { children }
        </div>

      </div>
    
    </>
  )
}