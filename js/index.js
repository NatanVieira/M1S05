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