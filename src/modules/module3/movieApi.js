const favoriteMoviesLocal = JSON.parse(localStorage.getItem('favoriteMovies'));
const favoriteMoviesArrayBlank = [];
const favoriteMoviesArray = [...favoriteMoviesArrayBlank, ...favoriteMoviesLocal];

const getApi = (typeQuery, value) => {
    
    const apiKey = '0ab20670f56b4853575a9d9cd9d9c77b';
    
    if (typeQuery === 'randomMovieBtn') {
        return `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&language=pl`
    }else{
        return `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=pl&query=${value}`
    }
    
}

const favoriteBtnCreate = (id) => {
    
    const btn = document.createElement('button');
    const icon = document.createElement('img');
    
    btn.classList.add('btn', 'btn-default', 'btn-img-left');
    icon.setAttribute('alt', 'love');
    icon.setAttribute('width', '22');
    icon.setAttribute('height', '22');
    
    if(favoriteMoviesArray.includes(id)){
        icon.setAttribute('src', './icons/heart.svg');
        btn.textContent = 'Usuń';    
    }else{
        icon.setAttribute('src', './icons/love.svg');
        btn.textContent = 'Dodaj';    
    }
    
    btn.prepend(icon);
    return btn
}

function favoriteBtnHandler(id, el) {
    
    
    
    if (!favoriteMoviesArray.includes(id)) {
        favoriteMoviesArray.push(id);
        el.target.innerHTML = '<img src="./icons/heart.svg" width="22" height="22" /> Usuń';
    }else{
        const element = favoriteMoviesArray.indexOf(id);
        favoriteMoviesArray.splice(element, 1);
        el.target.innerHTML = '<img src="./icons/love.svg" width="22" height="22" /> Dodaj';
    }

    localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMoviesArray));

}

const movieList = (el, title, input) => {
    
    const queryApi = getApi(el.target.id, input.value);
    if (input.value || el.target.id == 'randomMovieBtn' || el.target.id == 'favoriteMovieBtn') {
        
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
                        
                        const id = element.id;
                        
                        const item = document.createElement('div');
                        item.classList.add('item', 'flex', 'flex-column', 'panel', 'radius');
                        
                        const panelBody = document.createElement('div');
                        panelBody.classList.add('panel-body');
                        
                        const image = element.poster_path ? `<img src="https://image.tmdb.org/t/p/w500${element.poster_path}" class="img-responsive radius-top" width="500" height="742" alt="${element.title}" />` : `<img src="https://via.placeholder.com/500x742" class="img-responsive radius-top" width="500" height="742" alt="blank" style="opacity.7;" />`;
                        
                        const favoriteBtn = favoriteBtnCreate(id);
                        
                        panelBody.innerHTML = `
                            <p class="h5 bold">${element.title}</p>
                            <p class="small">${element.overview}</p>
                        `
                        panelBody.append(favoriteBtn);
                        
                        item.innerHTML = image;
                        item.append(panelBody);
                        movieList.append(item);
                    
                        favoriteBtn.addEventListener('click', (el) => {
                            favoriteBtnHandler(id, el);
                        })
                        
                    });
                }
                
                movieSection.append(movieList);
                 
                const clearBtn = document.createElement('button');
                clearBtn.setAttribute('id', 'clearBtn');
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

const clearMovie = () => {
    
    const clearBtn = document.getElementById('clearBtn');
    const listMovieElement = document.getElementById('movieList');
    if(listMovieElement){
        listMovieElement.remove();
    }
    if(clearBtn){
        clearBtn.remove();   
    }
}

export { movieList }
