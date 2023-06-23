import './ListDevTools.sass'
import { IdevToolsItem } from '@/common/data/dev_tools'


interface propsInterface {
  devTools: IdevToolsItem[]
}


export default function ListDevTools(props: propsInterface) {

  return (
    <>
    
      <div className={`project-made dev-tools`}>
        {
          props.devTools.map((item, index) => (
            <div className={`item`} key={index}>
              <img src={item.source} alt="#" width={'100%'} height={'100%'} />
            </div>
          ))
        }
      </div>
    
    </>
  )

}