// MDB Lightbox Init
$(function () {
    $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
  });

  const nav = document.getElementById('toolbar');
            window.addEventListener('scroll', () => {
                if(window.scrollY >= 100){
                    nav.classList.add('nav_gold')
                } 
                else{
                    nav.classList.remove('nav_gold')
                }
            })