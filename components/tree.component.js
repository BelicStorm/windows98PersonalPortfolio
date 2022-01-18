const filterPortfolioData = (data) => {
    let Frontend = []
    let FullStack = []
    let Backend = []

    data.forEach(post => {
        const {etiqueta} = post
        if (etiqueta==="Frontend") {
            Frontend.push(post)
        } else if (etiqueta==="Backend") {
            Backend.push(post)
        }else {
            FullStack.push(post)
        }
    });
    return [{title:"FrontEnd",content:Frontend},{title:"BackEnd",content:Backend},{title:"FullStack",content:FullStack}]
}
const TreeMenu = ({menu,treeName,actions}) => {
    return <ol className="tree">
    {
        filterPortfolioData(menu).map((menuLevel)=>{
            const {content, title} = menuLevel
            return <li key={Math.random()}>
                        <label htmlFor={title}>{title}</label>
                        <input type="checkbox" defaultChecked={true} id={title} />
                        <ol>
                            {
                                content.map(file=>{
                                    return <li key={Math.random()} onClick={()=>actions.open([treeName,file.titulo,file])} className="file"><span>{file.titulo}</span></li>
                                })
                            }
                           
                        </ol>
                    </li>
        })
    }
    

    
  </ol>
}

export default TreeMenu
