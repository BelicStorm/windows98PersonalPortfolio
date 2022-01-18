import { ValidationError, useForm } from '@formspree/react';

const Contact = ({closePage, onFront}) => {

    const [state, handleSubmit] = useForm('mgerqenw', {
        data: {
          pageTitle: 'Mensaje desde el portfolio',
        }});
    return  <div className="FormPage" style={{display:onFront === "contacto" ?"" :"none" }}>
                <div className="console-head">
                    <div className="console-title">Contacto</div>
                    <div className="console-actions">
                        <button onClick={()=>closePage("contacto")} className="closeButton">
                            <svg xmlns="http://www.w3.org/2000/svg" width="8px" height="7px" viewBox="0 0 8 7" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2"><path d="M1 6V5h1V4h1V3h2v1h1v1h1v1h1v1H6V6H5V5H3v1H2v1H0V6h1zm0-4V1H0V0h2v1h1v1h2V1h1V0h2v1H7v1H6v1H2V2H1z"/></svg>
                        </button>
                    </div>
                </div>
        
               {
                   state.succeeded 
                    ? <article className="contactProgram form-div">
                        <aside>
                            <p>Mensaje recibido. Gracias por tu tiempo.</p>
                        </aside>
                    </article>
                    : <article className="contactProgram form-div">
                    <div id="thanks-container"></div>
                    <form className="form" id="form1" onSubmit={handleSubmit}>
                        <p className="name">
                            <label htmlFor="name">Nombre</label>
                            <input name="name" type="text" className="input" id="name" required/>
                            <ValidationError field="name" prefix="name" errors={state.errors} />
                        </p>
                        <p className="email">
                            <label htmlFor="email">E-mail</label>
                            <input name="email" type="email" className="input" id="email" required/>
                            <ValidationError field="email" prefix="email" errors={state.errors} />
                        </p>
                        <p className="text">
                            <label htmlFor="message">Mensaje</label>
                            <textarea name="message" className="input" id="message" required ></textarea>
                            <ValidationError field="message" prefix="message" errors={state.errors} />
                        </p>
                        <div className="submit">
                            <input type="submit" value="Enviar" className="button" disabled={state.submitting}></input>
                            {/* <input type="submit" value="Enviar" className="button" onSubmit={()=>submitForm()}/> */}
                        </div>
                    </form>
                </article>
               }

            </div>
}


export default Contact