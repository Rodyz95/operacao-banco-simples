/*function comparaNumeros(num1, num2) {
	const primeiraFrase = criaPrimeiraFrase(num1, num2);
	const segundaFrase = criaSegundaFrase(num1, num2);

	return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(num1, num2) {
	let primeiraFrase = `Os números ${num1} e ${num2}`;
	let simNao = 'não';

	if (num1 === num2) {
		simNao = '';
	}

	return `${primeiraFrase} ${simNao} são iguais.`;
}

function criaSegundaFrase(num1, num2) {
	const soma = num1 + num2;
	let comparaDez = 'menor';
	let comparaVinte = 'menor';

	if (soma > 10) {
		comparaDez = 'maior';
	}

	if (soma > 20) {
		comparaVinte = 'maior';
	}

	return `Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;
}

console.log(comparaNumeros(10, 10));*/


/*function subistituindoPares(array){
	for (let i = 0 ; i < array.length; i++) {
		if (array[i] === 0){
			console.log("Você já é zero");
		} else if(array[i] % 2 === 0){
			console.log(`Subistituindo ${array[i]} por 0...`);
			array[i] = 0;
		}

	}
	return array;
}

let arr = [1, 3, 4, 6, 80, 33, 23, 90];
subistituindoPares(arr)

console.log(arr)*/

/*   --- SPREAD 
function sum( x, y, z){
	return x + y + z;
}
 
const numbers= [1,20,3];

console.log(sum(...numbers)); */

/*   --- Rest 
function confereTamanho(...args){
	console.log(args.length)
}

confereTamanho()
confereTamanho(1,2)
confereTamanho(1,2,3,4,5,) */ 

/* --- Orientado Objeto
const user = {
	id: 42,
	displayName: 'Jdoe',
	fullName: {
		firstName: 'John',
		lastName: 'Doe'
	}
};

function userId({id}){
	return id;
}

function getFullName({fullName: {firstName: first, lastName: last}}){
	return `${first} ${last}`;
}

userId(user)

getFullName(user)  */

/* --- FOR */

/*function multiplicaPorDois(arr){
	let multiplicados = [];

	for(let i = 0; i < arr.length; i++){
		multiplicados.push(arr[i] * 2);
	}
	return multiplicados;
}

const meusNumeros = [2 ,33, 456 , 351, 14];

multiplicaPorDois(meusNumeros);*/


/*function forInExemplo(obj){
	for( prop in obj){
		console.log(obj[prop]);
	}
}

const meuObjeto = {
	nome: "joao",
	idade: "20",
	cidade: "salvador"
}

forInExemplo(meuObjeto);*/

/* --- Do while 

function exemploDoWhile() {
	let num = 0;

	do {
		console.log(num);
		num++;
	} while(num <= 5)
}

exemploDoWhile()*/


/* --- THIS  */

const soma = (a, b) => a + b;

soma(4, 6);