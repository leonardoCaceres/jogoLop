function verificarPosicaoMouse()
{
  if(mouseX > 430 && mouseX < 560 && mouseY > 240 && mouseY < 285){
    tamanhoSoma = 40;
  }
  else{
    tamanhoSoma = 32;
  }
  if(mouseX > 410 && mouseX < 580 && mouseY > 320 && mouseY < 370){
    tamanhoSubtracao = 40;
  }
  else{
    tamanhoSubtracao = 32;
  }
  if(mouseX > 400 && mouseX < 600 && mouseY > 400 && mouseY < 450){
    tamanhoMultiplicacao = 40;
  }
  else{
    tamanhoMultiplicacao = 32;
  }
  if(mouseX > 425 && mouseX < 560 && mouseY > 480 && mouseY < 530){
    tamanhoDivisao = 40;
  }
  else{
    tamanhoDivisao = 32;
  }
  
  if(mouseX > 40 && mouseX < 140 && mouseY > 690 && mouseY < 770)
  {
      tamanhoVoltar = 80;
  }
  
  corA = 0;
  corB = 0;
  corC = 0;
  corD = 0;
  
  if(mouseX >= 150 && mouseY >= 310 && mouseX <= 350 && mouseY <= 360)
  {
      corA = 200;
  }
  if(mouseX >= 650 && mouseY >= 310 && mouseX <= 850 && mouseY <= 360)
  {
      corB = 200;
  }
  if(mouseX >= 150 && mouseY >= 510 && mouseX <= 350 && mouseY <= 560)
  {
      corC = 200;
  }
  if(mouseX >= 650 && mouseY >= 510 && mouseX <= 850 && mouseY <= 560)
  {
      corD = 200;
  }
}

function gerarQuatroNumeros(numeroMinimo, numeroMaximo)
{
  numeros = [];
  while(numeros.length < 4)
  {
    auxiliar = int(random(numeroMinimo, numeroMaximo));
    if(auxiliar != numeroCerto && !(numeros.includes(auxiliar)) )
    {
        numeros.push(auxiliar);
    }
  }
  
  opcaoA = numeros[0];
  opcaoB = numeros[1];
  opcaoC = numeros[2];
  opcaoD = numeros[3];
  
  if(escolhaCorreta == 0)
  {
    opcaoA = numeroCerto;
  }
  else if(escolhaCorreta == 1)
  {
    opcaoB = numeroCerto;
  }
  else if(escolhaCorreta == 2)
  {
    opcaoC = numeroCerto;
  }
  else if(escolhaCorreta == 3)
  {
    opcaoD = numeroCerto;
  }
}

function gerarDadosPrimeiraFase()
{
  numero1 = int(random(0, 51));
  numero2 = int(random(0, 51));
  escolhaCorreta = int(random(0,4));
  numeroCerto = numero1 + numero2;
  
  gerarQuatroNumeros(0, 101);
}

function gerarDadosSegundaFase()
{
  numero1 = int(random( 0, 101 ));
  numero2 = int(random( 0, 101 ));
  escolhaCorreta = int(random(0,4));
  
  if(numero1 - numero2 >= 0)
  {
    numeroCerto = numero1 - numero2;
  }
  else
  {
    numeroCerto = numero2 - numero1;
    aux = numero2;
    numero2 = numero1;
    numero1 = aux;
  }
  gerarQuatroNumeros(0, 100);
}

function gerarDadosTerceiraFase()
{
  numero1 = int(random( 0, 11 ));
  numero2 = int(random( 0, 11 ));
  escolhaCorreta = int(random(0,4));
  
  numeroCerto = numero1 * numero2;

  gerarQuatroNumeros(0, 101);
}

function gerarDadosQuartaFase()
{
  numero1 = int(random( 0, 11));
  numero2 = int(random( 1, 11));
  escolhaCorreta = int(random(0,4));
  numeroCerto = numero1;
  numeros = [];
  while(numeros.length < 4)
  {
    auxiliar = int(random(0, 11));
    if(auxiliar != numeroCerto && !(numeros.includes(auxiliar)) )
    {
        numeros.push(auxiliar);
    }
  }
  numeroCerto = (numeroCerto/numero2).toFixed(2);
  opcaoA = (numeros[0]/numero2).toFixed(2);
  opcaoB = (numeros[1]/numero2).toFixed(2);
  opcaoC = (numeros[2]/numero2).toFixed(2);
  opcaoD = (numeros[3]/numero2).toFixed(2);
  
  if(escolhaCorreta == 0)
  {
    opcaoA = numeroCerto;
  }
  else if(escolhaCorreta == 1)
  {
    opcaoB = numeroCerto;
  }
  else if(escolhaCorreta == 2)
  {
    opcaoC = numeroCerto;
  }
  else if(escolhaCorreta == 3)
  {
    opcaoD = numeroCerto;
  }
}

function escolhaOperacao()
{
  tamanhoVoltar = verificaSeRetorna();
  verificarPosicaoMouse();
  cronometro = new Date();
  if(!contarTempo)
  {
    tempo = new Date();
    tempo = tempo.getTime();
    contarTempo = !contarTempo;
  }
  if(gerarNovosDados)
  {
    if(faseAtual == 0)
    {
      gerarDadosPrimeiraFase();
      gerarNovosDados = !gerarNovosDados;
    }
    else if(faseAtual == 1)
    {
      gerarDadosSegundaFase();
      gerarNovosDados = !gerarNovosDados;
    }
    else if(faseAtual == 2)
    {
      gerarDadosTerceiraFase();
      gerarNovosDados = !gerarNovosDados;
    }
    else if(faseAtual == 3)
    {
      gerarDadosQuartaFase();
      gerarNovosDados = !gerarNovosDados;
    }
  }
  tempoAtual = parseInt(60 - (cronometro.getTime() - tempo) / 1000);
  if(tempoAtual <= 0)
  {
    if(acertos > 10)
    {
      //if(passouDeFase.play())
      faseAtual++;
      if(faseAtual <= 3)
      {
        passouDeFase.play();
      }
      acertos = 0;
      tentativas = 0;
      contarTempo = false;
      gerarNovosDados = true;
    }
    else
    {
      somDerrota.play();
      acertos = 0;
      tentativas = 0;
      faseAtual = 0;
      contarTempo = false;
      gerarNovosDados = true;
      fase = "gameOver";
    }
    if(faseAtual > 3)
    {
      somVitoria.play();
      fase = "vitoria";
      acertos = 0;
      tentativas = 0;
      faseAtual = 0;
      //contarTempo = false;
      //gerarNovosDados = true;
    }
  }
  textAlign('center')
  textSize(32);
  
  fill(255, 0, 0);
  
  text( tempoAtual, 500, 100 );
  
  if(faseAtual == 0)
  {
    text("Calcule: " + numero1  + " + " + numero2, 500, 200);
  }
  else if(faseAtual == 1)
  {
    text("Calcule: " + numero1  + " - " + numero2, 500, 200);
  }
  else if(faseAtual == 2)
  {
    text("Calcule: " + numero1  + " * " + numero2, 500, 200);
  }
  else if(faseAtual == 3)
  {
    text("Calcule: " + numero1  + " / " + numero2, 500, 200);
  }
  
  fill(255, 100, 0);
  
  rect(150, 310, 200, 50);
  rect(650, 310, 200, 50);
  rect(150, 510, 200, 50);
  rect(650, 510, 200, 50);
  
  fill(corA,0,corA);
  text("A", 185, 345);
  text(opcaoA, 250, 345);
  fill(corB,0,corB);
  text("B", 685, 345);
  text(opcaoB, 750, 345);
  fill(corC,0,corC);
  text("C", 185, 545);
  text(opcaoC, 250, 545);
  fill(corD,0,corD);
  text("D", 685, 545);
  text(opcaoD, 750, 545);
  
  textSize(28);
  fill(0,200,0);
  text("Acertos:" + acertos, 350, 700);
  fill(0,0,0);
  text("Tentativas:" + tentativas, 650, 700);
  
  image(imagemVoltar, 50, 700, tamanhoVoltar, tamanhoVoltar);
  
  //console.log( d.getTime() );
}

