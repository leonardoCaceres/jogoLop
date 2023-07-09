function visualizarInstrucoes()
{
  tamanhoVoltar = verificaSeRetorna(); //Função presente em creditos.js
  if(mouseX > 40 && mouseX < 140 && mouseY > 690 && mouseY < 770)
  {
      tamanhoVoltar = 80;
  }
  textSize(40);
  textAlign('center');
  text("Instruções", larguraDaTela/2, alturaDaTela/4 - 60);
  textSize(28);
  text("O jogo tem como objetivo incentivar crianças, adolescentes e adultos\n com pouca instrução nas operações básicas a realizá-las.\n Cada fase é uma operação matemática básica começando com soma\n indo para subtração, multiplicação e por fim divisão.\n Para ganhar basta o jogador acertar, no mínimo, 10 respostas\n de cada uma das fases. Ao ganhar o jogador irá liberar uma fase secreta.", larguraDaTela/2, alturaDaTela/4 - 20);
  //text("Cada fase é uma operação matemática básica começando com soma indo para subtração, multiplicação e por fim divisão.\n Para ganhar basta o jogador acertar, no mínimo, 10 respostas de cada uma das fases.", larguraDaTela/2, alturaDaTela/4 + 60);
  
  image(imagemVoltar, 50, 700, tamanhoVoltar, tamanhoVoltar);
}