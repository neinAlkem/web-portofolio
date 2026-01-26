import React, { useRef } from 'react'
import { div } from 'three/tsl'
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Button from '../components/Button'
import TitleHeader from '../components/TitleHeader'

gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {
const sectionRef = useRef(null)
const project1 = useRef(null)
const project2 = useRef(null)
const project3 = useRef(null)   
const project4 = useRef(null)   
const project5 = useRef(null)   
const project6 = useRef(null)   

useGSAP(() => {
    const projects = [project1.current, project2.current, project3.current, project4.current, project5.current, project6.current]
    projects.forEach((card, index) => {
    gsap.fromTo(
        card, 
        {
            y:50,
            opacity:0
        },
        {
            y:0,
            opacity:1,
            delay: (index+1) * 0.2,
            duration: 1,
            scrollTrigger:{
                trigger: card,
                start: 'top bottom 80%',
                end: 'top top'
            }
        }
        )
    })
    gsap.fromTo(
        sectionRef.current, 
        { opacity: 0 }, 
        { opacity: 1, duration: 1} )
}, []);
return (
    <div id='projects' ref={sectionRef} className='app-showcase'>
        <div className='w-full'>
        <TitleHeader 
            title='Portofolio Projects'
            subTitle="Click Title for Project Details"/>
            <div className='showcaselayout mt-20'>
                {/*left section*/}
                <div className='first-project-wrapper' ref={project1}>
                    <div className='image-wrapper'>
                        <img src="/assets/images/project-de-fmgc.png" alt="project-1" />
                    </div>
                    <div className='text-content'>
                        <a href="https://github.com/neinAlkem/de-fmgc">
                             <h2>Realtime POS System Streaming and Data Forecasting Pipeline</h2>
                        </a>
                        <p className='text-white-50 md:text-xl mt-5'>
                            This project simulates the complete data flow inside a typical Fast-Moving Consumer Goods (FMCG) company. It is designed to represent how real-world FMCG businesses manage retail demand forecasting, inventory tracking, supply-chain decisions, and operational reporting through data pipelines.
                        </p>
                    </div>
                </div>
                {/*right section*/}
                <div className='project-list-wrapper overflow-hidden'>
                    <div className='project' ref={project2}>
                        <div className='image-wrapper bg-white'>
                            <img src="/assets/images/project-de-nyc-taxi.png" alt="project2" />
                        </div>
                        <div className='text-content'>
                            <a href="https://github.com/neinAlkem/nyc-taxi-etl">  
                                <h2>NYC Taxi Pipeline Using Spark and Astro CLI</h2>
                            </a>
                        </div>
                    </div>
                    <div className='project' ref={project3}>
                        <div className='image-wrapper bg-blue-100'>
                            <img src="/assets/images/project-da-bycicle-co.png" alt="project3" />
                        </div>
                        <div className='text-content'>
                            <a href="https://drive.google.com/file/d/1xeQharZi5o_YeRlb2y0dziF4DwYfp6Rk/view?usp=drive_link">
                                  <h2>Bycicle Company Performance Analytic Dashboard</h2>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='showcaselayout mt-7'>
                {/*left section*/}
                             <div className='project-list-wrapper overflow-hidden'>
                    <div className='project' ref={project4}>
                        <div className='image-wrapper bg-stone-700'>
                            <img src="/assets/images/project-ai-hybridfilter.png" alt="project4" />
                        </div>
                        <div className='text-content'>
                            <a href="https://github.com/neinAlkem/hybrid-filtering-recommendation">  
                                <h2>Hybrid Filtering Books Recomendation System</h2>
                            </a>
                        </div>
                    </div>
                    <div className='project' ref={project5}>
                        <div className='image-wrapper bg-white'>
                            <img src="/assets/images/project-de-realtimevoting.png" alt="project5" />
                        </div>
                        <div className='text-content'>
                            <a href="https://github.com/neinAlkem/realtime-voting">
                                  <h2>Realtime Vote Result Using Kafka Streaming</h2>
                            </a>
                        </div>
                    </div>
                </div>
                {/*right section*/}
                <div className='first-project-wrapper' ref={project6}>
                    <div className='image-wrapper'>
                        <img src="/assets/images/project-de-aws-lambda.png" alt="project6" />
                    </div>
                    <div className='text-content'>
                        <a href="https://github.com/neinAlkem/aws-selenium-pipeline">
                             <h2>GoFood & Twitter Review ETL Pipeline using AWS Lambda & Docker</h2>
                        </a>
                        <p className='text-white-50 md:text-xl mt-5'>
                            This project is designed to automate the extraction, transformation, and loading (ETL) of user review data from two main sources: GoFood (a food delivery web platform) and Twitter. The solution leverages serverless technologies from AWS, particularly AWS Lambda with container support, enabling custom environments for complex scraping tasks using tools like Selenium.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShowcaseSection