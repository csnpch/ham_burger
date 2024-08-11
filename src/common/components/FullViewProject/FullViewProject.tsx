import './FullViewProject.sass'
import { useEffect, useState } from 'react'
import { IdevToolsItem } from '@/common/data/dev_tools'
import SlideFade from './../Animation/SlideFade'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faWifi, faXmark } from '@fortawesome/free-solid-svg-icons'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { media_lg } from '@/common/utils/functions/mediaQuery'


export interface InterfaceFullViewProject {
  img_path?: string[],
  title: string,
  subTitle?: string,
  description?: string|JSX.Element|React.ReactNode,
  tools_used?: IdevToolsItem[] 
  link?: string,
  external_link?: string,
  link_live_preview?: JSX.Element|React.ReactNode|string|'#',
  custom_state_preview?: string,
}

interface propsInterface extends InterfaceFullViewProject {
  stateFullView: {
    isOpen: boolean,
    setOpen: (state: boolean) => void
  }
}


export default function FullViewProject({
  link_live_preview = '#',
  ...props
}: propsInterface) {

  const {
    img_path, tools_used,
    stateFullView 
  } = props
  
  const [classAnimation, setClassAnimation] = useState('fade-in')

  const mediaMd = media_lg()


  const handleScrollToTop = () => {
    const element = document.querySelector('.img_group_preview')
    element?.scrollTo({top: 0, behavior: 'smooth'})
  }

  
  const ImagePreviewList = img_path!.length > 0 ? img_path?.map((path, index) => {

    const tmpElement = <a
      target={props.external_link ? '_blank' : '_self'}
      href={props.external_link ? props.external_link : '#'}
      className={`img-warpper preview`}
    >
      <img src={path} alt="#" width={'100%'} height={'100%'} />
    </a>

    if (mediaMd) return tmpElement

    return (
      <SwiperSlide
        key={index}
        className={`img-warpper`}
      >
        { tmpElement }
      </SwiperSlide>
    )
  }) : <div className={`w-full text-center`} style={{marginTop: '2rem'}}>- No picture -</div>


  const ToolsUsedList = tools_used?.map((item, index) => (
    <div key={index} className='tools-used-item'>
      <div className={`img-warpper`}>
        <img src={item.source} alt="#" width={'100%'} height={'100%'} />
      </div>
      <p>{item.label}</p>
    </div>
  ))


  const handleCloseFullView = () => {
    setClassAnimation('fade-out')
    setTimeout(() => stateFullView.setOpen(false), 400)
  }


  useEffect(() => {
    document.body.style.overflow = props.title ? 'hidden' : 'inherit'
  }, [props.title])

  useEffect(() => {
    if (stateFullView.isOpen) {
      setClassAnimation('fade-in')
    }
  }, [stateFullView.isOpen])


  if (!stateFullView.isOpen) return <></>


  return (
    <>
    
      <SlideFade
        classes={{
          container: 'fullview-container-slide-fade ' + classAnimation,
        }}
      >
        
        <div className={`fullview-content-container`}>
          
          <div className={`img_group_preview custom_scrollbar ${link_live_preview !== '#' && 'bg-white'}`}>
            <SlideFade
              delay={400}
              style={{
                width: '100%',
                background: link_live_preview !== '#' ? '#318513' : '#0472c7'
              }}
              classes={{
                container: 'w-full',
                children: 'status-preview',
                slide: 'delay-1 duration-1'
              }}
            >
                {
                  link_live_preview !== '#' ?
                  <p>
                    <FontAwesomeIcon icon={faWifi} />
                    &nbsp;&nbsp;Live Preview
                  </p>
                  : <p>
                    <FontAwesomeIcon icon={faImage} />
                    &nbsp;&nbsp;Picture Preview
                  </p>
                }
            </SlideFade>
            {
              link_live_preview !== '#' ?
              (
                typeof link_live_preview === 'string' ?
                <iframe 
                  src={
                    link_live_preview
                    || 'www.google.com'
                  } 
                  width="100%" height="100%"
                  className={`iframe-preview`}
                />
                : link_live_preview
              )
              : <>
                {
                  mediaMd 
                  ? ImagePreviewList
                  : <Swiper
                    pagination={{
                      type: 'fraction',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="img-warpper-swiper"
                    onSlideChange={() => handleScrollToTop()}
                  >
                    { ImagePreviewList }
                  </Swiper>
                }
              </>
            }
          </div>
          
          <div className={`detail-group`}>

            <div
              onClick={handleCloseFullView}
              className={`action-wrapper cursor-pointer`}
            >
              <FontAwesomeIcon className={`icon`} icon={faXmark} />
            </div>
            
            <p className={`title color-secondary`}>
              { props.title }
            </p>
            <p className={`sub-title`}>
              { props.subTitle }
            </p>
            <p className={`desc`}>
              { props.description }
            </p>
            
            <div className={`tools-used-container`}>
              <p className={`topic-tools-use`}>
                Tools use :
              </p>
              <div className={`tools-used-items`}>
                { ToolsUsedList }
              </div>
            </div>

            <div className={`visit-group`}>
              {/* github */}
              {
                (props.link && props.link !== '' && props.link !== '#') && (
                  <a href={props.link} target='_blank'>
                    <div className={`btn-visit github`}>
                      <FontAwesomeIcon icon={faGithub} />  
                      <p>GitHub Repository</p>
                    </div>
                  </a>
                )
              }
            </div>
          
          </div>

        </div>

      </SlideFade>
    
    </>
  )
}