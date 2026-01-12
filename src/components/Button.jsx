const Button = ({ text, className, id }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault()

        const target = document.getElementById(id)
        if (!target) return

        const offset = window.innerHeight * 0.15
        const top =
          target.getBoundingClientRect().top + window.scrollY - offset

        window.scrollTo({ top, behavior: "smooth" })
      }}
      className={`${className ?? ""} cta-wrapper`}
    >
       <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/assets/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  )
}


export default Button