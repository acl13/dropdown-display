# dropdown-display
DOM mechanism for displaying and hiding a dropdown menu

Markup/Style:

HTML:

<div class='dropdown-content'>...</div>

*** Note: This element could also be a <ul></ul>, or whatever other element contains your dropdown content. The important thing is the class 'dropdown-content' ***

<button class='dropdown-btn'></button>

*** Note: I prefer the look/feel of the button placed under the dropdown content, but this is up to preference ***


CSS: 

.dropdown-content {
    visibility: hidden;
    display: none;
}

.dropdown-content.visible {
    visibility: visible;
    display: block;
}


Usage:

index.js
import { dropdownDisplay } from './dropdown-display';


