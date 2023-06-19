import Topic from '@/components/Topic/Topic'
import './Experience.sass'
import ExperienceBanner from '@/assets/img/experience_banner.svg'
import { dataTimeline } from './data'


interface propsInterface {}


export default function Experience({}: propsInterface) {

  
  return (
    <>
   
      <section className={`experience-container`}>
        
        {/* right or bottom content */}
        <div className={`content-container`}>

          <Topic
            title={`EXPERIENCE`}
            subTitle={`Experience may be minimal but definitely full of heart.`}
          />

          <div className={`timeline-container`}>
            
            <div className={`timeline`}>
              <div className='timeline-item'>

              </div>
            </div>
            
            <div className={`card-container`}>
              {
                dataTimeline.splice(0, 2).map((item, index) => {
                  return (
                    <div 
                      key={index}
                      className={`card-item`}
                    >
                      <div className={`title-container`}>
                        <p>{ item.title }</p>
                        <p>{ item.subtitle }</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>

          </div>
                  
        </div>
          
        {/* left or top content */}
        <div className={`banner-img`}>
          <img src={ExperienceBanner} alt="#" width={'100%'} height={'100%'} />
        </div>


      </section>
   
    </>
  )

}