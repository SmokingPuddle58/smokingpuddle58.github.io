function togglePage(oldPage, newPage) {
    document.getElementById(oldPage).style.display = "none";
    document.getElementById(newPage).style.display = "block";
}

function copyEmail() {
    navigator.clipboard.writeText(atob(atob(atob("WVcxR2RXVnRhR2hpYldOM1RrUkZNRkZIT1RGa1IzaDJZakp6ZFZreU9YUT0="))));
    document.getElementById('email_name').textContent = 'Copied!'
    setTimeout(function() {
        document.getElementById('email_name').textContent = 'Emаil'
    }, 2000);

}

function changeEmoji() {
    const fourOhFourArray = ['冇', '沒', '無', '空', '虛'];
    document.getElementById("fourOhFour").textContent = fourOhFourArray[Math.floor(Math.random() * fourOhFourArray.length)];
}

