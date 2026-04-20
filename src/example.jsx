function Example(){
    async function Info() {
         const APi = 'https://restcountries.com/v3.1/all?fields=name,capital,currencies,continents,borders,flags,languages,population,region,cca3'
        let i = 0
        let d = 0
        let a = 0
        try {
             const response  = await fetch(APi)
             const data =  await response.json()
            document.querySelector('.CArds').innerHTML = ''
            while(i<250){
                if(data[i].name.common === this.className){
                let div = document.createElement('p')
                let div2 = document.createElement('p')
                let name = document.createElement('li')
                let capital = document.createElement('li')
                let population = document.createElement('li')
                let region = document.createElement('li')
                let border = document.createElement('h1')
                let img = document.createElement('img')
                let div3 = document.createElement('p')
                    div.className = `Country`
                    div2.className = `Text`
                    document.querySelector('.CArds').appendChild(div)
                    img.src = data[i].flags.svg
                    div.appendChild(img)
                    name.textContent = 'Name:'
                    name.textContent += data[i].name.common
                    div2.appendChild(name)
                    capital.textContent = 'Capital:'
                    capital.textContent += data[i].capital
                    div2.appendChild(capital)
                    population.textContent = 'Population:'
                    population.textContent +=  data[i].population
                    div2.appendChild(population)
                    region.textContent = 'Region:'
                    region.textContent += data[i].region
                    div2.appendChild(region)
                    div.appendChild(div2)
                    const response2 = await fetch(APi)
                    const data2 = await response2.json()
                    while(d<=data[i].borders.length){
                       a = 0
                        while(a<250){
                            if(data2[a].cca3 === data[i].borders[d]){
                                console.log(data2[a])
                                let img = document.createElement('img')
                                let div4 = document.createElement('p')
                                let name = document.createElement('li')
                                document.querySelector('.CArds').appendChild(div3)
                                div3.className = 'Country2'
                                div4.className = data2[a].name.common
                                div4.onclick = Info
                                border.textContent = 'Bordering Countries'
                                div3.appendChild(border)
                                img.src = data2[a].flags.svg
                                div4.appendChild(img)
                                name.textContent = data2[a].name.common
                                div4.appendChild(name)
                                div3.appendChild(div4)
                            }
                            a++
                        }
                        d++
                    }
                }
                i++
            }
        } catch (error) {
            console.log(error)
        }
    }
 async function Getdata() {
    const APi = 'https://restcountries.com/v3.1/all?fields=name,capital,currencies,continents,borders,flags,languages,population,region'
    let i = 0
        try {
            const response  = await fetch(APi)
            const data =  await response.json()
            document.querySelector('.CArds').innerHTML = ''
            while(i<250){
                let div = document.createElement('div')
                let name = document.createElement('li')
                let capital = document.createElement('li')
                let population = document.createElement('li')
                let region = document.createElement('li')
                let img = document.createElement('img')
                if(document.querySelector('input').value){
                  if(data[i].name.common.includes(document.querySelector('input').value)){
                    div.className = `${data[i].name.common}`
                    document.querySelector('.CArds').appendChild(div)
                     div.onclick = Info 
                    img.src = data[i].flags.svg
                    div.appendChild(img)
                    name.textContent = 'Name:'
                    name.textContent += data[i].name.common
                    div.appendChild(name)
                    capital.textContent = 'Capital:'
                    capital.textContent += data[i].capital
                    div.appendChild(capital)
                    population.textContent = 'Population:'
                    population.textContent +=  data[i].population
                    div.appendChild(population)
                    region.textContent = 'Region:'
                    region.textContent += data[i].region
                    div.appendChild(region)
                }
                }
                if(!document.querySelector('input').value){             
                 if(document.querySelector('select').value === 'All'){
                    div.className = `${data[i].name.common}`
                    div.onclick = Info 
                    document.querySelector('.CArds').appendChild(div)
                    img.src = data[i].flags.svg
                    div.appendChild(img)
                    name.textContent = 'Name:'
                    name.textContent += data[i].name.common
                    div.appendChild(name)
                    capital.textContent = 'Capital:'
                    capital.textContent += data[i].capital
                    div.appendChild(capital)
                    population.textContent = 'Population:'
                    population.textContent +=  data[i].population
                    div.appendChild(population)
                    region.textContent = 'Region:'
                    region.textContent += data[i].region
                    div.appendChild(region)
                }
                if(document.querySelector('select').value !== 'All'){
                if(document.querySelector('select').value === data[i].region){
                   div.className = `${data[i].name.common}`
                    document.querySelector('.CArds').appendChild(div)
                     div.onclick = Info 
                    img.src = data[i].flags.svg
                    div.appendChild(img)
                    name.textContent = 'Name:'
                    name.textContent += data[i].name.common
                    div.appendChild(name)
                    capital.textContent = 'Capital:'
                    capital.textContent += data[i].capital
                    div.appendChild(capital)
                    population.textContent = 'Population:'
                    population.textContent +=  data[i].population
                    div.appendChild(population)
                    region.textContent = 'Region:'
                    region.textContent += data[i].region
                    div.appendChild(region)
                }
                }   
                }
                i++
            }
        } catch (error) {
            console.log(error)
        }
    }
    Getdata()
    return(
        <>
        <input type="text" onKeyDown={Getdata}/>
        <select name="" id="" onChange={Getdata}>
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="Asia">Asia</option>
            <option value="Americas">Americas</option>
        </select>
        <div className="CArds">
        </div>
        </>
    )
}
export default Example