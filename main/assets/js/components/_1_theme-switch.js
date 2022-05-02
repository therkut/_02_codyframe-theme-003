// File#: _1_theme-switch
// Usage: codyhouse.co/license


  (function() {
  var t = document.getElementById("switch-light-dark");
  if (t) {
      var e = document.getElementsByTagName("html")[0]
        , n = t.querySelector('input[value="dark"]');
      "dark" == e.getAttribute("data-theme") && (n.checked = !0),
      t.addEventListener("change", function(t) {
          "dark" == t.target.value ? (e.setAttribute("data-theme", "dark"),
          localStorage.setItem("themeSwitch", "dark")) : (e.removeAttribute("data-theme"),
          localStorage.setItem("themeSwitch", "light"))
      })
  }
}());
