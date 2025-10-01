const usuarios = [
  {
    nome: "Carlos",
    idade: 28,
    email: "carlos@exemplo.com",
    cidade: "São Paulo",
    interesses: ["Música", "Tecnologia", "Fotografia"]
  },
  {
    nome: "Beatriz",
    idade: 22,
    email: "beatriz@exemplo.com",
    cidade: "Rio de Janeiro",
    interesses: ["Viagens", "Leitura", "Cinema"]
  }
];

// Desafiio1: Mostrar nome e cidade do primeiro usuário/

const primeiroUsuario = usuarios[0]; 
const { nome, cidade } = primeiroUsuario;

console.log("Nome:", nome);
console.log("Cidade:", cidade);


// Desafio2: Criar novo array com novo usuário usando spread

const novoUsuario = {
  nome: "Ana",
  idade: 26,
  email: "ana@exemplo.com",
  cidade: "Manaus",
  interesses: ["Natureza", "História"]
};

// criando array com os usuários antigos + o novo
const usuariosDoNorte = [...usuarios, novoUsuario];

console.log("Desafio 2:");
console.log(usuariosDoNorte);


// Desafio3: Novo objeto da Beatriz com o email atualizado

const beatriz = usuarios[1];
const beatrizAtualizada = {
  ...beatriz,
  email: "bia.dev@exemplo.com"
};

console.log(beatrizAtualizada);


// Desafio4: Criar uma função que mostre os interesses da pessoa

function mostrarInteresses(usuario) {
  const { nome, interesses } = usuario;
  console.log(`${nome} gosta de ${interesses.join(", ")}.`);
}

console.log("Desafio 4:");
mostrarInteresses(usuarios[0]); // Carlos
mostrarInteresses(usuarios[1]); // Beatriz
mostrarInteresses(novoUsuario); // Ana
