var button = [];
for(var i = 1; i < 10; i++) button[i]=document.getElementById('canvas' + i);

var ctx = [];
for(var i = 1; i < 10; i++) ctx[i] = button[i].getContext('2d');

var bDisabled = [];
for(var i = 1; i < 10; i++) bDisabled[i] = false;

var isResult = false;
var content = [];

function loop (x)
{
    if(!bDisabled[x])
    {
        bDisabled[x] = true;
        button[x].style.opacity = 0.5;
        content[x] = 'x';
        button[x].style.webkitTransform = "rotateY(180deg)";
        button[x].style.msTransform = "rotateY(180deg)";
  
        setTimeout(function()
        {
            ctx[x].lineWidth = 3;
            ctx[x].beginPath();
            ctx[x].moveTo(10,10);
            ctx[x].lineTo(90,90);
            ctx[x].moveTo(90,10);
            ctx[x].lineTo(10,90);
            ctx[x].stroke();
            ctx[x].closePath();

            computerTurn();
        }, 500);

        checkWinner();
    }
}

function computerTurn()
    {
        var r = Math.random();

        if(r < 0.1 && !bDisabled[1]) draw0steps(1);
        else if(r < 0.2 && !bDisabled[2]) draw0steps(2);
        else if(r < 0.3 && !bDisabled[3]) draw0steps(3);
        else if(r < 0.4 && !bDisabled[4]) draw0steps(4);
        else if(r < 0.5 && !bDisabled[5]) draw0steps(5);
        else if(r < 0.6 && !bDisabled[6]) draw0steps(6);
        else if(r < 0.7 && !bDisabled[7]) draw0steps(7);
        else if(r < 0.8 && !bDisabled[8]) draw0steps(8);
        else if(r < 0.1 && !bDisabled[9]) draw0steps(9);
        else computerTurn();

    }

    function draw0steps(x)
    {
        bDisabled[x] = true;
        button[x].style.opacity = 0.7;
        content[x] = '0';
        button[x].style.webkitTransform ="rotateX(180deg)";

        setTimeout(function()
        {
        ctx[x].beginPath();
        ctx[x].lineWidth = 3;
        ctx[x].arc(50,50,34,0,Math.PI*2,false);
        ctx[x].stroke();
        ctx[x].closePath();
    }, 700);
}

