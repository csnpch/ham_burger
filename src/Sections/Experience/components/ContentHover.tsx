import { IdevToolsItem } from '@/data/dev_tools'

interface propsInterface {
  toolsUsed: IdevToolsItem[]
}


export default function ContentHover(props: propsInterface) {
  
  const ListItemToolUsed = props.toolsUsed.map((item, index) => (
    <div 
      key={index}
      className={`item`}
    >
      <img src={item.source} alt="#" width={`100%`} height={`100%`} />
    </div>
  ))

  if (!props.toolsUsed.length) return (<></>)
  
  return (
    <>
    
      <div className={`exp-container-hover`}>
        <div className={`item-group`}>
          { ListItemToolUsed }
        </div>
      </div>
    
    </>
  )
}

