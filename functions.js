function keyReleased()
{

}

function mouseReleased()
{
  if(fase == "menu")
  {
    if(instrucoes)
    {
      fase = "instrucoes";
    }
    else if(jogar)
    {
      acertos = 0;
      tentativas = 0;
      fase = "jogo";
    }
    else if(creditos)
    {
      fase = "creditos";
    }
  }
  else if(fase == "jogo")
  {
    if(mouseX >= 150 && mouseY >= 310 && mouseX <= 350 && mouseY <= 360)
    {
      if(opcaoA == numeroCerto)
      {
        acertos++;
        somAcerto.play();
      }
      else
      {
        somErro.play();
      }
      gerarNovosDados = true;
      tentativas ++;
    }
    if(mouseX >= 650 && mouseY >= 310 && mouseX <= 850 && mouseY <= 360)
    {
      if(opcaoB == numeroCerto)
      {
        acertos++;
        somAcerto.play();
      }
      else
      {
        somErro.play();
      }
      gerarNovosDados = true;
      tentativas ++;
    }
    if(mouseX >= 150 && mouseY >= 510 && mouseX <= 350 && mouseY <= 560)
    {
      if(opcaoC == numeroCerto)
      {
        acertos++;
        somAcerto.play();
      }
      else
      {
        somErro.play();
      }
      gerarNovosDados = true;
      tentativas ++;
    }
    if(mouseX >= 650 && mouseY >= 510 && mouseX <= 850 && mouseY <= 560)
    {
      if(opcaoD == numeroCerto)
      {
        acertos++;
        somAcerto.play();
      }
      else
      {
        somErro.play();
      }
      gerarNovosDados = true;
      tentativas ++;
    }

    if(mouseX > 40 && mouseX < 140 && mouseY > 690 && mouseY < 770)
    {
      fase = "menu";
      gerarNovosDados = true;
      contarTempo = false;
    }
  }
  if(fase == "instrucoes" || fase == "creditos" || fase == "gameOver" || fase == "gameOver")
  {
    if(mouseX > 40 && mouseX < 140 && mouseY > 690 && mouseY < 770)
    {
      fase = "menu";
    }
  }
}
  
function verificaSeRetorna()
{
  tamanho = 67;
  if(mouseX > 40 && mouseX < 140 && mouseY > 690 && mouseY < 770)
  {
      tamanho = 80;
  }
  return tamanho;
}

/////Modifica o tamanho das letras
function menu()
{
  fill(0); //pinta de preto
  textAlign('center');  //alinha a proxima frase para centro
  if(mouseX > larguraDaTela/2 - 60 && mouseY > alturaDaTela/2 - 90 && mouseX < larguraDaTela/2 + 60 && mouseY < (alturaDaTela/2) - 40)
  {
    textSize(40);  //tamanho das letras 40 se estiver perto da palavra
    jogar = true;
  }
  else
  {
    textSize(32);  //tamanho das letras 32 se estiver longe
    jogar = false;
  }
  text('Jogar' ,larguraDaTela/2, alturaDaTela/2 - 50);

  if(mouseX > larguraDaTela/2 - 90 && mouseY > alturaDaTela/2 - 20 && mouseX < larguraDaTela/2 + 90 && mouseY < (alturaDaTela/2) + 20)
  {
    textSize(40);  //tamanho das letras 40 se estiver perto da palavra
    instrucoes = true;
  }
  else
  {
    textSize(32);  //tamanho das letras 32 se estiver longe
    instrucoes = false;
  }
  text('Instruções', larguraDaTela/2, alturaDaTela/2 + 10);
  if(mouseX > larguraDaTela/2 - 80 && mouseY > alturaDaTela/2 + 40 && mouseX < larguraDaTela/2 + 80 && mouseY < (alturaDaTela/2) + 90)
  {
    textSize(40);  //tamanho das letras 40 se estiver perto da palavra
    creditos = true;
    //console.log("oi")
  }
  else
  {
    textSize(32);  //tamanho das letras 32 se estiver longe
    creditos = false;
  }
  text('Créditos', larguraDaTela/2, alturaDaTela/2 + 80);
  /*
  if(venceuOJogo)
  {
    fill(255, cor, 0);
    if(cor < 5)
    {
      mudanca = +5;
      cores += mudanca;
    }
    else if(cor > 250)
    {
      mudanca = -5;
      cores += mudanca;
    }
    text('Jogar modo infinito', larguraDaTela/2, alturaDaTela/2 + 150);
  }
  */
}