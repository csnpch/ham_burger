import './Mouse.sass'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'


export default function Mouse() {

  const ballRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
  const mouse = useRef({ x: pos.current.x, y: pos.current.y })
  const speed = 0.2

  useEffect(() => {

    const ball = ballRef.current
    gsap.set(ball, { xPercent: -50, yPercent: -50 })

    const xSet = gsap.quickSetter(ball, 'x', 'px')
    const ySet = gsap.quickSetter(ball, 'y', 'px')

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.x
      mouse.current.y = e.y
      gsap.to(ball, { scale: 1.6, duration: 0.5 })
      setTimeout(() => {
        gsap.to(ball, { scale: 1, duration: 0.5 })
      }, 200)
    }

    window.addEventListener('mousemove', handleMouseMove)

    const updatePosition = () => {
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio())

      pos.current.x += (mouse.current.x - pos.current.x) * dt
      pos.current.y += (mouse.current.y - pos.current.y) * dt
      xSet(pos.current.x)
      ySet(pos.current.y)
    }

    gsap.ticker.add(updatePosition)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      gsap.ticker.remove(updatePosition)
    }
  
  }, [])


  return (
    <>
      <div className={`ball fade-in delay-2`} ref={ballRef}></div>
    </>
  )

}