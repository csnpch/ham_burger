import './Hero.sass'
import ProfileImg from '@/assets/img/profile.png'
import { contacts } from './data'
import ContainerBase from '@/components/Layout/ContainerBase'
import Reveal from '@/components/Animation/Reveal'
import { media_md } from '@/utils/functions/mediaQuery'

export default function Hero() {

  const isMd = media_md()

  return (
    <>

        <section className={`hero-container`}>

          <ContainerBase className={`container-base`} >

            {/* left content */}
            <div className={`paragraph-container`}>
                
              <Reveal>
                <div className={`identify`}>
                  <p>I’m</p>
                  <div className={`fullname`}>
                    <p>Chitsanuphong</p>
                    <p>Chaihong</p>
                  </div>
                </div>
              </Reveal>

              <Reveal>
                <div className={`description`}>
                  <p className={`ideal`}>
                    Although I may take a bit longer to grasp new concepts, 
                    I am extremely passionate about enhancing my coding skills 
                    and creating applications and websites. I'm always eager to 
                    learn and won't disappoint you. :)
                  </p>
                  <p className={`text-highlight`}>
                    # I'm studying in my final year of bachelor's degree
                  </p>
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
                    Frontend Developer
                  </p>
                </div>
                
              </div>
            </div>
          </ContainerBase>

        </section>

    </>
  )

}