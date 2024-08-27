document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generate-cat');
    const catImageContainer = document.getElementById('cat-image-container');

    generateButton.addEventListener('click', () => {
        generateButton.disabled = true;
        generateButton.textContent = 'Generating...';

        fetch('https://api.thecatapi.com/v1/images/search')
            .then(response => response.json())
            .then(data => {
                const imageUrl = data[0].url;
                const img = document.createElement('img');
                img.src = imageUrl;
                img.alt = 'Random cat image';
                
                catImageContainer.innerHTML = '';
                catImageContainer.appendChild(img);
            })
            .catch(error => {
                console.error('Error fetching cat image:', error);
                catImageContainer.textContent = 'Error fetching cat image. Please try again.';
            })
            .finally(() => {
                generateButton.disabled = false;
                generateButton.textContent = 'Generate Cat';
            });
    });
});