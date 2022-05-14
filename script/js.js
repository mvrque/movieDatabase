
document.querySelector('#searchMovie').addEventListener('click', searchByTitle)
//document.querySelector('#topMovies').addEventListener('click', showTopMovies)


document.querySelector('#movieName').addEventListener('keypress',function(event){
    if(event.key === 'Enter'){
        searchByTitle()
    }
})

function searchByTitle(){

    
    const choice = document.querySelector('#movieName').value
    const url = 'https://online-movie-database.p.rapidapi.com/auto-complete?q='+choice
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
            'X-RapidAPI-Key': 'aafde9a81dmshcbc1fef151db9c0p1764ecjsnfc52d3dc0411'
        }
    };

    fetch(url, options)
        .then(response => response.json())
        .then(response => { 
            
            console.log(response)
    
                // for(el = 0 ; el <= response.d.length; el++){
                //     console.log(response.d[2])
                //     document.querySelector(`#name${el}`).innerText = response.d[el].l
                //     document.querySelector(`#actors${el}`).innerText = response.d[el].s
                //     document.querySelector(`#img${el}`).src = response.d[el].i.imageUrl
                // }
                let newArr = []
                let el = 0;
                while(el < response.d.length){
                    if(response.d[el].q === 'feature'){
                        newArr.push(response.d[el]) 
                    }
                    el++
                }
                console.log(newArr)
                newArr.forEach(element => {
                    let index = newArr.indexOf(element)
                    console.log(index)
                    document.querySelector(`#type${index}`).innerText = 'Movie'
                    document.querySelector(`#name${index}`).innerText = response.d[index].l + '('+response.d[index].y+')'
                    document.querySelector(`#actors${index}`).innerText = response.d[index].s
                    document.querySelector(`#img${index}`).src = response.d[index].i.imageUrl
                });
                
        })
        .catch(err => console.error(err));
}




// function showTopMovies(){
//     const options1 = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
//             'X-RapidAPI-Key': 'aafde9a81dmshcbc1fef151db9c0p1764ecjsnfc52d3dc0411'
//         }
//     };
    
//     fetch('https://online-movie-database.p.rapidapi.com/title/get-top-rated-movies', options1)
//         .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(err => console.error(err));


        
//     const options2 = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
//             'X-RapidAPI-Key': 'aafde9a81dmshcbc1fef151db9c0p1764ecjsnfc52d3dc0411'
//         }
//     };
    
//     fetch('https://online-movie-database.p.rapidapi.com/title/get-overview-details?tconst=tt0944947&currentCountry=US', options2)
//         .then(data => data.json())
//         .then(data => console.log())
//         .catch(err => console.error(err));
// }