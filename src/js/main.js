window.addEventListener("load", ()=>{
    let $buttonMenu = document.getElementById("buttonMenu");
    let $buttonCloseMenu = document.getElementById("buttonCloseMenu");
    let $menuList = document.getElementById("menuList");

    $buttonMenu.addEventListener("click", ()=>{
        $menuList.classList.add("-show-menu");
        $buttonMenu.classList.add("-hidden");
    });

    $buttonCloseMenu.addEventListener("click", ()=>{
        $menuList.classList.remove("-show-menu");
        $buttonMenu.classList.remove("-hidden");
    });
})