const movieRandom = (e) => {
    
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=0ab20670f56b4853575a9d9cd9d9c77b")
        .then(res => res.json())
        .then(data => {
            
            const movieSection = document.querySelector('#moviesApi');
            const randomList = document.createElement('div');
            randomList.setAttribute('id', 'randomList');
            randomList.classList.add('flex', 'gap2', 'flex-column');
            randomList.style.marginTop = '20px';
            
            data.results.slice(0,3).forEach(element => {
                
                const item = document.createElement('div');
                item.classList.add('item', 'flex', 'flex-column', 'panel', 'panel-body', 'radius');
                
                item.innerHTML = `
                    <p class="h4 bold">${element.title}</p>
                    <p>${element.overview}</p>
                `
                randomList.append(item);
            });
            
            movieSection.append(randomList);
            
        })
        .catch(error => console.log("Błąd: ", error));
}

export { movieRandom }
