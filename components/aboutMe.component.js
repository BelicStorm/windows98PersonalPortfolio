import Image from 'next/image'

const AboutMe = ({closePage, onFront}) => {

    return  <div className="OpenedPage" style={{display:onFront === "aboutMe" ?"" :"none" }}>
                <div className="console-head">
                    <div className="console-title">About Me</div>
                    <div className="console-actions">
                        <button onClick={()=>closePage("aboutMe")} className="closeButton">
                            <svg xmlns="http://www.w3.org/2000/svg" width="8px" height="7px" viewBox="0 0 8 7" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2"><path d="M1 6V5h1V4h1V3h2v1h1v1h1v1h1v1H6V6H5V5H3v1H2v1H0V6h1zm0-4V1H0V0h2v1h1v1h2V1h1V0h2v1H7v1H6v1H2V2H1z"/></svg>
                        </button>
                    </div>
                </div>
                <div className="console-body">
                    <article className="aboutProgram">
                        <h2 className="headline">Cristian Pardo Casanova</h2>
                            <h3 className="subhead">Junior FullStack Developer </h3>
                            <div className="article-meta">
                                <div>
                                    <span>Aficiones: </span> <span className="tag">Leer</span> <span className="tag">Escribir</span> <span className="tag">Programar</span> <span className="tag">Montar Maquetas</span>
                                </div>
                            </div>
                            <div className="article-meta">
                                <div>
                                    <span>Encuentrame en: </span> 
                                    <a href="https://github.com/BelicStorm" className="tag" key={Math.random()}><Image src={`/icons/github.svg`} width={30} height={30} ></Image></a>
                                    <a href="https://gitlab.com/BelicStorm" className="tag" key={Math.random()}><Image src={`/icons/gitlab.svg`} width={30} height={30} ></Image></a>
                                    <a href="https://www.linkedin.com/in/cristian-pardo-casanova-a60251138/" className="tag" key={Math.random()}><Image src={`/icons/linkedin.svg`} width={30} height={30} ></Image></a>
                                    <a href="https://twitter.com/BelicStorm" className="tag" key={Math.random()}><Image src={`/icons/twitter.svg`} width={30} height={30} ></Image></a>
                                </div>
                            </div>
                            <aside>
                                <p>El paso mas importante que se puede dar es siempre el siguiente.</p>
                            </aside>
                            <figure>
                                <img src="/media/avatar.jpg" alt="Cristian Pardo Casanova" />
                                <figcaption>Picture.png</figcaption>
                            </figure>

                            <p>Hola, soy Cristian Pardo entusiasta de la programación web, la ciencia ficción, la fantasía y las maquetas. 
                               Soy Técnico Superior en Desarrollo de Aplicaciones web y Técnico de Administración de Sistemas en red. De este último título solo me quedo con la gestión de las BDD.
                            </p>

                            <p>Quiero creer que soy FullStack Developer especializado en tecnologias basadas en JS. Soy resolutivo y trabajo bien en equipo. Mi objetivo, al final del día, es dejar 
                                huella y poder decir que algo mío está siendo útil. A veces escribo relatos y creo juegos de mesa, pero esa es otra historia.
                            </p>

                            <h2>Más Sobre Mi</h2>
                            <ul className="social-skills">
                                <li><span className="bolder">"Actualmente":</span> Trabajando en SocialWow como FrontEnd Dev.</li>
                                <li><span className="bolder">2021-2022:</span> 1 año en Aplisein como Junior FullStack Dev.</li>
                                <li><span className="bolder">2020:</span> 3 meses de prácticas en <a href="https://www.linkedin.com/company/devopensource/?originalSubdomain=es" target="_blank">Devopensource</a> como QA tester con Selenium y Cypress</li>
                                <li><span className="bolder">2018-2020:</span> Ciclo de grado superior D.A.W en <a href="https://portal.edu.gva.es/iestacio/" target="_blank"> IES l'Estació</a> </li>
                                <li><span className="bolder">2018:</span> 3 meses de prácticas en <a href="https://www.caixaontinyent.es" target="_blank">Caixa Ontinyent</a> migrando un sistema de monitorización Nagios a OMD Consol Labs </li>
                                <li><span className="bolder">2016-2018:</span> Ciclo de grado superior A.S.I.R en el <a href="http://www.cipfpbatoi.es/index.php/ca/principal/" target="_blank">CIP FP Batoi</a></li>
                            </ul>
                            <ul className="social-skills">
                                <li>Trabajando actualmente con:</li>
                                <li className="skills">
                                    <img className="used-skill" src="/icons/react.svg" alt="react skill" />
                                    <img className="used-skill" src="/icons/nextjs.svg" alt="nextjs skill" />
                                    <img className="used-skill" src="/icons/nodejs.svg" alt="nodejs skill" />
                                    <img className="used-skill" src="/icons/docker.svg" alt="docker skill" />
                                    <img className="used-skill" src="/icons/graphql.svg" alt="graphql skill" />
                                    <img className="used-skill" src="/icons/apollo.svg" alt="apollo skill" />
                                    <img className="used-skill" src="/icons/postgresql.svg" alt="postgresql skill" />
                                    <img className="used-skill" src="/icons/mongodb.svg" alt="mongodb skill" />
                                    <img className="used-skill" src="/icons/mysql.svg" alt="mysql skill" />
                                </li>
                                <li>Aprendiendo:</li>
                                <li className="skills">
                                    <img className="used-skill" src="/icons/go.svg" alt="docker skill" />
                                    <img className="used-skill" src="/icons/gatsby.svg" alt="gatsby skill" />
                                    <img className="used-skill" src="/icons/nextjs.svg" alt="next skill" />
                                    <img className="used-skill" src="/icons/typescript.svg" alt="typescript skill" />
                                </li>
                            </ul>
                
                    
                    </article>
                </div>
            </div>
}


export default AboutMe
