// ===== Mobile Navigation Toggle =====
(function () {
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  var overlay = document.getElementById("navOverlay");

  if (!toggle || !links) return;

  function close() {
    links.classList.remove("open");
    toggle.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    if (overlay) overlay.classList.remove("open");
  }

  toggle.addEventListener("click", function () {
    var isOpen = links.classList.toggle("open");
    toggle.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    if (overlay) overlay.classList.toggle("open");
  });

  if (overlay) {
    overlay.addEventListener("click", close);
  }

  // Close on link click (mobile)
  var navAnchors = links.querySelectorAll("a");
  for (var i = 0; i < navAnchors.length; i++) {
    navAnchors[i].addEventListener("click", close);
  }
})();

// ===== FAQ Accordion =====
(function () {
  var items = document.querySelectorAll(".faq-item");
  for (var i = 0; i < items.length; i++) {
    (function (item) {
      var btn = item.querySelector(".faq-question");
      if (!btn) return;
      btn.addEventListener("click", function () {
        var isOpen = item.classList.contains("open");
        // Close all
        for (var j = 0; j < items.length; j++) {
          items[j].classList.remove("open");
          var b = items[j].querySelector(".faq-question");
          if (b) b.setAttribute("aria-expanded", "false");
        }
        // Open clicked if it was closed
        if (!isOpen) {
          item.classList.add("open");
          btn.setAttribute("aria-expanded", "true");
        }
      });
    })(items[i]);
  }
})();

// ===== Smooth scroll for anchor links =====
(function () {
  var anchors = document.querySelectorAll('a[href^="#"]');
  for (var i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener("click", function (e) {
      var href = this.getAttribute("href");
      if (href === "#") return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }
})();
