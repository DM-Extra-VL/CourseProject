document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("errorModal");
    var closeButton = document.querySelector(".close");
    var form = document.getElementById("loginForm");

    function openModal() {
        modal.style.display = "block";
    }

    function closeModal() {
        modal.style.display = "none";
    }

    closeButton.addEventListener("click", closeModal);

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        var phoneNumber = document.getElementById("phone").value;
        var password = document.getElementById("password").value;

        // Здесь вы можете добавить логику проверки номера телефона и пароля
        // В данном примере просто открываем модальное окно об ошибке
        openModal();
    });
});
