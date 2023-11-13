document.getElementById("user-btn").addEventListener("click", function () {
    var userDropdown = document.getElementById("user-dropdown");
    userDropdown.classList.toggle("active");
});

document.addEventListener("click", function (event) {
    var userDropdown = document.getElementById("user-dropdown");
    var userBtn = document.getElementById("user-btn");
    
    if (!userDropdown.contains(event.target) && event.target !== userBtn) {
        userDropdown.classList.remove("active");
    }
});