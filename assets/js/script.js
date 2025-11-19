document.addEventListener("DOMContentLoaded", async () => {
    const includes = document.querySelectorAll("[data-include]");
    
    for (let el of includes) {
      const file = el.getAttribute("data-include");
      try {
        const res = await fetch(file);
        const html = await res.text();
        el.innerHTML = html;
      } catch (err) {
        el.innerHTML = "<!-- Failed to load: " + file + " -->";
      }
    }
  
    // All includes are now loaded — inject main.js
    const mainScript = document.createElement("script");
    mainScript.src = "assets/js/main.js";
    document.body.appendChild(mainScript);
  });
  