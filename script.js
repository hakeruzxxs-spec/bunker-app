const tg = window.Telegram.WebApp;
tg.expand();

if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
    const user = tg.initDataUnsafe.user;
    document.getElementById('player-name').innerText = user.first_name.toUpperCase();
}

function enterRoom() {
    tg.showAlert("Xonaga kirish tizimi tayyorlanmoqda...");
}

function openTab(tabName) {
    tg.showAlert(tabName.toUpperCase() + " bo'limi tez orada ishga tushadi!");
}
