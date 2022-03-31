function mostraHora() {
    let data = new Date();
    console.log(`${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`);
}

setInterval(mostraHora, 2000);