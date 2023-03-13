const movieRandom = (e) => {
    // console.log(e.target);
    
    // fetch('https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>')    
    // https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>
    
    
    fetch("https://restcountries.com/v3.1/name/Poland")
        .then(res => {
            console.log(res);
        })
    
}

export { movieRandom }
