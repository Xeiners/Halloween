let text = document.getElementById('titre');
let treeLeft = document.getElementById('tree-left');
let treeRight = document.getElementById('tree-right');
let gateRight = document.getElementById('gate-right');
let gateLeft = document.getElementById('gate-left');


window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 1.5 + 'px';

    treeLeft.style.left = value * -0.5 + 'px';
    treeRight.style.right = value * -.5 + 'px';

    gateRight.style.left = value * -0.5 + 'px';
    gateLeft.style.left = value * 0.5 + 'px';



});