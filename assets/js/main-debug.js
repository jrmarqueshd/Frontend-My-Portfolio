window.addEventListener("load", ()=>{
    // Variables
    let $header = document.getElementById("mainHeader");
    let heightHeader = $header.scrollHeight;

    let $perfilIMG = document.getElementById("perfilImg");
    let $headerFixed = document.getElementById("menuFixed");
    let $navMenuFixed = document.getElementById("navMenuFixed");
    let $figureNavMenuFixed = document.querySelector("#navMenuFixed > figure");
    let $buttonMenu = document.getElementById("buttonMenu");
    let $buttonCloseMenu = document.getElementById("buttonCloseMenu");
    let $navMenu = document.getElementById("navMenu");
    let $menuList = document.getElementById("menuList");
    let $menuItems = document.querySelectorAll("#navMenu > ul > li > a");
    let $figurePerfilAbout = document.querySelector("#about > article > figure");

    /**
     * Functions
     */

    // Function to show menu and hidden button menu
    function showMenu(){
        $navMenu.classList.add("-show-menu");
        $buttonMenu.classList.add("-hidden");
    }

    // Function to hidden menu and show button menu
    function hiddenMenu(){
        $navMenu.classList.remove("-show-menu");
        $buttonMenu.classList.remove("-hidden");
    }

    function showFixedMenu(){
        $headerFixed.classList.add("-show");
        $figureNavMenuFixed.insertAdjacentElement("afterbegin", $perfilIMG);

        if(window.matchMedia("(min-width: 768px)").matches){
            $navMenuFixed.insertAdjacentElement("beforeend", $menuList);

        }else if(window.matchMedia("(max-width: 767px)").matches){
            $navMenu.insertAdjacentElement("beforeend", $menuList); 
            $navMenuFixed.insertAdjacentElement("beforeend", $buttonMenu);
        }  
    }

    function hiddenFixedMenu(){
        $headerFixed.classList.remove("-show");
        $navMenu.insertAdjacentElement("beforeend", $menuList);          
        $header.insertAdjacentElement("beforeend", $buttonMenu);
        $figurePerfilAbout.insertAdjacentElement("afterbegin", $perfilIMG);
    }

    /**
     * Events
     */

    // Event to show menu and hidden button menu
    $buttonMenu.addEventListener("click", showMenu);

    // Event to hidden menu and show button menu
    $buttonCloseMenu.addEventListener("click", hiddenMenu);

    [].forEach.call($menuItems, (e)=>{
        e.addEventListener("click", hiddenMenu);
    });

    // Event to watch scroll window and show or hidden fixed menu
    window.addEventListener("scroll", ()=>{
        if(window.scrollY > heightHeader){
            showFixedMenu();          
        }else if(window.scrollY < heightHeader){
            hiddenFixedMenu();
        }
    });
});