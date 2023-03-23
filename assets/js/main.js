var caret = document.querySelector(".caret-parent .caret");
document.querySelectorAll(".nav-item").forEach(function (item) {
  item.addEventListener("mouseover", function (e) {
    e.stopPropagation()
    caret.style.width = e.currentTarget.offsetWidth - 16 + "px";
    caret.style.left = e.currentTarget.offsetLeft + 8 + "px";
  });
});

new Splide( '.splide' ).mount();