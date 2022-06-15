
document.querySelector('#searchMovie').addEventListener('click', searchByTitle)



document.querySelector('#movieName').addEventListener('keypress',function(event){
    if(event.key === 'Enter'){
        searchByTitle()
    }
})

function searchByTitle(){
    const choice = document.querySelector('#movieName').value
    const url = `https://movie-database-alternative.p.rapidapi.com/?s=${choice}&r=json&page=1`
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'aafde9a81dmshcbc1fef151db9c0p1764ecjsnfc52d3dc0411',
            'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
        }
    };

    fetch(url, options)
        .then(response => response.json())
        .then(response => { 
            let data = response.Search
            console.log(data)
           
            
            const divList = document.getElementsByClassName('searchResult')
            console.log(divList[0].childNodes[5].innerText)
            
            data.forEach((element, index) => {
                //add movie image to the DOM
                divList[index].childNodes[1].firstChild.src = element.Poster
                //add movie name to the DOM
                divList[index].childNodes[3].innerText = element.Title
                //add movie year to the DOM
                divList[index].childNodes[5].innerText = element.Year
            });
        })
        .catch(err => console.error(err));
}



