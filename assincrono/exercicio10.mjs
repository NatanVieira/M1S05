function sleep(valor){
    return new Promise((rs,rj) => {setTimeout(console.log,3000,valor)});
}

console.log(sleep('Olá dorminhoco'));