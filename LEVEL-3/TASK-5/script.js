function fetchJoke(){
    const jokeContainer = document.getElementById('joke-container');
    jokeContainer.innerHTML = '<p>Loading joke...</p>';

    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            const joke = data.value;

            // Create HTML elements to display the joke
            const jokeElement = document.createElement('div');
            jokeElement.classList.add('joke-container');

            const jokeText = document.createElement('p');
            jokeText.classList.add('joke');
            jokeText.textContent = joke;

            jokeElement.appendChild(jokeText);
            jokeContainer.innerHTML = ''; // Clear loading message
            jokeContainer.appendChild(jokeElement);
        })
        .catch(error => {
            jokeContainer.innerHTML = '<p>Failed to fetch joke. Please try again later.</p>';
            console.error('Error fetching joke:', error);
        });
}
