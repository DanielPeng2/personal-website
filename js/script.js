$(document).ready(function() {

    // open external links in new tab
    $( 'a[href^="https://"], a[href^="assets/resume.pdf"]' ).attr( 'target','_blank' );

    // slide down collapsible
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight){
                content.style.maxHeight = null;
                (this.childNodes)[0].textContent = "expand_more";
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                (this.childNodes)[0].textContent = "expand_less";
            } 
        });
    }
});

//sidenav
function openNav() {
    document.getElementById("my-sidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("my-sidenav").style.width = "0";
}