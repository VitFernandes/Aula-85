var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var roverWidth=100;
var roverHeight=90;
var roverX=10;
var roverY=10;
var backgroundImage="mars.jpg";
var roverImage="rover.png";

//função que carrega as imagens do site
function add()
{
 backgroundImgTag = new Image(); //definindo uma variável com uma nova imagem
backgroundImgTag.onload = uploadBackground; //ajustando uma função ao carregar essa variável
backgroundImgTag.src = backgroundImage; //carregar a imagem

var roverImgTag = new Image(); //definindo uma variável com uma nova imagem
roverImgTag.onload = uploadrover; // ajustando uma função, ao carregar essa variável
roverImgTag.src = roverImage; //carregar a imagem
}

//função que ajuda a carregar a imagem de fundo da canvas 
function uploadBackground()
{

//ctx é a referencia do canvas 
// drawImage é uma função pré definida do java script que desenha uma imagem na canvas
//A função drawImage precisa de 5 parâmetros(arquivo da imagem, posição x, posição y, largura, altura)
//BackgroungImgTag essa é a variável definida para ajustar a imagem de fundo
//0,0 são as cordenadas X e Y da imagem
//canvas.width pega a largura da canvas
//canvas.height pega a altura da canvas
ctx.drawImage( backgroundImgTag, 0, 0, canvas.width, canvas.height );

}

function uploadrover()
{

ctx.drawImage( roverImgTag, roverX, roverY, roverWidth, roverHeight);

}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
var keyPressed = e.keycode;
console.log(keyPressed);
if(keyPressed == '38')
{
    up();
    console.log("cima");
}
if(keyPressed == '40')
{
    down();
    console.log("baixo");
}
if(keyPressed == '37')
{
    left();
    console.log("esquerda")
}
if(keyPressed =='39')
{
    right();
    console.log("direita");
}

}

function up()
{
    if(roverY >=0)
    {
        roverY = roverY -10;
        console.log("Quando a seta para cima é pressionada, x=" + roverX+" | y =" + roverY);
        uploadBackground();
        uploadRover();
    }
}

function down()
{
    if(roverY <=500)
    {
        roverY =roverY +10;
        console.log("Quando a seta para baixo é pressionada, x =" + roverX + " |y = " +roverY);
        uploadBackground();
        uploadRover();
    }
}

function left()
{
    if(roverX >=0)
    {
        roverX =roverX - 10;
        console.log("Quando a seta para a esquerda é pressionada, x= " + roverX +" | y = " +roverY);
        uploadBackground();
        uploadRover();
    }
}

function right()
{
    if(roverX <=700)
    {
        roverX =roverX + 10;
        console.log("Quando a seta para a direita é pressionada, x= " + roverX +" | y = " +roverY);
        uploadBackground();
        uploadRover();
    }
}