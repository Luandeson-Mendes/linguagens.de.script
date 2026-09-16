// Declaraçãao de variáveis
let nome = "Thiago";
let idade = 25;
const PI = 3.14;
let matriculado = true;

console.log(nome, idade, PI, matriculado);
console.log(typeof nome, typeof idade, typeof PI, typeof matriculado);

// Exploraçẽs e operadores
let a = 10, b = 3;
console.log(a + b, a - b, a * b, a / b, a % b);
console.log(a > b, a === b, a !== b);
let media = (7 + 8 + 9) / 3;
console.log("Média: "+media);

// Funções
function calcularmedia(n1, n2, n3){
    return (n1, n2, n3) / 3;
}
console.log(calcularmedia(8, 7, 9));

//Arrays
let notas = [8, 7, 9, 6];
console.log(notas.length);
console.log(notas[0], notas[notas.length -1]);

notas.push(10);
console.log(notas);

let dobrados = notas.map(n => n * 2);
console.log(dobrados);

// Objetos
let aluno = {
    nome : "Luan",
    idade : 19,
    curso : "Sistema Para Internet",
    notas : [8, 7, 9]
};
console.log(aluno.nome, aluno["idade"]);
aluno.email = "luan@academico.ifpb.edu.br";
console.log(aluno);

// Strings
let frase = "Linguagem de script";
console.log(frase.length);
console.log(frase.toUpperCase(), frase.toLowerCase());
console.log(frase.includes("Script"));
console.log(`Curso: ${frase})/`);
