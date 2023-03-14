const getApi = (typeQuery, value) => {
    
    const apiKey = '0ab20670f56b4853575a9d9cd9d9c77b';
    
    if (typeQuery === 'randomMovieBtn') {
        return `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&language=pl`    
    }else{
        return `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=pl&query=${value}`
    }
    
}

const movieList = (el, title, input) => {
    
    const queryApi = getApi(el.target.id, input.value);
    
    if (input.value || el.target.id == 'randomMovieBtn') {
        
        clearMovie();
        
        fetch(queryApi)
            .then(res => res.json())
            .then(data => {
                
                const movieSection = document.querySelector('#moviesApi');
                const movieList = document.createElement('div');
                movieList.setAttribute('id', 'movieList');
                movieList.classList.add('grid', 'gap2', 'grid_col_4');
                movieList.style.marginTop = '30px';
                
                const titleList = document.createElement('div');
                titleList.style.gridColumn = 'span 4';
                titleList.textContent = data.results.length > 0 ? title : 'Brak wyników';
                titleList.classList.add('h3', 'text-center', 'bold');
                movieList.append(titleList);
                
                if (data.results.length > 0) {
                    
                    data.results.forEach(element => {
                    
                        const item = document.createElement('div');
                        item.classList.add('item', 'flex', 'flex-column', 'panel', 'radius');
                        
                        const image = element.poster_path ? `<img src="https://image.tmdb.org/t/p/w500${element.poster_path}" class="img-responsive radius-top" width="500" height="742" alt="${element.title}" />` : `<img src="https://via.placeholder.com/500x742" class="img-responsive radius-top" width="500" height="742" alt="blank" style="opacity.7;" />` ; 
                        
                        item.innerHTML = `
                            ${image}
                            <div class="panel-body">
                                <p class="h5 bold">${element.title}</p>
                                <p class="small">${element.overview}</p>
                            </div>
                        `
                        movieList.append(item);
                    });
                    
                }else{
                    console.log('nie ma ni')
                }
                
                movieSection.append(movieList);
                 
                const clearBtn = document.createElement('button');
                clearBtn.classList.add('btn', 'btn-primary', 'radius');
                clearBtn.textContent = 'Wyczyść';
                clearBtn.style.marginTop = '20px';
                movieSection.append(clearBtn);
                clearBtn.addEventListener('click', function() {
                    clearMovie(clearBtn);   
                });
                
            })
            .catch(error => console.log("Błąd: ", error));
    } else {
        alert('Pole nie może być puste.');
    }
}

const clearMovie = (clearBtn) => {
    const listMovieElement = document.getElementById('movieList');
    if(listMovieElement){
        listMovieElement.remove();
    }
    if(clearBtn){
        clearBtn.remove();
    }
}

export { movieList }
