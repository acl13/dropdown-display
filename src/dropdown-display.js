const dropdownDisplay = function() {
    const dropdown = document.querySelectorAll('.dropdown-content');
    dropdown.forEach(item => {
        if (item.classList.contains('visible')) {
            item.classList.remove('visible');
        } else {
            item.classList.add('visible');
        }
    });
}

export { dropdownDisplay };