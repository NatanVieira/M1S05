import saudacaoEspecial from "./saudacao-especial.js";
import {saudacao} from "./saudacao.js";
import {Produto} from "../models/Produto.js";
import {Pedido} from "../models/Pedido.js";

console.log(saudacao());
console.log(saudacaoEspecial("Natanael"));

let produto = new Produto('Celular', 120.00, true, 20);
produto.mostraProduto();

let pedido = new Pedido(3, 'Susane');
pedido.mostraPedido();