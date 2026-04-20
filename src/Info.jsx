import InfoComponet from "./InfoComponet"
function Info(){
    return(
        <>
        <div className="about">
            <h1>I'm passionate about innovation</h1>
        </div>
        <div className="Cards">
           <div className="infoCard">
          <InfoComponet
          story="Hi My name is Sarvar Rozimov and 
I'm a ForntEnd Developer.
Right now I'm just biginner developer
and I have this really good idea to 
make me rich and change world.
Let me give advice for you, 
if you have idea you think is genuinely good, 
don't let someone talk you out of it.
If you go to work section, you can see 
what i made over the months.
If you go to Example section, you can see
one of my projects"
          ></InfoComponet>
        </div> 
        </div>
        
        </>
    )
}
export default Info