document.addEventListener("DOMContentLoaded", () => {
    // Deletes class 'no-js' from the body if JS is active 
    document.body.classList.remove("no-js");

    link.addEventListener("click", (e) => {
        // Avoids reloading page
        e.preventDefault();
        submenu.style.display = submenu.style.display === "block" ? "none" : "block";
    });
   
});
