const init = () => {
    const inputForm = document.querySelector('form');

    inputForm.addEventListener("submit", (e) => {
        e.preventDefault();
        //e.target.children[1].value; Same Result for const form
        // or using DOM to select the value of input user
        const input = document.querySelector('input#searchByID')

        fetch(`http://localhost:3000/movies/${input.value}`)
            .then(res => res.json())
            .then(data => {
                const title = document.querySelector('section#movieDetails h4');
                const summary = document.querySelector('section#movieDetails p');
                title.innerHTML = data.title;
                summary.innerHTML = data.summary;
            })
    });
}

document.addEventListener('DOMContentLoaded', init);