function gridFn() {
    const gridEl = document.querySelector('#gridSection .grid');
    const btn1 = document.querySelector('#gridBtn1');

    function btn1Fn() {
        gridEl.classList.add('grid_col_5-first-2-2');
    }

    btn1.addEventListener('click', btn1Fn);
}

export default gridFn