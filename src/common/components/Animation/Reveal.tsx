import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'


interface propsInterface {
  children: React.ReactNode|JSX.Element,
  width?: 'fit-content'|'100%',
  className?: string,
  properties?: {
    delay?: number,
    duration?: number,
    y?: number,
  }
}


export default function Reveal({
  children,
  width,
  className,
  properties
}: propsInterface) {


  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  const mainControls = useAnimation()


  useEffect(() => {
    isInView && mainControls.start('visible')
  }, [isInView])


  return (
    <>
    
      <div 
        ref={ref}
        className={`${className || ''}`} 
        style={{
          position: 'relative',
          width,
          // overflow: 'hidden',
        }}
      >
        <motion.div
          variants={{
            hidden: { 
              opacity: 0, 
              y: properties?.y || 75 
            },
            visible: { 
              opacity: 1, 
              y: 0 
            },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{  
            duration: properties?.duration || 0.3,
            delay: properties?.delay || 0.25,
          }}
        >
          { children }
        </motion.div>
      </div>
    
    </>
  )


}