//https://icons8.com.br/icons/authors/GzmhwSaTujZf/inmotus-design

function visualizarCreditos()
{
  tamanhoVoltar = verificaSeRetorna();
  //console.log(verificarPosicaoMouse());
  textAlign('center');
  textSize(32);
  text("Créditos do jogo:", larguraDaTela/2, alturaDaTela/4 - 60);
  textSize(22);
  text("Desenvolvido por:", larguraDaTela/2, alturaDaTela/4 - 15);
  text("Daniela Targino Fernandes", larguraDaTela/2, alturaDaTela/4 + 30);
  text("Leonardo Simões Caceres Lima", larguraDaTela/2, alturaDaTela/4 + 70);
  
  textSize(26);
  text("Imagens:", larguraDaTela/2, alturaDaTela/4 + 100);
  textSize(23);
  text("Icone voltar:", larguraDaTela/2, alturaDaTela/4 + 130);
  textSize(20);
  text("https://icons8.com.br/icons/authors/GzmhwSaTujZf/inmotus-design", larguraDaTela/2, alturaDaTela/4 + 150);
  textSize(26);

  text("Sons:", larguraDaTela/2, alturaDaTela/4 + 190);
  textSize(23);
  text("Som acerto de resposta:", larguraDaTela/2, alturaDaTela/4 + 220);
  textSize(20);
  text("https://freesound.org/people/Eponn/sounds/421002/", larguraDaTela/2, alturaDaTela/4 + 245);
  textSize(23);
  text("Som erro de resposta:", larguraDaTela/2, alturaDaTela/4 + 270);
  textSize(20);
  text("https://freesound.org/people/Raclure/sounds/483598/", larguraDaTela/2, alturaDaTela/4 + 295);
  textSize(23);
  text("Som vitória:", larguraDaTela/2, alturaDaTela/4 + 320);
  textSize(20);
  text("https://freesound.org/people/LittleRobotSoundFactory/sounds/270402/", larguraDaTela/2, alturaDaTela/4 + 345);
  textSize(23);
  text("Som derrota:", larguraDaTela/2, alturaDaTela/4 + 370);
  textSize(20);
  text("https://freesound.org/people/cabled_mess/sounds/371451/", larguraDaTela/2, alturaDaTela/4 + 385);
  text("Som passar de fase:", larguraDaTela/2, alturaDaTela/4 + 420);
  textSize(20);
  text("https://freesound.org/people/Unlistenable/sounds/391539/", larguraDaTela/2, alturaDaTela/4 + 445);
  
  
  
  
  
  
  
  
  
  
  
  image(imagemVoltar, 50, 700, tamanhoVoltar, tamanhoVoltar);
  //console.log(tamanhoVoltar);
}