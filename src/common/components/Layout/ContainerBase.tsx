interface propsInterface {
  children: React.ReactNode,
  className?: string
}


export default function ContainerBase({
  children,
  className = ''
}: propsInterface) {

  return (
    <>
      <div className={`container-base ${className}`}>
        { children }
      </div>
    </>
  )

}