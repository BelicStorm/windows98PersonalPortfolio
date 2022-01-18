import Footer from "../components/footer.component"
import Consola from "../components/consola.component"
import AboutMe from "../components/aboutMe.component"
import Contact from "../components/contact.component"
import Portfolio from "../components/portfolio.component"
import Image from 'next/image'
import { useEffect, useState } from "react"
import PortfolioDetails from "../components/portfolioDetails.component"
import Info from "../components/info.component"




const Home = ({data}) => {
    const [ProgramsOpened, setProgramOpened] = useState(["info"])
    const [OnFront, setOnFront] = useState("info")

    const CloseProgram = (programToBeClosed) => {
        let actualPrograms = ProgramsOpened.filter((program)=>{
            return program !== programToBeClosed
        })
        if (actualPrograms.length === 0) {
            setOnFront("")
        }
        setProgramOpened(actualPrograms)
    }
    const OpenPage = (programToBeOpened)=>{
        const programName = programToBeOpened
        if (!ProgramsOpened.includes(programToBeOpened)) {
            setProgramOpened([...ProgramsOpened, programToBeOpened])
            setOnFront(programName)
        }else{
            setOnFront(programName)
        }
    }
    

    const Menu = [
         <div className="programIcon" onClick={()=>OpenPage("consola")} key="consola-icono"><Image src="/media/console_prompt.png" alt="Picture of the author" width={50} height={50}/><span>Consola</span></div>,
         <div className="programIcon" onClick={()=>OpenPage("aboutMe")} key="about-icono"><Image src="/media/certificate.png" alt="Picture of the author" width={50} height={50}/><span>About Me</span></div>,
         <div className="programIcon" onClick={()=>OpenPage("contacto")} key="contact-icono"><Image src="/media/modem.png" alt="Picture of the author" width={50} height={50}/><span>Contact</span></div>,
         <div className="programIcon" onClick={()=>OpenPage("info")} key="guide-icono"><Image src="/media/help_book.png" alt="Picture of the author" width={50} height={50}/><span>Como usar</span></div>,
         <div className="programIcon" onClick={()=>OpenPage("portfolio")} key="portfolio-icono"><Image src="/media/directory.png" alt="Picture of the author" width={50} height={50}/><span>Portfolio</span></div>,
    ]
    const InstalledPrograms = {
        consola: ()=> <Consola key="consola-programa" closeAction={CloseProgram} onFront={OnFront}
                               programActions={{close:CloseProgram,open:OpenPage}}></Consola>,
        aboutMe: ()=> <AboutMe key="aboutMe-programa" closePage={CloseProgram} onFront={OnFront}></AboutMe>,
        contacto: ()=> <Contact key="contacto-programa" closePage={CloseProgram} onFront={OnFront}></Contact>,
        portfolio: ()=> <Portfolio data={data} key="porfolio-programa" closePage={CloseProgram} onFront={OnFront} programActions={{close:CloseProgram,open:OpenPage}}></Portfolio>,
        info:()=> <Info key="info-programa" closePage={CloseProgram} onFront={OnFront}></Info>,
    }

    useEffect(()=>{
    },[ProgramsOpened])
    return <>
            <div className="container">
                <div className="background"></div>
                <div className="programIcons">
                    {
                        Menu.map(icon=>{
                            return icon
                        })
                    }
                </div>
                <div className="computer">
                {
                            ProgramsOpened.map(OpenedProgram=>{
                                     return typeof OpenedProgram === "object"
                                                ?<PortfolioDetails data={OpenedProgram} key={Math.random()} closePage={CloseProgram} onFront={OnFront} 
                                                                   programActions={{close:CloseProgram,open:OpenPage}}></PortfolioDetails>
                                                :InstalledPrograms[OpenedProgram]()
                                
                               
                            })
                        }
                    
                </div>
                <Footer programsOpened={ProgramsOpened} focusProgram={setOnFront}></Footer>
            </div>
    </>
}

export async function getStaticProps(context) {
    const { portfolio } = await import(
        `../models/works.model.json`
      );
    return {
      props: {
          data: portfolio
      }, // will be passed to the page component as props
    }
}

export default Home