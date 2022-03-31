
class Produto {
    nome;
    preco;
    emEstoque;
    quantidade;

    constructor(nome, preco, emEstoque, quantidade){
        this.nome = nome;
        this.preco = preco;
        this.emEstoque = emEstoque;
        this.quantidade = quantidade;
    }

    mostraProduto () {
        console.log(`NOME: ${this.nome};\nPREÇO: ${this.preco};\nQUANTIDADE: ${this.quantidade};\EM ESTOQUE: ${this.emEstoque}`);
    }

    set nome (valor){
        this.nome = valor;
    }

    get nome (){
        return this.nome;
    }
}

export {Produto};