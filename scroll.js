export function scroll(){
    let moveMonkey = false;

    window.addEventListener("scroll", function() {
        let elementTarget = document.getElementsByClassName("nav-links")[0];

        let monkeyGif = document.querySelector(".monkey-gif img");
        let title = document.querySelector(".title h1");

        if(this.window.scrollY >= (elementTarget.offsetTop + elementTarget.offsetHeight)){
            moveMonkey = true;
            console.log(moveMonkey)
            if(moveMonkey === true){
                title.style.transform = "translateY(-100rem)";
                monkeyGif.style.transform = "translateY(-100rem)";
            }
        }else{
            title.style.transform = "translateY(0rem)";
            monkeyGif.style.transform = "translateY(0rem)";

            moveMonkey = false;
        }
    });
}

