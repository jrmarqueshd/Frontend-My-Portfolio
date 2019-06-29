window.addEventListener("load", ()=>{
    let $header = document.getElementById("mainHeader");
    let heightHeader = $header.scrollHeight;

    let $headerFixed = document.getElementById("menuFixed");
    let $buttonMenu = document.getElementById("buttonMenu");
    let $buttonCloseMenu = document.getElementById("buttonCloseMenu");
    let $menuList = document.getElementById("menuList");
    let $menuItems = document.querySelectorAll("#menuList > ul > li > a");

    function dropDownMenu(){
        $menuList.classList.toggle("-show-menu");
        $buttonMenu.classList.toggle("-hidden");
    }

    $buttonMenu.addEventListener("click", dropDownMenu);
    $buttonCloseMenu.addEventListener("click", dropDownMenu);
    [].forEach.call($menuItems, (e)=>{
        e.addEventListener("click", dropDownMenu);
    });

    window.addEventListener("scroll", ()=>{
        if(window.scrollY > heightHeader){
            $headerFixed.classList.add("-show");           
        }else if(window.scrollY < heightHeader){
            $headerFixed.classList.remove("-show");   
        }
    })
    
})