const init = () => {
    //grabbed form
    const inputForm = document.querySelector('form');
    console.log(inputForm);
    //make eventListener for the form and prevent default

    inputForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.querySelector('#searchByID')
        console.log(input.value)

     //make fetch request
     fetch(`http://localhost:3000/movies/${input.value}`)
     .then(res => res.json())
     .then((data) => {
        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p'); 
        
        title.innerText = data.title;
        summary.innerText = data.summary;
    })   
    })

}

document.addEventListener('DOMContentLoaded', init);