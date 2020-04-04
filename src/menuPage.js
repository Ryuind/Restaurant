import homePage from './homePage';
import aboutPage from './aboutPage';
import contactPage from './contactPage';
import foodMenu from './menuList';

const menuPage = function() {
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
    let para = document.createElement("DIV")
    let paraTwo = document.createElement("p")
    let paraLast = document.createElement("p")
    let nodeLast = document.createTextNode("Click on the food's name to see an image!")
    let nodeTwo = document.createTextNode("⏤Food Menu⏤")
    let menuDiv = document.createElement("DIV")
    let nodeOne = document.createTextNode("Jin Cheng De Dian")
    let homePageText = document.createTextNode("Home")
    let menuPageText = document.createTextNode("Menu")
    let aboutPageText = document.createTextNode("About")
    let contactPageText= document.createTextNode("Contact")
    let content = document.querySelector(".content")

    // these invisible buttons
    let Chashao = document.createElement("button")
    let Miantiao = document.createElement("button")
    let Chaomian = document.createElement("button")
    let Tangmian = document.createElement("button")
    let Zhajiangmian = document.createElement("button")
    let Lamian = document.createElement("button")
    let BeijingKaoya = document.createElement("button")
    let Hongzaoji = document.createElement("button")
    let LuohanZhai = document.createElement("button")
    let GeneralTaoChicken = document.createElement("button")

    container.appendChild(Chashao)
    container.appendChild(Miantiao)
    container.appendChild(Chaomian)
    container.appendChild(Tangmian)
    container.appendChild(Zhajiangmian)
    container.appendChild(Lamian)
    container.appendChild(BeijingKaoya)
    container.appendChild(Hongzaoji)
    container.appendChild(LuohanZhai)
    container.appendChild(GeneralTaoChicken)
    


    

    Chashao.style.position = "absolute"
    Chashao.style.margin = "750px 0px 0px -410px"
    Chashao.style.height = "20px"
    Chashao.style.width = "100px"
    Chashao.style.display = "flex"
    Chashao.style.opacity = "0"
    Chashao.style.backgroundColor = "white"
    Chashao.style.border = "none"

    Miantiao.style.position = "absolute"
    Miantiao.style.margin = "812px 0px 0px -410px"
    Miantiao.style.height = "20px"
    Miantiao.style.width = "100px"
    Miantiao.style.display = "flex"
    Miantiao.style.opacity = "0"
    Miantiao.style.backgroundColor = "white"
    Miantiao.style.border = "none"

    Chaomian.style.position = "absolute"
    Chaomian.style.margin = "913px 0px 0px -410px"
    Chaomian.style.height = "23px"
    Chaomian.style.width = "110px"
    Chaomian.style.display = "flex"
    Chaomian.style.opacity = "0"
    Chaomian.style.backgroundColor = "white"
    Chaomian.style.border = "none"

    Tangmian.style.position = "absolute"
    Tangmian.style.margin = "978px 0px 0px -410px"
    Tangmian.style.height = "23px"
    Tangmian.style.width = "130px"
    Tangmian.style.display = "flex"
    Tangmian.style.opacity = "0"
    Tangmian.style.backgroundColor = "white"
    Tangmian.style.border = "none"

    Zhajiangmian.style.position = "absolute"
    Zhajiangmian.style.margin = "1044px 0px 0px -410px"
    Zhajiangmian.style.height = "23px"
    Zhajiangmian.style.width = "140px"
    Zhajiangmian.style.display = "flex"
    Zhajiangmian.style.opacity = "0"
    Zhajiangmian.style.backgroundColor = "white"
    Zhajiangmian.style.border = "none"

    Lamian.style.position = "absolute"
    Lamian.style.margin = "1105px 0px 0px -410px"
    Lamian.style.height = "23px"
    Lamian.style.width = "140px"
    Lamian.style.display = "flex"
    Lamian.style.opacity = "0"
    Lamian.style.backgroundColor = "white"
    Lamian.style.border = "none"

    BeijingKaoya.style.position = "absolute"
    BeijingKaoya.style.margin = "1190px 0px 0px -410px"
    BeijingKaoya.style.height = "23px"
    BeijingKaoya.style.width = "140px"
    BeijingKaoya.style.display = "flex"
    BeijingKaoya.style.opacity = "0"
    BeijingKaoya.style.backgroundColor = "white"
    BeijingKaoya.style.border = "none"

    Hongzaoji.style.position = "absolute"
    Hongzaoji.style.margin = "1272px 0px 0px -410px"
    Hongzaoji.style.height = "25px"
    Hongzaoji.style.width = "110px"
    Hongzaoji.style.display = "flex"
    Hongzaoji.style.opacity = "0"
    Hongzaoji.style.backgroundColor = "white"
    Hongzaoji.style.border = "none"

    LuohanZhai.style.position = "absolute"
    LuohanZhai.style.margin = "1395px 0px 0px -410px"
    LuohanZhai.style.height = "23px"
    LuohanZhai.style.width = "140px"
    LuohanZhai.style.display = "flex"
    LuohanZhai.style.opacity = "0"
    LuohanZhai.style.backgroundColor = "white"
    LuohanZhai.style.border = "none"

    GeneralTaoChicken.style.position = "absolute"
    GeneralTaoChicken.style.margin = "1475px 0px 0px -410px"
    GeneralTaoChicken.style.height = "23px"
    GeneralTaoChicken.style.width = "230px"
    GeneralTaoChicken.style.display = "flex"
    GeneralTaoChicken.style.opacity = "0"
    GeneralTaoChicken.style.backgroundColor = "white"
    GeneralTaoChicken.style.border = "none"






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
    paraTwo.appendChild(nodeTwo)
    paraLast.appendChild(nodeLast)



    
    container.appendChild(hOne)
    hOne.appendChild(nodeOne)
    container.appendChild(middleDivision)
    container.appendChild(menuDiv)
    container.appendChild(paraTwo)
    container.appendChild(para)
    container.appendChild(paraLast)


    const createMenuItem = (menuItem) => {
        let menuElement = document.createElement('DIV')
        let menuName = document.createElement('p')
        let menuNameText = document.createTextNode(menuItem.name)
        let menuPrice = document.createElement('p')
        let menuPriceText = document.createTextNode(menuItem.price)
        let menuDescript = document.createElement('p')
        let menuDescriptText = document.createTextNode(menuItem.description)
        menuName.appendChild(menuNameText)
        menuPrice.appendChild(menuPriceText)
        menuDescript.appendChild(menuDescriptText)


        menuName.className = "menuNameID"
        menuPrice.id = "menuPriceID"
        menuDescript.id = "menuDescriptID"
      
        menuElement.appendChild(menuName)
        menuElement.appendChild(menuDescript)
        menuElement.appendChild(menuPrice)

        // Style for these DOM created Divs
        menuName.style.fontWeight = "bold"
        menuDescript.style.fontStyle = "italic"
        menuDescript.style.margin = "-15px 0px 0px 0px"
        menuDescript.style.wordWrap = "break-word"
        menuDescript.style.wordBreak = "normal"
        menuDescript.style.width = "250px"
        menuDescript.style.padding = "0px 0px 0px 10px"
        menuPrice.style.margin = "-30px 0px 0px 300px"
        menuPrice.style.fontSize = "2rem"
        
        
        
        
        para.appendChild(menuElement)



      }
      foodMenu.forEach(menuItem => createMenuItem(menuItem)) 


      Chashao.addEventListener('click', function(){
          menuDiv.style.backgroundImage = "url(\"pictures/Chashao.jpg\")"
      })

      Miantiao.addEventListener('click', function(){
        menuDiv.style.backgroundImage = "url(\"pictures/Miantiao.jpg\")"
    })

    Chaomian.addEventListener('click', function(){
        menuDiv.style.backgroundImage = "url(\"pictures/Chaomian.jpg\")"
    })

    Tangmian.addEventListener('click', function(){
        menuDiv.style.backgroundImage = "url(\"pictures/Tangmian.jpg\")"
    })

    Zhajiangmian.addEventListener('click', function(){
        menuDiv.style.backgroundImage = "url(\"pictures/Zhajiangmian.jpg\")"
    })

    Lamian.addEventListener('click', function(){
        menuDiv.style.backgroundImage = "url(\"pictures/Lamian.jpg\")"
    })

    BeijingKaoya.addEventListener('click', function(){
        menuDiv.style.backgroundImage = "url(\"pictures/BeijingKaoya.jpg\")"
    })

    Hongzaoji.addEventListener('click', function(){
        menuDiv.style.backgroundImage = "url(\"pictures/Hongzaoji.jpg\")"
    })

    LuohanZhai.addEventListener('click', function(){
        menuDiv.style.backgroundImage = "url(\"pictures/LuohanZhai.jpg\")"
    })

    GeneralTaoChicken.addEventListener('click', function(){
        menuDiv.style.backgroundImage = "url(\"pictures/GeneralTaoChicken.jpg\")"
    })

      




      



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
    para.style.margin = "0px 0px 0px -400px"
    para.style.textAlign = "left"


    paraTwo.style.display = "flex"
    paraTwo.style.fontSize = "3rem"
    paraTwo.style.fontWeight = "bold"
    paraTwo.style.margin = "30px 0px 30px -400px"

    paraLast.style.display = "flex"
    paraLast.style.fontSize = "1.5rem"
    paraLast.style.fontWeight = "bold"
    paraLast.style.margin = "-650px 0px 30px 125px"
    
      // div menu pictures
    menuDiv.style.height = "400px"
    menuDiv.style.width = "400px"
    menuDiv.style.border = "1px solid black"
    menuDiv.style.display = "flex"
    menuDiv.style.position = "absolute"
    menuDiv.style.margin = "300px 0px 0px 200px"
    menuDiv.style.backgroundSize = "400px 400px"
    menuDiv.style.backgroundRepeat = "no-repeat"
    

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
    middleDivision.style.backgroundImage = "url(\"pictures/menuPage.jpg\")"
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

export default menuPage