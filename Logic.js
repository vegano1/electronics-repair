/**
 * Created by Bryan on 11/17/2016.
 */

//Offsets the content to match the header of each section.
function offsetAnchor() {
    if(location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY - 120);
    }
}

// This will capture hash changes while on the page
$(window).on("hashchange", offsetAnchor);

// This is here so that when you enter the page with a hash,
// it can provide the offset in that case too. Having a timeout
// seems necessary to allow the browser to jump to the anchor first.
window.setTimeout(offsetAnchor, 1);
