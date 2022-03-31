export class Pedido {
    numeroPedido;
    dataPedido;
    estaPago;
    listaProdutos;
    nomeCliente;

    constructor (numeroPedido, nomeCliente){
        this.numeroPedido = numeroPedido;
        this.nomeCliente = nomeCliente;
        this.dataPedido = new Date().toLocaleDateString();
        this.estaPago = false;
        this.listaProdutos = [];
    }

    mostraPedido(){
        console.log(`Número pedido: ${this.numeroPedido}\nCliente: ${this.nomeCliente}\nData: ${this.dataPedido}\nPago? ${this.estaPago}\nProdutos:`);
        this.listaProdutos.forEach((produto) => {console.log(produto)});
    }
    adicionarProduto(produto){
        this.listaProdutos.push(produto);
    }
    calcularTotal(){
        let total = 0;
        this.listaProdutos.forEach((produto) => {
            total += (produto.quantidade * produto.preco);
        });
        return total;
    }

    mostraProdutos(){
        console.log(`Pedido: ${this.numeroPedido}`);
        this.listaProdutos.forEach((produto) => {
            console.log(`Nome: ${produto.nome}\nPreço: ${produto.preco.toLocaleString()}\nQuantidade: ${produto.quantidade}\nEm estoque?: ${produto.emEstoque}`);
        })
    }
    
    mostraValorTotalPedido(){
        let total = this.calcularTotal();
        console.log(`Preço total do pedido: ${total}`);
    }
}