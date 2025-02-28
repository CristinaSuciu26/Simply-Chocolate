// Logic for sidebar
const sidebar = document.getElementById("sidebar");
const closeIcon = document.getElementById("close-icon");
const socials = document.getElementById("social-icons");
function toggleSidebar() {
    if (sidebar.style.right === "-520px" || sidebar.style.right === "") {
        sidebar.style.right = "0px";
        sidebar.style.display = "flex";
        closeIcon.style.display = "block";
        socials.style.display = "flex";
    } else {
        sidebar.style.right = "-520px";
        setTimeout(()=>{
            sidebar.style.display = "none";
        }, 90);
    }
}
// Add event listener to toggle button
document.getElementById("toggle-button").addEventListener("click", toggleSidebar);
// Add event listener to close icon
document.getElementById("close-icon").addEventListener("click", toggleSidebar);
// Logic for scroll button
document.getElementById("scroll-down-btn").addEventListener("click", function() {
    const targetSection = document.getElementById("target-section");
    targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

//# sourceMappingURL=index.579125c3.js.map
