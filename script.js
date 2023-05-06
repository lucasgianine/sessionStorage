// 1 - Inserindo dados
localStorage.setItem("name", "Lucas");

// 2 - Resetando sem perder os dados

// 3 - Resgatar item
const nome = localStorage.getItem("name");

console.log(nome);

// 4 - Regatando um item inexistente
const sobrenome = localStorage.getItem("lastName");

console.log(sobrenome);

if (!sobrenome) {
    console.log("Sem sobrenome.");
}

// 5 - Removendo item
localStorage.removeItem("name");

// 6 - Limpando todos os itens
localStorage.setItem("nickname", "Lusca");
localStorage.setItem("years", 19);

localStorage.clear();

// 7 - sessionStorage
sessionStorage.setItem("number", 123);

// 8 - Reiniciar e perder os dados

const n = sessionStorage.getItem("number");

console.log(n);

// sessionStorage.removeItem("number");

sessionStorage.clear();

// 9 - Salvar objeto

const person = {
    name: "Lucas",
    age: 19,
    university: "SPTech"
};

localStorage.setItem("person", JSON.stringify(person));

const getPerson = localStorage.getItem("person");

// Modos de conseguir manipular o objeto

console.log(getPerson);

const personObject = JSON.parse(getPerson);

console.log(typeof personObject);

console.log(personObject.job);