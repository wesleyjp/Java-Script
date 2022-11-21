const mult = [null, "32", "16", "8", "4", "2", "1"];
const content = document.getElementById('content');

const pos = [
    {t: 1,m:[6]},
    {t: 2,m:[5]},
    {t: 3,m:[5, 6]},
    {t: 4,m:[4]},
    {t: 5,m:[4, 6]},
    {t: 6,m:[4, 5]},
    {t: 7,m:[4, 5, 6]},
    {t: 8,m:[3]},
    {t: 9,m:[3, 6]},
    {t: 10,m:[3, 5]},
    {t: 11,m:[3, 5, 6]},
    {t: 12,m:[3, 4]},
    {t: 13,m:[3, 4, 6]},
    {t: 14,m:[3, 4, 5]},
    {t: 15,m:[3, 4, 5, 6]},
    {t: 16,m:[2]},
    {t: 17,m:[2, 6]},
    {t: 18,m:[2, 5]},
    {t: 19,m:[2, 5, 6]},
    {t: 20,m:[2, 4]},
    {t: 21,m:[2, 4, 6]},
    {t: 22,m:[2, 4, 5]},
    {t: 23,m:[2, 4, 5, 6]},
    {t: 24,m:[2, 3]},
    {t: 25,m:[2, 3, 6]},
    {t: 26,m:[2, 3, 5]},
    {t: 27,m:[2, 3, 5, 6]},
    {t: 28,m:[2, 3, 4]},
    {t: 29,m:[2, 3, 4, 6]},
    {t: 30,m:[2, 3, 4, 5]},
    {t: 31,m:[2, 3, 4, 5, 6]},
    {t: 32,m:[1]},
    {t: 33,m:[1, 6]},
    {t: 34,m:[1, 5]},
    {t: 35,m:[1, 5, 6]},
    {t: 36,m:[1, 4]},
    {t: 37,m:[1, 4, 6]},
    {t: 38,m:[1, 4, 5]},
    {t: 39,m:[1, 4, 5, 6]},
    {t: 40,m:[1, 3]},
    {t: 41,m:[1, 3, 6]},
    {t: 42,m:[1, 3, 5]},
    {t: 43,m:[1, 3, 5, 6]},
    {t: 44,m:[1, 3, 4]},
    {t: 45,m:[1, 3, 4, 6]},
    {t: 46,m:[1, 3, 4, 5]},
    {t: 47,m:[1, 3, 4, 5, 6]},
    {t: 48,m:[1, 2]},
    {t: 49,m:[1, 2, 6]},
    {t: 50,m:[1, 2, 5]},
    {t: 51,m:[1, 2, 5, 6]},
    {t: 52,m:[1, 2, 4]},
    {t: 53,m:[1, 2, 4, 6]},
    {t: 54,m:[1 ,2, 4, 5]},
    {t: 55,m:[1 ,2, 4, 5, 6]},
    {t: 56,m:[1, 2, 3]},
    {t: 57,m:[1, 2, 3, 6]},
    {t: 58,m:[1, 2, 3, 5]},
    {t: 59,m:[1, 2, 3, 5, 6]},
    {t: 60,m:[1, 2, 3, 4]},
];

for (i=1; i<=18; i++) {
    if (typeof lin === "undefined") {var lin = 1;};
    if (typeof col === "undefined") {var col = 1;};

   content.innerHTML += `<div id="l${lin}c${col}" class="bol">${mult[col]}</div>`;
   
    if (col <= 5) {col++} else {col = 1; lin++;};
    if (lin > 3) {lin = 1;};
}

function loop() {
    refreshtime();
    document.getElementById("dclock").innerText = clock("horas");
    requestAnimationFrame(loop);
}

function refreshtime() {
    mark(0,0);

    //segundos
    var ss = clock('segundos');
    pos.forEach(p => {
        if (p.t == ss) {
            for (i in p.m) {
                mark(`l3c${p.m[i]}`, 1)
            }
        }
    })

    //minutos
    var ss = clock('minutos');
    pos.forEach(p => {
        if (p.t == ss) {
            for (i in p.m) {
                mark(`l2c${p.m[i]}`, 1)
            }
        }
    })

    //horas
    var ss = clock('hora');
    pos.forEach(p => {
        if (p.t == ss) {
            for (i in p.m) {
                mark(`l1c${p.m[i]}`, 1)
            }
        }
    })
    
}

function clock(t) {
    var horas = Date().substring(16,24);
    var hora = Date().substring(16,18);
    var minutos = Date().substring(19,21);
    var segundos = Date().substring(22,24);
 
    if (t == "horas") {return horas;}
    if (t == "hora") {return hora;}
    if (t == "minutos") {return minutos;}
    if (t == "segundos") {return segundos;}

}

function mark(b,f) {
    switch (f) {
        case 0:
            let divs = document.querySelectorAll("#content .bol");
            divs.forEach(bol => {
                bol.classList.remove('markbol');
            });
        break
        case 1:
            document.getElementById(b).classList.add('markbol');
        break
        case 2:
            document.getElementById(b).classList.remove('markbol');
        break
    }
}


loop();