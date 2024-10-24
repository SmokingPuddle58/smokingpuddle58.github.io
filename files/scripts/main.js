function toAbout() {
    document.getElementById("main").style.display = "none";
    document.getElementById("self_intro").style.display = "block";
}

function toMain() {
    document.getElementById("self_intro").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("project").style.display = "none";
    document.getElementById("main").style.display = "block";
}

function toContact() {
    document.getElementById("main").style.display = "none";
    document.getElementById("contact").style.display = "block";
}

function backToAboutFromProject() {
    document.getElementById("project").style.display = "none";
    document.getElementById("self_intro").style.display = "block";
}

function toProjectFromAbout() {
    document.getElementById("self_intro").style.display = "none";
    document.getElementById("project").style.display = "block";
}

function toHobbyFromAbout() {
    document.getElementById("self_intro").style.display="none";
    document.getElementById("hobby").style.display="block";
}

function FromHobbyToAbout() {
    document.getElementById("hobby").style.display="none";
    document.getElementById("self_intro").style.display="block";
}

function getEmailAddress() {
    alert(atob(atob(atob("WVcxR2RXVnRhR2hpYldOM1RrUkZNRkZIT1RGa1IzaDJZakp6ZFZreU9YUT0="))));
}


function changeEmoji() {
    const fourOhFourArray = ['冇', '沒', '無', '空', '虛'];
    document.getElementById("fourOhFour").textContent = fourOhFourArray[Math.floor(Math.random() * fourOhFourArray.length)];
}

async function changeSentence() {
    let quote = await (await fetch("https://zenquotes.io/api/random")).json();
    document.getElementById("q").textContent = quote.content;
    document.getElementById("a").textContent = "-- " + quote.author;
    document.getElementById("quoteLicense").textContent = "Quote API licensed under MIT"
}

function stopSentence() {
    document.getElementById("sentence").textContent = "";
    document.getElementById("author").textContent = "";
    document.getElementById("quoteLicense").textContent = "";
}