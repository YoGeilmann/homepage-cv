document.addEventListener("DOMContentLoaded", function() {
    loadComponent('header', 'components/header/header.html');
    loadComponent('main', 'components/main/main.html');
    loadComponent('footer', 'components/footer/footer.html');
});

function loadComponent(id, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error('Error loading component:', error));
}
