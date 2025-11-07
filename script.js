document.addEventListener('DOMContentLoaded', (event) => {
    const checkbox = document.getElementById('checkbox');
    const body = document.body;

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
        }
        
});

body.classList.add('light-mode');
});