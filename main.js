canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

color="blue";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=6;
ctx.arc(250, 200, 50, 0, 2* Math.PI);
ctx.stroke();

color="black";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.arc(390, 200, 50, 0, 2* Math.PI);
ctx.stroke();

color="red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.arc(530, 200, 50, 0, 2* Math.PI);
ctx.stroke();

color="gold";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.arc(320, 250, 50, 0, 2* Math.PI);
ctx.stroke();

color="green";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.arc(460, 250, 50, 0, 2* Math.PI);
ctx.stroke();