function WorkComponet(argument){
    return(
        <>
        <a href={argument.Url}>
        <h1>{argument.title} - <span> {argument.description}</span></h1>
        <h2>Made using {argument.what}</h2>
        <img src={argument.url} alt="" />
        </a>
        
        </>
    )
}
export default WorkComponet