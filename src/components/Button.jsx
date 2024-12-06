const Button = ({children, styles}) => {
  return (
      <button className={`px-4 py-3 rounded-full border-2 border-black  hover:bg-black hover:text-white ${styles}`}>
    {children}
  </button>
  )
}

export default Button