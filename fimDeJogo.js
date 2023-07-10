function fimDeJogo()
{
  fill(0,0,0);
  tamanhoVoltar = verificaSeRetorna();
  textAlign('center');
  text("O jogo acabou obrigado por jogar!", 500, 400);
  text("Acertos: " + acertos, 500, 450);
  
  image(imagemVoltar, 50, 700, tamanhoVoltar, tamanhoVoltar);
}