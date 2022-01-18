import React, { useRef, useState } from "react";



const Consola = ({closeAction,programActions, onFront}) => {
    const outputRef = useRef(null)
    const inputRef = useRef(null)
    const [processHistory, setProcess] = useState([])
    
    const ConsoleActions = (e,inputRef) => {
        const {open,close} = programActions
        const actions = {
            about:()=>{
                open("aboutMe")
                Output(<><span className="green">Opening the About Page...</span><br/></>)
            },
            contacto:()=>{
                open("contacto")
                Output(<><span className="green">Opening Contacto...</span><br/></>)
            },
            info:()=>{
                open("info")
                Output(<><span className="green">Opening the Info Page...</span><br/></>)
            },
            portfolio:()=>{
                open("portfolio")
                Output(<><span className="green">Opening the Portfolio Page...</span><br/></>)
            },
            help:()=>{
                let commandsArray = [
                    <React.Fragment key="consoleOutput-help"><span>help: <span className="green">Lista los comandos disponibles</span></span><br/></React.Fragment>,
                    <React.Fragment key="consoleOutput-about"><span>about: <span className="green">Abre el programa que te cuenta mi vida</span></span><br/></React.Fragment>,
                    <React.Fragment key="consoleOutput-contact"><span>contacto: <span className="green">Abre el programa que te permite contactarme</span></span><br/></React.Fragment>,
                    <React.Fragment key="consoleOutput-contact"><span>info: <span className="green">Abre el programa que te permite contactarme</span></span><br/></React.Fragment>,
                    <React.Fragment key="consoleOutput-contact"><span>portfolio: <span className="green">Abre el programa que te permite contactarme</span></span><br/></React.Fragment>,
                    <React.Fragment key="consoleOutput-clear"><span>clear: <span className="green">Limpia la terminal</span></span><br/></React.Fragment>,
                    <React.Fragment key="consoleOutput-say"><span>say: <span className="green">Repite lo que escribas despues del [say]</span></span><br/></React.Fragment>,
                    <React.Fragment key="consoleOutput-spoiler"><span>spoiler: <span className="green">Descubre los comandos secretos</span></span><br/></React.Fragment>,
                ];
                Output(commandsArray);
            },
            spoiler:()=>{
                let commandsArray = [
                    <React.Fragment key="consoleOutput-sudo"><span>sudo: <span className="green">Te combierte en el super usuario de mi pagina</span></span><br/></React.Fragment>,
                    <React.Fragment key="consoleOutput-pong"><span>pong: <span className="green">Asiste como espectador a un partido de tenis</span></span><br/></React.Fragment>,
                    <React.Fragment key="consoleOutput-apt"><span>apt-get install: <span className="green">Installa cualquier programa en mi pagina web</span></span><br/></React.Fragment>,
                ];
                Output(commandsArray);
            },
            clear:()=>{
                setProcess([<><span>clear</span><br/></>])
            },
            pong:()=> {
                Output(<><span>pong</span><br/><span className="pong"><b className="left">|</b><b className="right">|</b></span><br/></>);
            },
            sayThis:(data)=>{
                Output(<><span className="green">[say]:</span><span>{data}</span><br/></>);
            },
            sudo:()=>{
                Output(<><span className="red">No puedes hacerme sudo insensato. Yo te hago sudo a ti.</span><br/></>);
            },
            apt:()=>{
                let updating = [<><span className="green">Actualizando...</span><br/></>];
                for (let index = 0; index < 1000; index++) {
                    switch (index) {
                        case 101:
                            updating.push(<><span className="green">Estado actual:</span><span className="red">{index}% ????</span><br/></>);
                            break;
                        case 500:
                            updating.push(<><span className="green">Estado actual:</span><span className="red">{index}% ¿Sigues aqui??</span><br/></>);
                            break;
                        case 600:
                            updating.push(<><span className="green">Estado actual:</span><span className="red">{index}% (╬ ಠ益ಠ)</span><br/></>);
                            break;
                        case 700:
                            updating.push(<><span className="green">Estado actual:</span><span className="red">{index}% ಥ_ಥ</span><br/></>);
                            break;
                        case 800:
                            updating.push(<><span className="green">Estado actual:</span><span className="red">{index}% ಥ﹏ಥ</span><br/></>);
                            break;
                        case 900:
                            updating.push(<><span className="green">Estado actual:</span><span className="red">{index}% ( ಠ ʖ̯ ಠ )</span><br/></>);
                            break;
                        case 999:
                            updating.push(<><span className="red">Error fatal. No se ha podido actualizar.</span><br/></>);
                            break;
                        default:
                            updating.push(<><span className="green">Estado actual: {index}%</span><br/></>);
                            break;
                    }
                }
                Output(updating)
            }
        }
        if (e.which == 13) {
            if (inputRef.current.value.startsWith("say") === true) {
                actions["sayThis"](inputRef.current.value.substr(inputRef.current.value.indexOf(' ') + 1))
            }else if (inputRef.current.value.startsWith("sudo") === true) {
                actions["sudo"]()
            }else if (inputRef.current.value.startsWith("apt-get") === true) {
                actions["apt"]()
            }else{
                actions[inputRef.current.value]()
                
            }
            inputRef.current.value = ""
            
        }
    }
    const Output = (data)=> {
        setProcess([...processHistory, data])
    }
    


    return <div className="OpenedPage" style={{display:onFront === "consola" ?"" :"none" }}>
            <div className="console-head">
                <div className="console-title">Console</div>
                <div className="console-actions">
                    <button onClick={()=>closeAction("consola")} className="closeButton">
                        <svg xmlns="http://www.w3.org/2000/svg" width="8px" height="7px" viewBox="0 0 8 7" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2"><path d="M1 6V5h1V4h1V3h2v1h1v1h1v1h1v1H6V6H5V5H3v1H2v1H0V6h1zm0-4V1H0V0h2v1h1v1h2V1h1V0h2v1H7v1H6v1H2V2H1z"/></svg>
                    </button>
                </div>
            </div>
            <div className="console-body">
                <div className="console">
                    <div className="output" ref={outputRef}>
                        <span>Initializing...</span><br/>
                        <span className="green">0.0002ms ok!</span><br/>
                        <span className="seperator">== == == == == == == == == == == ==</span><br/>
                        <pre contentEditable="false"></pre><br/>
                        <span className="seperator">== == == == == == == == == == == ==</span><br/>
                        <span>Hope you have fun discovering all the <span className="red">hidden gems</span>!</span>
                        <br/>
                        <span className="blue">type '<span className="grey">help</span>' to see a list of comands available <br/> or '
                        <span className="grey">contact</span>' for a list of ways to contact me.</span><br/>
                        {
                            processHistory.map((process)=>{
                                return <div key={Math.random()}>{process}</div>
                            })
                        }
                    </div>
                    <div className="action">
                        <span>dev$ </span>
                        <input type="text" ref={inputRef} onKeyPress={(e)=>ConsoleActions(e,inputRef)}
                                                className="input" name="input"></input>
                        
                    </div>
                </div>
            </div>
    </div>
}


export default Consola