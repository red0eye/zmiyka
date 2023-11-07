
var snake = document.getElementById("snake"), // Обираємо елемент canvas
ctx = snake.getContext("2d"),             // Отримуємо рисувальний контент із canvas
xS = snake.width, yS=snake.height,        // Отримуємо з canvas значення ширини і висоти
qS = 25,                                  // Розмір елемента змійки
xZ = xS/2-qS, yZ = yS/2-qS,               // Координати позицій змійки, зі стартової позиції
vK, xK = 0, yK = 0,                       // Направлення (вектор) руху змійки
xZarr = [], yZarr = [],                   // Масиви координат змійки
xF, yF,                                   // Координати позиції фрукта
rS = 0;                                   // Лічильник з'їдених фруктів


fruit(); //Викликаємо функцію для розрахунку випадкової стартової позиції фрукта

//Функція випадкового вибору координат для фрукта
function fruit() {
xF=Math.round((xS/qS-1)*Math.random())*qS;
yF=Math.round((yS/qS-1)*Math.random())*qS;
for (var i=0; i<=(rS); i++) if (xZarr[i]==xF && yZarr[i]==yF) fruit(); // Повторний рандом при зіткненні зі змійкою

};    

// Функція оновлення кадру через певний інтервал часу
setInterval(function() {

// Фон та розмір ігрового поля
ctx.fillStyle="SpringGreen";
ctx.fillRect(0, 0, xS, yS);

// Тінь
ctx.shadowBlur=10;
ctx.shadowColor="MidnightBlue";

// Колір та позиція фрукту
ctx.beginPath();
ctx.arc(xF+qS/2, yF+qS/2, qS/1.6, qS/1.6, Math.PI*2, true); // Розмітка кола
ctx.fillStyle="#E500DE"; //Колір кола
ctx.fill();
ctx.strokeStyle="Lime"; //Колір лінії кола
ctx.stroke();

// Розраховуємо координату під час переміщення і телепортуємо при виході за краї
xZ=xZ+xK*qS;
if (xZ>=xS){
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

// Замінюємо координати в початкових елементах масиву
xZarr.unshift(xZ);
yZarr.unshift(yZ);    

// Колір і цикл виводу масиву елементів елементів змійки з отрисовкой
ctx.fillStyle="#F4F811";
for (var i=0; i<=(rS); i++) {
  ctx.fillRect(xZarr[i]+1, yZarr[i]+1, qS-2, qS-2); //Отрисовка массиву змійки   
}   
     
}, 1000/15); // Пауза (кадрів у секундах)

// Відслідковуємо натискання клавіш
onkeydown=function(event) {
console.log("Push button");
event.preventDefault(); // Відміняється виконання браузером подій event, щоб не спрацьовував скролл (прокрутка) сторінки, при натисканні стрілок
switch(event.keyCode) {
    case 87: if (vK!=1) {xK=0; yK=-1; vK=1}; break; // Вверх
    case 68: if (vK!=2) {xK=1; yK=0; vK=2}; break;  // Праворуч
    case 83: if (vK!=1) {xK=0; yK=1; vK=1}; break;  // Вниз
    case 65: if (vK!=2) {xK=-1; yK=0; vK=2}; break; // Ліворуч
}
};  

