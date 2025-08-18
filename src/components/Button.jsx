
const Button = ({title}) => {
  return (
    <button className="relative cursor-pointer border-2 w-[170px] sm:w-[250px] text-lg sm:text-2xl lpf mt-4 overflow-hidden group  text-black p-1.5">
    <span className="relative z-10 group-hover:text-white transition-colors duration-300">{title}</span>
    <span className="absolute top-0 left-0 w-0 h-full bg-black transition-all duration-300 group-hover:w-full"></span>
    </button>
  )
}

export default Button