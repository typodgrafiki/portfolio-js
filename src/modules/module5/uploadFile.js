const inputUpload = document.getElementById('fileUploadInput');
const customUpload = document.querySelector('#fileUpload .btn-dot');
const customUploadText = customUpload.textContent;
const btnSend = document.querySelector('#fileUpload .btn-primary');
const btnSendText = btnSend.textContent;
const progressBar = document.querySelector('#progressBar');

const fileUpload = () => {
    
    customUpload.addEventListener('click', function() {
        inputUpload.click();
    });

    inputUpload.addEventListener('change', function() {
        const file = inputUpload.files[0];
        if (file){
            const fileName = file.name;
            const fileSize = file.size;
            const fileExtension = fileName.split(".").pop().toLowerCase();

            if (fileExtension === 'jpg' || fileExtension === 'jpeg' || fileExtension === 'png') {
                
                customUpload.textContent = fileName;
                btnSend.removeAttribute('disabled');
                
            }  else {
                reset();
                alert('Plik musi posiadać rozszerzenie *.jpg, *.jpeg albo *.png')
            }
        }else{
            reset();        
        }
  
    });  
    
    
} 

const sendFile = (e) => {
    e.preventDefault();
    
    let progress = 0;
    let i = 0;
    
    btnSend.classList.add('loading');

    function progressFn() {
        
        progressBar.style.width = `${progress}%` ;
        progress += 20;
        
        if (i < 5) {
            setTimeout(progressFn, 1000);
        }else{
            btnSend.classList.remove('loading');
            // const completeInfo = document.querySelector('.');
            
            btnSend.textContent = 'Wysłano';
            
            reset();
            
            setTimeout(function(){
                btnSend.textContent = btnSendText;
            }, 2000);
        }

        i++;
    }

    setTimeout(progressFn, 1000);
    
}  

const reset = () => {
    customUpload.textContent = customUploadText;
}

btnSend.addEventListener('click', sendFile);

export default fileUpload