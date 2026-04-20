import WorkComponet from "./WorkComponet"
import Snake from "./assets/Snake.png"
import weather from "./assets/weather.png"
import backgammon from "./assets/backgammon.png"
function Work(){
    return(
        <>
        <div className="card">
           <WorkComponet
         Url = 'https://github.com/rozimovsarvar580-cloud/Snake_Game'
        title='Snake Game'
        what = 'Java Script'
        description='Simple, Entertaining Game '
        url={Snake}></WorkComponet> 
        </div>
        <div className="card">
           <WorkComponet
           Url = 'https://github.com/rozimovsarvar580-cloud/weather_app'
        title='Wheather App'
        what = 'Java Script'
        description='Shows the current weather'
        url={weather}></WorkComponet> 
        </div>
        <div className="card">
           <WorkComponet
           Url = 'https://github.com/rozimovsarvar580-cloud/BackGammon'
        title='Backgammon'
        what = 'Java Script'
        description='You can play Backgammon'
        url={backgammon}></WorkComponet> 
        </div>
        </>
    )
}
export default Work