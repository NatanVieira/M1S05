import saudacaoEspecial from "./saudacao-especial.js";
import {saudacao} from "./saudacao.js";
import {Produto} from "../models/Produto.js";
import {Pedido} from "../models/Pedido.js";

console.log(saudacao()); //Exercicio 1
console.log(saudacaoEspecial("Natanael")); //Exercicio 2

let produto = new Produto('Celular', 120.00, true, 20); //Exercicio 3
produto.mostraProduto();                                //Exercicio 3

let pedido = new Pedido(3, 'Susane'); //Exercicio 4
pedido.mostraPedido();                //Exercicio 4

pedido.adicionarProduto(produto); //Exercicio 5
pedido.mostraPedido();            //Exercicio 5

console.log(pedido.calcularTotal()); //Exercicio 6

//Exercicio 7

let produto1 = new Produto("Notebook", 1000.00,true, 2);
let produto2 = new Produto("Smart TV", 1500.00,true, 5);
let produto3 = new Produto("Amazon Dot", 300.00,false, 0);
let produto4 = new Produto("Iphone XS", 1800.00,true, 1);
let produto5 = new Produto("Monitor 23inch", 550.00,true, 10);

let pedido1 = new Pedido(20220001, "Mr. Eletronic");
let pedido2 = new Pedido(20220002, "BSHOP");

pedido1.adicionarProduto(produto1);
pedido1.adicionarProduto(produto4);
pedido1.adicionarProduto(produto2);

pedido2.adicionarProduto(produto3);
pedido2.adicionarProduto(produto5);

pedido1.mostraPedido();
pedido1.calcularTotal();

pedido2.mostraPedido();
pedido2.calcularTotal();

//Exercicio 8
pedido1.mostraProdutos();
pedido1.mostraValorTotalPedido();

pedido2.mostraProdutos();
pedido2.mostraValorTotalPedido();