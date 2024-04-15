import Image from 'next/image'

const PortfolioDetails = ({ closePage, onFront, data }) => {
    const { etiqueta, lenguajes, titulo, descripcion, github, gitlab, enlace, iframe } = data[2]

    return <div className="OpenedPage" style={{ display: onFront === data ? "" : "none" }}>
        <div className="console-head">
            <div className="console-title">{titulo}</div>
            <div className="console-actions">
                <button onClick={() => closePage(data)} className="closeButton">
                    <svg xmlns="http://www.w3.org/2000/svg" width="8px" height="7px" viewBox="0 0 8 7" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2"><path d="M1 6V5h1V4h1V3h2v1h1v1h1v1h1v1H6V6H5V5H3v1H2v1H0V6h1zm0-4V1H0V0h2v1h1v1h2V1h1V0h2v1H7v1H6v1H2V2H1z" /></svg>
                </button>
            </div>
        </div>
        <div className="console-body">
            <article className="aboutProgram">
                <h2 className="headline">{titulo}</h2>
                <h3 className="subhead">{etiqueta} </h3>
                <div className="article-meta">
                    <div>
                        <span>Tecnologias: </span>
                       {
                            lenguajes.map((lenguaje=>{
                                return <div className="tag" key={Math.random()}><Image src={`/icons/${lenguaje}.svg`} width={30} height={30} ></Image></div>
                            }))
                        }
                    </div>
                </div>
                <aside>
                    <p>{descripcion}</p>
                </aside>
                <div className='linkSections'>
                {
                    github !== ""
                        ? <div className='linkSection tag'>
                            <span>Ver en Github</span>
                            <a href={github}>{github}</a>
                        </div>
                        : ""
                }
                {
                    gitlab !== ""
                        ? <div className='linkSection tag'>
                            <span>Ver en gitlab</span>
                            <a href={gitlab}>{gitlab}</a>
                        </div>
                        : ""
                }
                {
                    enlace !== ""
                        ? <div className='linkSection tag'>
                            <span><a href={enlace}>Ver el proyecto</a></span>
                            <iframe className='showRun' src={iframe}></iframe>
                        </div>
                        : ""
                }
                </div>
            </article>
        </div>
    </div>
}


export default PortfolioDetails