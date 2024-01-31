export function scroll(){

    function moveTitleAndMonkey(bool, title, monkeyGif){
        if(bool === true){
            title.style.transform = "translateY(-100rem) translateX(-100rem)";
            monkeyGif.style.transform = "translateY(-100rem) translateX(100rem)";
        }else{
            title.style.transform = "translateY(0rem)";
            monkeyGif.style.transform = "translateY(0rem) translateX(0rem)";
        }
    }

    let moveMonkey = false;

    window.addEventListener("scroll", function() {
        let elementTarget = document.getElementsByClassName("top")[0];

        let monkeyGif = document.querySelector(".monkey-gif img");
        let title = document.querySelector(".title h1");

        if(this.window.scrollY >= (elementTarget.offsetTop + elementTarget.offsetHeight)){
            moveMonkey = true;
            console.log(moveMonkey)
            if(moveMonkey === true){
                moveTitleAndMonkey(moveMonkey, title, monkeyGif);
            }
        }else{
            moveMonkey = false;
            moveTitleAndMonkey(moveMonkey, title, monkeyGif);
        }
    });
}

