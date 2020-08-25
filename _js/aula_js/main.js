// documento javascript//
// atividade do bootcamp de gameDev DIO ago 2020//
// author: willian santos //

var msg = "hello ";
var nome = "willian";

alert(msg + nome);                                            // cria um alerta concatenando duas variaveis //

console.log(msg);                                             // escreve no console //
console.log(nome.replace("willian", "joaquim"));              // alterna os valores de duas sub-strings //
console.log(msg.toUpperCase());                               // imprime o conteúdo de uma string em caixa alta //


var lista = ["cajú" , "acerola" , "carambola"];
console.log(lista);                                           // imprime toda a lista //
console.log(lista[2]);                                        // mostra o terceiro elemento da lista //
console.log(lista.toString());                                // separa os elementos da string por virgula ""
console.log(lista.join("--"));                                // altera o separador dos elementos da string ""


var dados = {nome:"willian", sexo:"M", idade:"27"};           // cria um dicionario ou um objeto // 
console.log(dados);                                           // acessando todos os dados //
console.log(dados.idade);                                     // acessando o metodo idade do objeto dados //
alert(dados.nome);                                            // acessa e mostra o dado do metodo nome do objeto dados //



var clientes =[{nome:"willian", sobrenome:"santos"}, {idade:27, sexo: "M"} ]; // cria uma lista de objetos //
console.log(clientes);                                        // imprime todos os intens da lista //
console.log(clientes[1].sexo);                                // imprime um item especifico //

var username = prompt("Qual o seu nome?");                    // solicita um dado ao ususer //
var msgUser = "voce é: " + username;                          // operacoes com variaveis //
alert(msgUser);                                               // imprime para o usuario //

var data = new Date();                                        // armazena a data e hora em uma variavel //
alert(data);                                                  // imprime a tada completa //
alert(data.getMonth());                                       // imprime uma parte especifica da data //