const filterPortfolioData = (data) => {
    let Frontend = []
    let UI_UX = []
    let FullStack = []
    let Backend = []

    data.forEach(post => {
        const { etiqueta } = post
        switch (etiqueta) {
            case "Frontend":
                Frontend.push(post)
                break;
            case "Backend":
                Backend.push(post)
                break;
            case "UI/UX":
                UI_UX.push(post)
                break;
            default:
                FullStack.push(post)
                break;
        }
    });
    return [{ title: "FrontEnd", content: Frontend }, { title: "BackEnd", content: Backend }, { title: "UX/UI Design", content: UI_UX }, { title: "FullStack", content: FullStack }]
}
const TreeMenu = ({ menu, treeName, actions }) => {
    return <ol className="tree">
        {
            filterPortfolioData(menu).map((menuLevel) => {
                const { content, title } = menuLevel
                return <li key={Math.random()}>
                    <label htmlFor={title}>{title}</label>
                    <input type="checkbox" defaultChecked={true} id={title} />
                    <ol>
                        {
                            content.map(file => {
                                return <li key={Math.random()} onClick={() => actions.open([treeName, file.titulo, file])} className="file"><span>{file.titulo}</span></li>
                            })
                        }

                    </ol>
                </li>
            })
        }



    </ol>
}

export default TreeMenu
