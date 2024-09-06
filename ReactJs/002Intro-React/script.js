function customRender(element,container){
    /*
    const domElement = document.createElement(element.type);
    domElement.innerHTML = element.children;
    domElement.setAttribute("href",element.props.href);
    domElement.setAttribute("target",element.props.target);
    container.appendChild(domElement);
    */
    const domElement = document.createElement(element.type);
    domElement.innerHTML = element.children;
    for(const property in element.props){
        domElement.setAttribute(property,element.props[property]);
    }
    container.appendChild(domElement);

}

const reactElement = {
    type: 'a',
    props:{
        href:"www.google.com",
        target:"_blank"
    },
    children:"Click me to visit"
}

const  root = document.querySelector("#root");
customRender(reactElement,root);