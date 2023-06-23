import './SlideFade.sass'

interface propsInterface {
  children: React.ReactNode|JSX.Element,
}


export default function SlideFade({
  children,
}: propsInterface) {
  return (
    <>
    
      <div className={`container-slide-fade`}>

        <div className={`slider`} />
        <div className={`slider`} />

        <div className={`children`}>
          { children }
        </div>

      </div>
    
    </>
  )
}