import './style.css';
import { dropdownDisplay } from './dropdown-display';

const dropdownBtns = document.querySelectorAll('.dropdown-btn');
dropdownBtns.forEach((item) => {
    console.log('test');
    item.addEventListener('click', dropdownDisplay);
}) 