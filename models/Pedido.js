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
        console.log(`Número pedido: ${this.numeroPedido}\nCliente: ${this.nomeCliente}\nData: ${this.dataPedido}\nPago? ${this.estaPago}\nProdutos: ${this.listaProdutos}`);
    }
}