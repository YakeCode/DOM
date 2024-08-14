const parent = document.getElementById("parent")

console.log(parent)

const children = parent.children;

console.log(children)

const firstChild = parent.firstElementChild

console.log(firstChild)

const lastChild = parent.lastElementChild

console.log(lastChild)

const previousSibling = parent.previousElementSibling

console.log(previousSibling)

const nextSibling = parent.nextElementSibling

console.log(nextSibling)

const parent2 = parent.parentNode

console.log(parent2)

const grandGrandParent = parent.closest( "header" )

console.log(grandGrandParent)



// parentNode; // live NodeList
// parentElement; // non-live HTMLCollection
// closest(selector); // este último es el más utilizado