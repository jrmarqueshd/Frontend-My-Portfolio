window.addEventListener("load", ()=>{
    /**
     * Variables
     */

    // Header
    let $header             = document.getElementById("mainHeader"),
        $buttonMenu         = document.getElementById("buttonMenu"),
        $buttonCloseMenu    = document.getElementById("buttonCloseMenu"),
        $navMenu            = document.getElementById("navMenu"),
        $menuList           = document.getElementById("menuList"),
        $menuItems          = document.querySelectorAll("#navMenu > ul > li > a"),
        $heroVideo          = document.getElementById("heroVideo"),
        $heroContainer      = document.getElementById("heroContainer"),
        heightHeader        = $header.scrollHeight;

    // Fixed Menu
    let $headerFixed        = document.getElementById("menuFixed"),
        $navMenuFixed       = document.getElementById("navMenuFixed"),
        $figureNavMenuFixed = document.querySelector("#navMenuFixed > figure");

    // About
    let $figurePerfilAbout  = document.querySelector("#about > article > figure"),
        $perfilIMG          = document.getElementById("perfilImg"),
        $aboutContent       = document.getElementById("aboutContent"),
        $buttonSeeMore      = document.getElementById("buttonSeeMore");

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

    // Function to show fixed menu when scroll > header height
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

    // Function to show hero video after load page and load video 
    function showHeroVideo(){
        $heroVideo.setAttribute("src", $heroVideo.getAttribute("data-src"));
        $heroVideo.style.opacity = "0";
    
        $heroVideo.addEventListener("load", ()=>{
            setTimeout(()=>{
                $heroContainer.classList.remove("pre-loading");
                $heroVideo.style.opacity = "1";
            }, 4000);
        });
    }

    // Function to hidden fixed menu when scroll < header height
    function hiddenFixedMenu(){
        $headerFixed.classList.remove("-show");
        $navMenu.insertAdjacentElement("beforeend", $menuList);          
        $header.insertAdjacentElement("beforeend", $buttonMenu);
        $figurePerfilAbout.insertAdjacentElement("afterbegin", $perfilIMG);
    }

    // Function to hidden content when height #contentAbout > 500px
    function hiddenContent(){
        $aboutContent.classList.add("-hidden-content");
        $buttonSeeMore.classList.add("-show");
    }

    // Function to show content after #buttonSeeMore clicked
    function showContent(){
        $aboutContent.classList.remove("-hidden-content");
        $buttonSeeMore.classList.remove("-show");
    }

    /**
     * Conditions
     */

    // Verify if about content is biggest when 500px
    if($aboutContent.scrollHeight > 500){
        hiddenContent();
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
            // $heroContainer.style.opacity = "";
        }else if(window.scrollY < heightHeader){
            hiddenFixedMenu();
        }
    });

    $buttonSeeMore.addEventListener("click", showContent);

    if(window.matchMedia("(min-width: 1141px)").matches){
        showHeroVideo();
    }
});