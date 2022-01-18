import TreeMenu from "./tree.component"
import Image from 'next/image'


const Portfolio = ({closePage, onFront, data, programActions}) => {
    const {open, close} = programActions
    return  <div className="OpenedPage" style={{display:onFront === "portfolio" ?"" :"none" }}>
                <div className="console-head">
                    <div className="console-title">Portfolio</div>
                    <div className="console-actions">
                        <button onClick={()=>closePage("portfolio")} className="closeButton">
                            <svg xmlns="http://www.w3.org/2000/svg" width="8px" height="7px" viewBox="0 0 8 7" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2"><path d="M1 6V5h1V4h1V3h2v1h1v1h1v1h1v1H6V6H5V5H3v1H2v1H0V6h1zm0-4V1H0V0h2v1h1v1h2V1h1V0h2v1H7v1H6v1H2V2H1z"/></svg>
                        </button>
                    </div>
                </div>
                <div className="console-body whith-tree">
                    <article className="directory-tree">
                        <TreeMenu menu={data} treeName="portfolioDetails" actions={{open:open}}></TreeMenu>
                    </article>
                    <article className="aboutProgram directory-content">
                        {
                            data.map(work=>{
                                const {etiqueta,titulo} = work
                                return <div onClick={()=>open(["portfolioDetails",titulo,work])} className="portfolioProgram" key={Math.random()}>
                                    <Image src="/media/app.png" alt={titulo} width={70} height={70}></Image>
                                    <span>{titulo}</span>
                                </div>
                            })
                        }
                    </article>
                </div>
            </div>
}


export default Portfolio