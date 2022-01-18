import Link from 'next/link'
const Lost = () => {
    return <div className='lost-page'>
            <div className="msg" align='center'>
                <p className='highlight'>Cristian Pardo PC</p>
                <p>A fatal exception 0E has occured at 028:C00068F8 in VxD VMM(01) 000059F8. The current application is a 404 error.</p>
                <p>* Press any key to terminate the application.</p>
                <p>* Press CTRL+ALT+DEL to restart your computer. You will lose any unsaved information in all aplications.</p>
                <br/>
                <Link href="/">
                    <p className="continue">Press here to continue <span className="blink">_</span></p>
                </Link>
                
            </div>
        </div>
}

export default Lost