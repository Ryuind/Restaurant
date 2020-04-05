import menuPage from './menuPage';
import aboutPage from './aboutPage';
import contactPage from './contactPage';

const homePage = function() {
    document.querySelector(".content").innerHTML = ""

    let container = document.createElement("DIV")
    let tabButtons = document.createElement("DIV")
    let homePageButton = document.createElement("button")
    let menuPageButton = document.createElement("button")
    let aboutPageButton = document.createElement("button")
    let contactPageButton = document.createElement("button")
    let hOne = document.createElement("h1")
    let para = document.createElement("p")
    let nodeOne = document.createTextNode("Jin Cheng De Dian")
    let nodeTwo = document.createTextNode("The Finest Chinese Gourmet")
    let homePageText = document.createTextNode("Home")
    let menuPageText = document.createTextNode("Menu")
    let aboutPageText = document.createTextNode("About")
    let contactPageText= document.createTextNode("Contact")
    let content = document.querySelector(".content")


    content.appendChild(container)
  
    container.className = "container"
    tabButtons.className = "tabButtons"
    homePageButton.id = "homePage"
    menuPageButton.id = "menu"
    aboutPageButton.id = "about"
    contactPageButton.id = "contact"
  
    
  
  
    container.appendChild(tabButtons)
    tabButtons.appendChild(homePageButton)
    tabButtons.appendChild(menuPageButton)
    tabButtons.appendChild(aboutPageButton)
    tabButtons.appendChild(contactPageButton)


    homePageButton.appendChild(homePageText)
    menuPageButton.appendChild(menuPageText)
    aboutPageButton.appendChild(aboutPageText)
    contactPageButton.appendChild(contactPageText)



    container.appendChild(hOne)
    container.appendChild(para)
  
    hOne.appendChild(nodeOne)
    para.appendChild(nodeTwo)
    


    // style
    // body
    document.body.style.position = "absolute"
    document.body.style.backgroundImage = "url(\"pictures/homePage.jpg\")"
    document.body.style.backgroundRepeat = "no-repeat"
    document.body.style.backgroundSize = "100% 1600px"
    document.body.style.top = "0"
    document.body.style.left = "0"
    // div class="container"
    container.style.margin = "0px 0px 0px 800px"
    container.style.position = "relative"
    container.style.textAlign = "center"
    container.style.color = "aliceblue"
    // h1
    hOne.style.margin = "300px 0px 0px -100px"
    hOne.style.fontSize = "4rem"
    hOne.style.opacity = "0.8"
    // para 
    
    para.style.fontStyle = "italic"
    // div class="tabButtons"
    tabButtons.style.margin = "0px 0px 0px 200px"
    tabButtons.style.alignItems = "flex-end"
    
    // homePageButton
    homePageButton.style.backgroundColor = "black"
    homePageButton.style.color = "white"
    homePageButton.style.borderTop = "1px solid black"
    homePageButton.style.borderRight = "1px solid black"
    homePageButton.style.borderBottom = "2px inset white"
    homePageButton.style.borderLeft = "2px inset white"
    homePageButton.style.marginRight = "20px"
    homePageButton.style.height = "40px"
    homePageButton.style.width = "100px"
    homePageButton.style.fontSize = "2rem"
    // menuButton
    menuPageButton.style.backgroundColor = "black"
    menuPageButton.style.color = "white"
    menuPageButton.style.borderTop = "1px solid black"
    menuPageButton.style.borderRight = "1px solid black"
    menuPageButton.style.borderBottom = "2px inset white"
    menuPageButton.style.borderLeft = "2px inset white"
    menuPageButton.style.marginRight = "20px"
    menuPageButton.style.height = "40px"
    menuPageButton.style.width = "100px"
    menuPageButton.style.fontSize = "2rem"
    // aboutPage
    aboutPageButton.style.backgroundColor = "black"
    aboutPageButton.style.color = "white"
    aboutPageButton.style.borderTop = "1px solid black"
    aboutPageButton.style.borderRight = "1px solid black"
    aboutPageButton.style.borderBottom = "2px inset white"
    aboutPageButton.style.borderLeft = "2px inset white"
    aboutPageButton.style.marginRight = "20px"
    aboutPageButton.style.height = "40px"
    aboutPageButton.style.width = "100px"
    aboutPageButton.style.fontSize = "2rem"
    // contactPage
    contactPageButton.style.backgroundColor = "black"
    contactPageButton.style.color = "white"
    contactPageButton.style.borderTop = "1px solid black"
    contactPageButton.style.borderRight = "1px solid black"
    contactPageButton.style.borderBottom = "2px inset white"
    contactPageButton.style.borderLeft = "2px inset white"
    contactPageButton.style.marginRight = "20px"
    contactPageButton.style.height = "40px"
    contactPageButton.style.width = "100px"
    contactPageButton.style.fontSize = "2rem"

    // button script

    
    document.querySelector("#menu").addEventListener("click", menuPage)
    document.querySelector("#homePage").addEventListener("click", homePage) 
    document.querySelector("#about").addEventListener("click", aboutPage)
    document.querySelector("#contact").addEventListener("click", contactPage)

    
  }

  homePage();


  export default homePage