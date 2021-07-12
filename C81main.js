canvas=document.getElementById("Mycanvas");
ctx= canvas.getContext("2d");


canvas=document.getElementById("canvas1");
ctx=canvas.getContext("2d");
color= "blue";
ctx.beginPath();
ctx.strokeStyle=color;https://codepen.io/login
ctx.lineWidth=10;
ctx.arc(100, 200, 80 ,0 , 2*Math.PI); 
ctx.stroke(); 


color= "black";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=10;
ctx.arc(200, 200, 80 ,0 , 2*Math.PI); 
ctx.stroke(); 

color= "red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=10;
ctx.arc(300, 200, 80 ,0 , 2*Math.PI); 
ctx.stroke(); 

color= "yellow";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=10;
ctx.arc(150, 300, 80 ,0 , 2*Math.PI); 
ctx.stroke(); 

color= "green";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=10;
ctx.arc(250, 300, 80 ,0 , 2*Math.PI); 
ctx.stroke(); 
