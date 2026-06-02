import { div } from "three/tsl"
import { logoIconsList } from "../constants"
import TitleHeader from "../components/TitleHeader"

const LogoIcon = ({ icon }) => {
    return(
        <div className="flex-none flex-center marquee-item">
            <img src={icon.imgPath} alt={icon.name} />
        </div>
    )
}

const LogoSection = () => {
  return (
    <div className="md:my-20 my-10 relative" id="skills">
        <TitleHeader 
        subTitle="Skills and Stacks"/>
        <div className="gradient-edge" />
        <div className="gradient-edge"/>

        <div className="marquee-left h-50">
            <div className="marquee-box-left md:gap-12 gap-5">
                {logoIconsList.map((icon) => (
                    <LogoIcon key={icon.name} icon={icon} />
                ))}
            </div>
        </div>
        <div className="marquee-right h-50">
            <div className="marquee-box-right md:gap-12 gap-5">
                {logoIconsList.map((icon) => (
                    <LogoIcon key={icon.name} icon={icon} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default LogoSection
