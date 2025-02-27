const sidebar = document.getElementById("sidebar");
function toggleSidebar() {
    if (sidebar.style.right === "-520px" || sidebar.style.right === "") {
        sidebar.style.right = "0px";
        sidebar.style.display = "flex";
    } else {
        sidebar.style.right = "-520px";
        setTimeout(()=>{
            sidebar.style.display = "none";
        }, 300);
    }
}
// Add event listener to toggle button
document.getElementById("toggle-button").addEventListener("click", toggleSidebar);
// Add event listener to close icon
document.getElementById("close-icon").addEventListener("click", toggleSidebar);

//# sourceMappingURL=index.579125c3.js.map
