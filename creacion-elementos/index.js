const contentArea = document.getElementById('contentArea')
const list = document.getElementById('listArea')




contentArea.innerHTML= '<p>Nuevo p</p>'
list.innerHTML+= '<li>elemento 5 - mal performance</li>'

contentArea.insertAdjacentHTML('beforeend', '<p>este no modifico el texto original</p>')//posicion, elemento a ingresar

list.insertAdjacentHTML('beforeend','<li>elemento 6</li>')

/*-----------------------------------------------------------------------------------------------------*/ 

const newPElement =document.createElement('p')

newPElement.textContent = 'soy p con document.createElement'

contentArea.append(newPElement)

const newItenm = document.createElement('li')
newItenm.textContent  = 'item -createElement'

list.prepend(newItenm)

/*------------------------------------------------------------------------------- */

const clon = contentArea.cloneNode(true)

console.log(clon)

const pes = document.createElement('p')

pes.textContent= 'p para remplaxzar el p anterior'

const div = document.createElement('div')

div.append(clon)

document.body.append(div)

contentArea.lastElementChild.replaceWith(pes)

console.log(pes.textContent)

clon.firstChild.textContent = 'soy clone'

clon.firstChild.id = 'puseId'

console.log(list.children[3])