window.onscroll = function() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop >0 ){
        document.getElementById('navbar').classList.add('scrolled')
    }else{
        document.getElementById('navbar').classList.remove('scrolled')
    }
}

//https://michalsnik.github.io/aos/

AOS.init({
    duration: 800,
})
;
    