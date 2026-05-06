document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault(); // stop page refresh

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    fetch("http://localhost:8080/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(result => {
        alert(result); // shows "Message received!"
    })
    .catch(error => {
        console.log(error);
        alert("Error occurred");
    });
});