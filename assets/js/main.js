var caret = document.querySelector(".caret-parent .caret");
document.querySelectorAll(".nav-item").forEach(function (item) {
  item.addEventListener("mouseover", function (e) {
    caret.style.width = e.target.offsetWidth - 16 + "px";
    caret.style.left = e.target.offsetLeft + 8 + "px";
    caret.style.opacity = 1;
  });
});
