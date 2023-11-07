var snake= document.getElementById("snake"),
ctx= snake.getContext("2d"),
xS = snake.width, yS=snake.height,
qS=25,
xZ = xS/2-qS, yZ= yS/2-qS,
vK, xK = 0, yK = 0,
xZarr = [], yZarr=[],
xF, yF,
rS= 0;
//image        = new Image();
//image.src    = 'tn.jpg';
//ctx.drawImage(image, 0, 0, width, height, 0, 0, width, height);


fruit();

function fruit() {
    xF=Math.round((xS/qS-1)*Math.random())*qS;
    yF=Math.round((yS/qS-1)*Math.random())*qS;

    for (var i=0; i<=(rS); i++) if (xZarr[i]==xF && yZarr[i]==yF)
    fruit();
};



setInterval(function()  { 
ctx.beginPath();
ctx.arc(xF+qS/2, yF+qS/2, qS/1.6, qS/1.6, Math.PI*2, true);
ctx.fillStyle="SpringGreen";
ctx.fill();
ctx.strokeStyle="Lime";
ctx.stroke();

ctx.fillStyle="Green";
ctx.fillRect(0, 0, xS, yS);

ctx.shadowBlur=10;
ctx.shadowColor="Blue";

xZ=xZ+xK*qS;
if (xZ>=xS) {
    xZ=0;
}
if (xZ<0) {
    xZ=xS-qS;
}
yZ=yZ+yK*qS;
if (yZ>=yS) {
    yZ=0;
}
if (yZ<0){
    yZ=yS-qS;
}

xZarr.unshift(xZ);
yZarr.unshift(yZ);

ctx.fillStyle = "#F4F811";
for (var i=0; i<=(rS); i++){
    ctx.fillRect(xZarr[i]+1, yZarr[i]+1, qS-2, qS-2);
}

}, 1000/15);


onkeydown=function(event) {
    console.log("Push button");
    event.preventDefault();
    switch(event.keyCode) {
        case 87: if (vK!=1) {xK=0; yK=-1; vK=1}; break;
        case 68: if (vK!=2) {xK=1; yK=0; vK=2}; break;
        case 83: if (vK!=1) {xK=0; yK=1; vK=1}; break;
        case 65: if (vK!=2) {xK=-1; yK=0; vK=2}; break;
    }
};









