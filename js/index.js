import saudacaoEspecial from "./saudacao-especial.js";
import {saudacao} from "./saudacao.js";
import {Produto} from "../models/Produto.js";

console.log(saudacao());
console.log(saudacaoEspecial("Natanael"));
let produto = new Produto('Celular', 120.00, true, 20);
produto.mostraProduto();