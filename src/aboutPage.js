import homePage from './homePage';
import menuPage from './menuPage';
import contactPage from './contactPage';

const aboutPage = function() {
    document.querySelector(".content").innerHTML = ""
    document.body.style.backgroundImage = "none"


    let container = document.createElement("DIV")
    let tabButtons = document.createElement("DIV")
    let homePageButton = document.createElement("button")
    let menuPageButton = document.createElement("button")
    let aboutPageButton = document.createElement("button")
    let contactPageButton = document.createElement("button")
    let hOne = document.createElement("h1")
    let middleDivision = document.createElement("DIV")
    let para = document.createElement("p")
    let nodeOne = document.createTextNode("Jin Cheng De Dian")
    let nodeTwo = document.createTextNode("Founded in 1875 on the outskirts of a desert mining town. The restaurant was originally funded by the US government to accomodate the many slaves..I mean Chinese miners and railroad workers. After much success our family grew along with the restaurant. Now there are restaurants all over the country.")
    let homePageText = document.createTextNode("Home")
    let menuPageText = document.createTextNode("Menu")
    let aboutPageText = document.createTextNode("About")
    let contactPageText= document.createTextNode("Contact")
    let content = document.querySelector(".content")


    content.appendChild(container)

    
    container.className = "container"
    tabButtons.className = "tabButtons"
    homePageButton.id = "homePage"
    middleDivision.className = "middleDivision"
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
    hOne.appendChild(nodeOne)
    container.appendChild(middleDivision)
    container.appendChild(para)
  
    
    para.appendChild(nodeTwo)



    // div class="container"
    container.style.margin = "0px 0px 0px 800px"
    container.style.position = "relative"
    container.style.textAlign = "center"
    container.style.color = "black"
    // h1
    hOne.style.margin = "0px 0px 0px -800px"
    hOne.style.display = "flex"
    hOne.style.fontSize = "2rem"
    hOne.style.opacity = "0.8"
    // para 
    para.style.display = "flex"
    para.style.fontStyle = "italic"
    para.style.margin = "20px 0px 0px -800px"
    para.style.fontSize = "1.5rem"
    // div class="tabButtons"
    tabButtons.style.margin = "0px 0px 0px 200px"
    tabButtons.style.alignItems = "flex-end"
    tabButtons.style.display = "flex"
    // homePageButton
    homePageButton.style.backgroundColor = "white"
    homePageButton.style.color = "black"
    homePageButton.style.borderTop = "1px solid white"
    homePageButton.style.borderRight = "1px solid white"
    homePageButton.style.borderBottom = "2px solid black"
    homePageButton.style.borderLeft = "2px inset black"
    homePageButton.style.marginRight = "20px"
    homePageButton.style.height = "40px"
    homePageButton.style.width = "100px"
    homePageButton.style.fontSize = "2rem"
    // menuButton
    menuPageButton.style.backgroundColor = "white"
    menuPageButton.style.color = "black"
    menuPageButton.style.borderTop = "1px solid white"
    menuPageButton.style.borderRight = "1px solid white"
    menuPageButton.style.borderBottom = "2px solid black"
    menuPageButton.style.borderLeft = "2px inset black"
    menuPageButton.style.marginRight = "20px"
    menuPageButton.style.height = "40px"
    menuPageButton.style.width = "100px"
    menuPageButton.style.fontSize = "2rem"
    // aboutPage
    aboutPageButton.style.backgroundColor = "white"
    aboutPageButton.style.color = "blackwhite"
    aboutPageButton.style.borderTop = "1px solid white"
    aboutPageButton.style.borderRight = "1px solid white"
    aboutPageButton.style.borderBottom = "2px solid black"
    aboutPageButton.style.borderLeft = "2px inset black"
    aboutPageButton.style.marginRight = "20px"
    aboutPageButton.style.height = "40px"
    aboutPageButton.style.width = "100px"
    aboutPageButton.style.fontSize = "2rem"
    // contactPage
    contactPageButton.style.backgroundColor = "white"
    contactPageButton.style.color = "black"
    contactPageButton.style.borderTop = "1px solid white"
    contactPageButton.style.borderRight = "1px solid white"
    contactPageButton.style.borderBottom = "2px solid black"
    contactPageButton.style.borderLeft = "2px inset black"
    contactPageButton.style.marginRight = "20px"
    contactPageButton.style.height = "40px"
    contactPageButton.style.width = "100px"
    contactPageButton.style.fontSize = "2rem"
    // middleDivision
    middleDivision.style.backgroundImage = "url(\"pictures/aboutPage.jpg\")"
    middleDivision.style.height = "500px"
    middleDivision.style.width = "1600px"
    middleDivision.style.margin = "50px 0px 0px -800px"
    middleDivision.style.border = "1px solid black"
    middleDivision.style.backgroundSize = "1600px 500px"
    middleDivision.style.backgroundRepeat = "no-repeat"





    document.querySelector("#menu").addEventListener("click", menuPage)
    document.querySelector("#homePage").addEventListener("click", homePage)
    document.querySelector("#about").addEventListener("click", aboutPage)
    document.querySelector("#contact").addEventListener("click", contactPage)


}

export default aboutPage