interface Props {}

const IconsMenu: React.FC<Props> = () => {
  return (
    <div className="icon flex cursor-pointer flex-col gap-1">
      <div className="h-0.1 w-5 bg-white"></div>
      <div className="h-0.1 w-5 bg-white"></div>
      <div className="h-0.1 w-5 bg-white"></div>
    </div>
  )
}
export default IconsMenu
