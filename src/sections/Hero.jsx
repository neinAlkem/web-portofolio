import { words } from "../constants"
import Button from "../components/Button"
import HeroExperience from "../components/HeroModels/HeroExperience"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import AnimatedCounter from "../components/AnimatedCounter"

const Hero = () => {
    useGSAP(() => {
        gsap.fromTo('.hero-text h1',
            {
                y:50,
                opacity:0
            },
            {
                y:0,
                opacity:1,
                stagger:0.8,
                duration: 1,
                ease: 'power2.inOut'
            }
        )
    })

    useGSAP(() => {
        gsap.from('#img-hero', {
            y: 80,
            opacity: 0,
            scale: 0.8,
            duration: 3,
            ease: 'expo.out',
            delay: 0.4,
        })
        })

  return (
   <section id='hero' className='relative overflow-hidden'>
    <div className='absolute top-0 left-0 z-10'>
        <img src="/assets/images/bg.png" alt="background" />
    </div>

    <div className='hero-layout'>
{/* ------------------------------ Left Section ------------------------------ */}
        <header className='flex flex-col justify-center xl:w-4xl md:w-full w-9/12 md:px-20 px-5 items-center' >
            <div className='flex flex-col gap-7 md:items-start justify-center h-screen'>
                <div className='hero-text'>
                    <h1>Building
                        <span className='slide'>
                            <span className='wrapper'>
                                {words.map((word, index) => (
                                    <span key={index} className='flex items-center md:gap-3 gap-1 pb-2'
                                    >
                                        <img src={word.imgPath} alt={word.text} className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50'
                                        />
                                    <span>{word.text}</span>
                                    </span>
                                ))}
                                </span>
                            </span>
                        </h1>
                    <h1>into Scalable Systems</h1>
                    <h1>that Deliver Impact</h1>
                </div>

                <p className="text-white-50 md:text-xl relative z-10 pointer-events-none md:max-w-10/12 xl:max-w-11/12 w-full">
                I am an engineer passionate about integrating secure, intelligent technologies into real-world solutions through hands-on development.
                </p>

                <Button className='w-80 md:w-90 md:h-16 h-12' 
                        id='counter' 
                        text='Check my Portofolio' 
                    />
                
            </div>
        </header>

{/* ------------------------------ Right Section ------------------------------ */}
        <figure>
            <div className='hidden xl:block'>
                <img id='img-hero'src="/assets/images/hero_img.png" alt="" /> 
            </div>
        </figure>
    </div>
    <AnimatedCounter />
   </section>
  )
}

export default Hero