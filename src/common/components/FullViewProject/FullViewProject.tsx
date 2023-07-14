import './FullViewProject.sass'
import { useEffect, useState } from 'react'
import { IdevToolsItem } from '@/common/data/dev_tools'
import SlideFade from './../Animation/SlideFade'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faWifi, faXmark } from '@fortawesome/free-solid-svg-icons'



export interface InterfaceFullViewProject {
  img_path?: string[],
  title: string,
  subTitle?: string,
  description?: string,
  tools_used?: IdevToolsItem[] 
  link?: string,
  link_live_preview?: string,
}

interface propsInterface extends InterfaceFullViewProject {
  stateFullView: {
    isOpen: boolean,
    setOpen: (state: boolean) => void
  }
}


export default function FullViewProject(props: propsInterface) {
  
  
  const { 
    img_path, tools_used,
    stateFullView 
  } = props
  
  const [classAnimation, setClassAnimation] = useState('fade-in')

  
  const ImagePreviewList = img_path!.length > 0 ? img_path?.map((path, index) => (
    <div key={index} className={`img-warpper preview`}>
      <img src={path} alt="#" width={'100%'} height={'100%'} />
    </div> 
  )) : <div className={`w-full text-center`} style={{marginTop: '2rem'}}>- No picture -</div>


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
          
          <div className={`img_group_preview custom_scrollbar`}>
            <SlideFade
              delay={400}
              style={{
                width: '100%',
                background: props.link_live_preview ? '#318513' : '#0472c7'
              }}
              classes={{
                container: 'w-full',
                children: 'status-preview',
                slide: 'delay-1 duration-1'
              }}
            >
                {
                  props.link_live_preview ?
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
              props.link_live_preview ?
              <iframe 
                src={
                  props.link_live_preview 
                  || ''
                } 
                width="100%" height="100%"
              />
              : ImagePreviewList
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
              <a href={props.link} target='_blank'>
                <div className={`btn-visit github`}>
                  <FontAwesomeIcon icon={faGithub} />  
                  <p>GitHub Repository</p>
                </div>
              </a>
            </div>
          
          </div>

        </div>

      </SlideFade>
    
    </>
  )
}