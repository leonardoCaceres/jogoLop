function setup()
{
  createCanvas(larguraDaTela, alturaDaTela);
  
  imagemVoltar = loadImage("_images/icons8-voltar-67.png");
  soundFormats('wav', 'mp3');
  somAcerto = loadSound('_sons/acerto.wav');
  somErro = loadSound('_sons/erro.mp3');
  somVitoria = loadSound('_sons/vitoria.wav');
  somDerrota = loadSound('_sons/derrota.wav');
  passouDeFase = loadSound('_sons/passouFase.wav');
}

function draw()
{
  background(255);
  if(fase == "menu") //MENU
  {
    menu();
  }
  else if(fase == "instrucoes")
  {
    visualizarInstrucoes();
  }
  else if(fase == "creditos")
  {
    visualizarCreditos();
  }
  else if(fase == "jogo") //1º fase
  {
    escolhaOperacao();
  }
  else if(fase == "gameOver")
  {
    fimDeJogo();
  }
  else if(fase == "vitoria")
  {
    vitoria();
  }
}