document.addEventListener("DOMContentLoaded", function() {
    var login = document.getElementById("Login"); 
    var modal = document.getElementById("modal");
    var close = document.querySelector(".close");

    
    function showModal() {
        modal.style.display = "block";
    }

    function hideModal() {
        modal.style.display = "none";
    }

    login.addEventListener("click", function(event) {
        event.preventDefault();
        showModal();
    });

    close.addEventListener("click", function() {
        hideModal();
    });

    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            hideModal();
        }
    });
});