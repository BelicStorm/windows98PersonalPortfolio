
const Info = ({closePage, onFront}) => {
    return  <div className="OpenedPage" style={{display:onFront === "info" ?"" :"none" }}>
                <div className="console-head">
                    <div className="console-title">Como usar mi portfolio</div>
                    <div className="console-actions">
                        <button onClick={()=>closePage("info")} className="closeButton">
                            <svg xmlns="http://www.w3.org/2000/svg" width="8px" height="7px" viewBox="0 0 8 7" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2"><path d="M1 6V5h1V4h1V3h2v1h1v1h1v1h1v1H6V6H5V5H3v1H2v1H0V6h1zm0-4V1H0V0h2v1h1v1h2V1h1V0h2v1H7v1H6v1H2V2H1z"/></svg>
                        </button>
                    </div>
                </div>
                <div className="console-body">
                    <article className="aboutProgram">
                        <h2 className="headline">Información Basica</h2>
                        <h3 className="subhead">Te explico el porque de las cosas</h3>
        
                        <div className='linkSections'>
                            <div className='tag'>
                                <span>¿Donde estoy?</span>
                                <p>
                                    En 1998, acabas de instalar Windows 98 en un carísimo PC y te dispones a jugar al Solitario. Nah, es broma. Estas en mi portfolio. 
                                    Date un paseo por las diferentes carpetas y conoce más sobre mí. Pásate también por el terminal e intenta descubrir sus secretos.
                                </p>
                            </div>
                            <div className='tag'>
                                <span>¿Y este diseño tan feo?</span>
                                <p>Primero de todo, respeta. Este diseño es una aproximación de lo que fue el diseño de uno de los mejores SO del mundo.</p>
                            </div>
                            <div className='tag'>
                                <span>¿Puedo ver tu portfolio sin tener que viajar en el tiempo?</span>
                                <p>Puedes, pero ¿de verdad quieres? Vuelve al presente por aquí: <a className="file" href="https://cristianpardo.vercel.app">Maquina del tiempo</a> </p>
                            </div>
                            <div className='tag'>
                                <span>¿El sentido de la vida, el universo y todo lo demás?</span>
                                <p>42</p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
}


export default Info