function togglePage(oldPage, newPage) {
    document.getElementById(newPage).style.display = "block";
    document.getElementById(oldPage).style.display = "none";
}

function copyEmail() {
    navigator.clipboard.writeText(atob(atob(atob("WVcxR2RXVnRhR2hpYldOM1RrUkZNRkZIT1RGa1IzaDJZakp6ZFZreU9YUT0="))));
    document.getElementById('email_name').textContent = 'Copied!'
    document.getElementById('email-button').classList.add('copy');
    setTimeout(function() {
        document.getElementById('email_name').textContent = 'Emаil'
        document.getElementById('email-button').classList.remove('copy');
    }, 2000);
}

function changeEmoji() {
    const fourOhFourArray = ['冇', '沒', '無', '空', '虛'];
    document.getElementById("fourOhFour").textContent = fourOhFourArray[Math.floor(Math.random() * fourOhFourArray.length)];
}


// On page load set the theme.
(function() {
    let onpageLoad = localStorage.getItem("theme") || "";
    let element = document.body;
    element.classList.add(onpageLoad);
    document.getElementById("theme").textContent =
        localStorage.getItem("theme") || "light";
})();

function themeToggle() {
    let element = document.body;
    element.classList.toggle("dark-mode");

    let theme = localStorage.getItem("theme");
    if (theme && theme === "dark-mode") {
        localStorage.setItem("theme", "");
    } else {
        localStorage.setItem("theme", "dark-mode");
    }

    document.getElementById("theme").textContent = localStorage.getItem("theme");
}
