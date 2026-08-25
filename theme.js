(function () {
  "use strict";

  var STORAGE_KEY = "earl-portfolio-theme";

  function getRoot() {
    return document.body;
  }

  function isDark() {
    var root = getRoot();
    return root ? root.classList.contains("dark-mode") : false;
  }

  function setTheme(dark, persist) {
    var root = getRoot();
    if (!root) return;

    root.classList.toggle("dark-mode", dark);

    var toggle = document.getElementById("themeToggle");
    if (toggle) {
      toggle.setAttribute("aria-pressed", String(dark));
      toggle.setAttribute(
        "aria-label",
        dark ? "Switch to light mode" : "Switch to dark mode",
      );
      toggle.setAttribute(
        "title",
        dark ? "Switch to light mode" : "Switch to dark mode",
      );
    }

    if (persist) {
      try {
        localStorage.setItem(STORAGE_KEY, dark ? "dark" : "light");
      } catch (error) {
        // Storage can be unavailable in privacy-restricted browsers.
      }
    }
  }

  function createToggle() {
    if (document.getElementById("themeToggle")) return;

    var nav = document.querySelector(".nav");
    if (!nav) return;

    var contact = nav.querySelector(":scope > .pill");

    var button = document.createElement("button");
    button.type = "button";
    button.id = "themeToggle";
    button.className = "themeToggle";
    button.setAttribute("aria-pressed", String(isDark()));
    button.setAttribute(
      "aria-label",
      isDark() ? "Switch to light mode" : "Switch to dark mode",
    );
    button.setAttribute(
      "title",
      isDark() ? "Switch to light mode" : "Switch to dark mode",
    );
    button.innerHTML = '<span class="themeIcon" aria-hidden="true"></span>';

    if (contact) {
      nav.insertBefore(button, contact);
    } else {
      nav.appendChild(button);
    }

    button.addEventListener("click", function () {
      setTheme(!isDark(), true);
    });
  }

  function loadSavedTheme() {
    var saved = null;

    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch (error) {
      saved = null;
    }

    // Light is intentionally the default. We do not follow the OS theme.
    setTheme(saved === "dark", false);
  }

  function initTheme() {
    loadSavedTheme();
    createToggle();
  }

  // theme.js is currently loaded in <head>, so wait until <body> exists.
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTheme, { once: true });
  } else {
    initTheme();
  }
})();
