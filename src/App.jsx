import NavBar from "./components/NavBar"
import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import LogoSection from "./sections/LogoSection"
import FeatureCards from "./sections/FeatureCards"
import ExperienceSection from "./sections/ExperienceSection"
import ColleagueWords from "./sections/ColleagueWords"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

const App = () => {
  return (
   <>
   <NavBar />
    <Hero />
    <ShowcaseSection />
    <LogoSection />
    <FeatureCards />
    <ExperienceSection />
    <ColleagueWords />
    <Contact />
    <Footer />
   </>
  )
}

export default App