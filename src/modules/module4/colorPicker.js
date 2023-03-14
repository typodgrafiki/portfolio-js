const changeColor = () => {
    const colorPicker = document.querySelector('#colorPicker');
    const section = document.querySelector('#changeColor')

    colorPicker.addEventListener('change', () => {
        section.style.backgroundColor = colorPicker.value;
        
    });   
}

export default changeColor