const form = document.getElementById("tableForm");
form.addEventListener("submit", function(e){
    e.preventDefault();
    const tableNumber = document.getElementById("tableNumber").value;
    if(tableNumber === ""){
        alert("veuillez entrer un numero de table");
        return;
    }
    localStorage.setItem("tableNumber", tableNumber);
    window.location.href = "menu.html";
});
