<h1 align="center">
    Aula-6 Implementando um Back-End
  <br>
</h1>

<h4 align="center">Atividade para criação de uma API de filmes.</a>.</h4>

<a target="_blank" rel="noopener noreferrer nofollow" href="https://camo.githubusercontent.com/9d07c04bdd98c662d5df9d4e1cc1de8446ffeaebca330feb161f1fb8e1188204/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6176615363726970742d4637444631453f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d626c61636b"><img src="https://camo.githubusercontent.com/9d07c04bdd98c662d5df9d4e1cc1de8446ffeaebca330feb161f1fb8e1188204/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6176615363726970742d4637444631453f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d626c61636b" data-canonical-src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&amp;logo=javascript&amp;logoColor=black" style="max-width: 100%;"></a>
<a target="_blank" rel="noopener noreferrer nofollow" href="https://camo.githubusercontent.com/dfc69d704694f22168bea3d84584663777fa5301dcad5bbcb5459b336da8d554/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6f64652e6a732d3433383533443f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6f64652e6a73266c6f676f436f6c6f723d7768697465"><img src="https://camo.githubusercontent.com/dfc69d704694f22168bea3d84584663777fa5301dcad5bbcb5459b336da8d554/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6f64652e6a732d3433383533443f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6f64652e6a73266c6f676f436f6c6f723d7768697465" data-canonical-src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&amp;logo=node.js&amp;logoColor=white" style="max-width: 100%;"></a>

<h2  align="center">EndPoints</h2>

* cars/create -> Adicionar um novo carro.
* cars/list -> Mostrar todos os carros.
* cars/update -> Atualizar a cor de um carro.
* cars/delete -> Deleter um carro pela placa.

<h2  align="center">Para rodar o projeto</h2>

```bash
Instalar dependencies:
$ npm install --save jest
$ npm install --save express
$ npm install --save cors
$ npm install --save http-status-codes
$ npm install --save validate.js
$ npm install --save moongose
$ npm install --save uuid

Executar:
$ npm start

Executar Testes:
$ npm run test

Body:
{
    "placa": String,
    "marca": String,
    "modelo": String,
    "cor": String
}
```

<h2  align="center">Autor</h2>
Francisco Junior<br>
1628 GEC

