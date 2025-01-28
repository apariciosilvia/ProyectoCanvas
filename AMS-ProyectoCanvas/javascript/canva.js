const canvas = document.getElementById('miCanvas');
const ctx = canvas.getContext('2d');

//RECTÁNGULO
ctx.fillStyle = '#3498db';
ctx.fillRect(50, 50, 150, 100);

//CÍRCULO
ctx.beginPath();
ctx.arc(300, 100, 50, 0, Math.PI * 2, false);
ctx.fillStyle = '#e74c3c';
ctx.fill();
ctx.closePath();

//LÍNEA
ctx.beginPath();
ctx.moveTo(50, 200);
ctx.lineTo(200, 350);
ctx.lineWidth = 5;
ctx.strokeStyle = '#2ecc71';
ctx.stroke();
ctx.closePath();

//TRIÁNGULO
ctx.beginPath();
ctx.moveTo(350, 300);
ctx.lineTo(450, 300);
ctx.lineTo(400, 200);
ctx.closePath();
ctx.fillStyle = '#f1c40f';
ctx.fill();

//FIRMO EL CUADRO
const margin = 20;
const text = 'Firmado Silvia Aparicio Martín';
ctx.fillStyle = '#ffffff';
ctx.font = '16px Arial';

const textWidth = ctx.measureText(text).width;
const textX = canvas.width - textWidth - margin; 
const textY = canvas.height - margin; 

ctx.fillText(text, textX, textY);
