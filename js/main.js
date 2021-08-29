(function(){
    $(document).ready(init);

    function init(){
        $('.collapsible').collapsible();    
        $('.sidenav').sidenav();

        $(".scroll").on("click", scrollView);
    }

    function scrollView(){
        $(".contentContainer")[0].scrollIntoView({
            behavior: "smooth",
        });
    }
})();