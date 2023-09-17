function toggleDark() {
    let isOn = document.body.classList.toggle("onNight");
    if (isOn) {
        document.cookie = "isDark=true";
        return;
    }
    if (!isOn) {
        document.cookie = "isDark=false";
    }
}
