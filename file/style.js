// To enable dark mode automatically.

function toggleDark() {
    let isOn = document.body.classList.toggle("onNight");
    if (isOn) {
        document.cookie = "isDark=true";
    } else {
        document.cookie = "isDark=false";
    }
}

const fourOhFourArray = ['4😅4', '4🤓4', '4🧐4', '4😇4', '4🙃4', '4🥲4', '4😐4', '4🤐4', '4🤨4', '4😑4', '4😧4', '4😠4', '4👿4', '4💀4', '4🤡4', '4🤬4', '4😮4', '4😤4', '4😡4', '4🥱4', '4😫4', '4😞4', '4😩4', '4😓4', '4😣4', '4😢4', '4😖4', '4😭4', '4😱4', '4☹4', '4😶4', '4😨4', '4😥4', '4😲4', '4😯4', '4😒4', '4🙁4', '4😕4', '4😟4', '4🙄4', '4😬4', '4🤯4', '4🤥4', '4😪4', '4😷4', '4😵4', '4🤒4', '4🤕4', '4🤧4', '4🥴4']

function changeEmoji() {
    document.getElementById("fourOhFour").textContent = fourOhFourArray[Math.floor(Math.random() * fourOhFourArray.length)];
}

async function changeSentence() {
    let quote = await (await fetch("https://api.quotable.io/random")).json();
    document.getElementById("sentence").textContent = quote.content;
    document.getElementById("author").textContent = "-- " + quote.author;
}


function getLetter() {
    window.alert(atob(atob(atob(atob("V1ZjeFIyUlhWblJoUjJocFlsZE9NMVJyVWtaTlJrWklUMVJHYTFJemFESlpha3A2WkZacmVVOVlVUT09")))));
}

window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 10000);
});




