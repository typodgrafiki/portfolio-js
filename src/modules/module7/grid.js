function gridFn() {
    const gridEl = document.querySelector('#gridSection .grid');
    const btn1 = document.querySelector('#gridBtn1');
    const btn2 = document.querySelector('#gridBtn2');
    const btn3 = document.querySelector('#gridBtn3');

    function btn1Fn() {
        gridEl.classList.remove('grid_col_custom', 'grid_col_8');
        gridEl.classList.toggle('grid_col_5-first-2-2');
    }
    
    function btn2Fn() {
        gridEl.classList.remove('grid_col_5-first-2-2', 'grid_col_8');
        gridEl.classList.toggle('grid_col_custom');
    }
    
    function btn3Fn() {
        gridEl.classList.remove('grid_col_5-first-2-2', 'grid_col_custom');
        gridEl.classList.toggle('grid_col_8');
    }

    btn1.addEventListener('click', btn1Fn);
    btn2.addEventListener('click', btn2Fn);
    btn3.addEventListener('click', btn3Fn);
}

export default gridFn