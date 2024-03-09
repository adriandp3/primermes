document.getElementById("nameForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value.trim();
    if (name.toLowerCase() === "maye") {
        document.getElementById("outputName").textContent = name;
        document.getElementById("message").classList.remove("hidden");
    } else {
        alert("Lo siento, esa dedicatoria es solo para Maye. Inténtalo de nuevo.");
    }
});