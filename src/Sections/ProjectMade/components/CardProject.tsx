import { dataProjectMadeInterface } from '../data'
import './CardProject.sass'
import ListDevTools from './ListDevTools'
import { FullViewContext } from '@/common/data/context/fullViewContext';
import { useContext } from 'react';

interface propsInterface {
  data: dataProjectMadeInterface
}


export default function CardProject(props: propsInterface) {

  const fullViewContext = useContext(FullViewContext)

  const handleClickViewMore = () => {
    fullViewContext.setOnFullView(true)
    fullViewContext.setDataFullPreviewProject({
      title: props.data.title,
      subTitle: props.data.subtitle || '-',
      description: props.data.description || '-',
      link: props.data.link || '',
      tools_used: props.data.tools_used || [],
      link_live_preview: props.data.link || '',
      img_path: props.data.img_path
    })
  }

  return (
    <>
    
      <div
        className={`card-project-container`}
        onClick={handleClickViewMore}
      >
        <div className={`position-wrapper`}>
          <ListDevTools devTools={props.data.tools_used} />
          
          <div className={`overlay`} />
          <div className={`card-project-img`}>
            <img src={props.data?.img_path[0] || ''} alt="#" width={'100%'} height={'100%'} />
          </div>
          <div className={`card-project-content`}>
            <div className={`title`}>
              { props.data.title }
            </div>
            <div className={`sub-title`}>
              { props.data.subtitle }
            </div>
            <div className={`description`}>
              { props.data.description }
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
  
}