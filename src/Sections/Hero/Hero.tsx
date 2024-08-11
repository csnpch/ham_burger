import './Hero.sass'
import ProfileImg from '@/common/assets/img/profile.png'
import { contacts } from './data'
import ContainerBase from '@/common/components/Layout/ContainerBase'
import Reveal from '@/common/components/Animation/Reveal'
import { media_md } from '@/common/utils/functions/mediaQuery'
import SlideFade from '@/common/components/Animation/SlideFade'

export default function Hero() {

  const isMd = media_md()

  return (
    <>

        <section id='hero' className={`hero-container`}>

          <ContainerBase className={`container-base`} >

            {/* left content */}
            <div className={`paragraph-container`}>
                
              <Reveal
                properties={{
                  y: 1
                }}
              >
                <div className={`identify`}>
                  <SlideFade>
                    <p>I’m</p>
                  </SlideFade>
                  <SlideFade>
                    <div className={`fullname`}>
                      <p>Chitsanuphong</p>
                      <p>Chaihong</p>
                    </div>
                  </SlideFade>
                </div>
              </Reveal>

              <Reveal
                properties={{
                  y: 1
                }}
              >
                <div className={`description`}>
                  <SlideFade>
                    <p className={`ideal`}>
                      Although I may take a bit longer to grasp new concepts, 
                      I am extremely passionate about enhancing my coding skills 
                      and creating applications and websites. I'm always eager to 
                      learn and won't disappoint you. :)
                    </p>
                  </SlideFade>
                  <SlideFade>
                    <div className={`contact-group`}>
                      {
                        contacts.map((contact, index) => (
                          <a 
                            key={index} 
                            href={contact.link} 
                            target={`_blank`}
                            className={`contact-item`} 
                          >
                            { contact.icon }
                          </a>
                        ))
                      }
                    </div>
                  </SlideFade>
                </div>
              </Reveal>

            </div>

            {/* right content */}
            <div className={`
              profile-container
              ${
                isMd 
                ? 'fade-in' 
                : 'fade-in-right'
              }
            `}>
              <div className={`profile`}>

                <div className={`container-img`}>
                  <img src={ProfileImg} alt="#" width={`100%`} height={`100%`} />
                </div>
                <div className={`background-img`}>
                  <div className={`text-nickname`}>
                    <p>My nickname is</p>
                    <p>" Ham "</p>
                  </div>
                  <p className={`text-role`}>
                    Full-Stack Developer
                  </p>
                </div>
                
              </div>
            </div>
          </ContainerBase>

        </section>

    </>
  )

}