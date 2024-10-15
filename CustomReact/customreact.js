function customRender(reactElement, container){
  /*
  const domElement = document.createElement(reactElement.type)
  domElement.innerHTML = reactElement.children
  domElement.setAttribute('href',reactElement.props.href)
  domElement.setAttribute('target',reactElement.props.target)
  container.appendChild(domElement)
  */

  const domElement = document.createElement(reactElement.type)
  domElement.innerHTML = reactElement.children
  for (const prop in reactElement.props) {
    if(prop === children) continue; 
    domElement.setAttribute(prop, reactElement.props[prop])     
    }
  container.appendChild(domElement)
  }

const reactElement = {
  type: 'a',               //anchor tag
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  children: 'Click me to visit google'
} //react ko through yesari aauxah ,harek element yesari lekhnu paro

const mainContainer = document.querySelector('#root');

//method to render ..yo element inject garnah root ko vitra

customRender(reactElement, mainContainer)

/* react mah kasari mathi ko caldainah kinah ki react afno rule hunxa type ,props haru taha hudainah 
const reactElement = React.createElement (
 'a',
 {href: 'https://google.com',target: '_blank'}
 'click me to visit google'
 variable_name-------evaluated expression
)

 React.createRoot(document.getElementById('root')).render(
    reactElement
 )
*/
