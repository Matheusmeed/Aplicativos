window.onload = function () {
    let min = 00
    let seg = 00
    let segdecimal = 0
    let mindecimal = 0
    let totalseg = 0
    let totalmin = 0
    let totalhora = 0
    let iniciar = document.getElementById('btniniciar')
    let pausar = document.getElementById('btnpausar')
    let resetar = document.getElementById('btnresetar')
    let hora = document.getElementById('hora')
    let minuto = document.getElementById('min')
    let segundo = document.getElementById('seg')
    let intervalo
    
    iniciar.onclick = function() {
        clearInterval(intervalo)
        intervalo = setInterval(cronometrar, 1000)
    }
    pausar.onclick = function() {
        clearInterval(intervalo)
    }
    resetar.onclick = function() {
        clearInterval(intervalo)
        totalhora = totalmin = totalseg = mindecimal = segdecimal = min = seg = 0 
        hora.innerHTML = ''
        segundo.innerHTML = minuto.innerHTML = '00'
    }

    function cronometrar() {
        seg++ 
        totalseg++
        if (seg < 10) {
            segundo.innerHTML = `${segdecimal}` + seg
        }
        if (seg > 9) {
            seg = 0
            segdecimal++
            segundo.innerHTML = `${segdecimal}` + seg
        }
        if (totalseg == 60) {
            totalmin++
            min++
            if (min > 9) {
                mindecimal++
                min = 0
            }
            minuto.innerHTML = `${mindecimal}` + min
            seg = segdecimal = totalseg = 0
            segundo.innerHTML = '00'
        }
        if (totalmin == 60) {
            totalhora++
            totalmin = totalseg = mindecimal = segdecimal = min = seg = 0           
            minuto.innerHTML = '00'
            segundo.innerHTML == '00'
            hora.innerHTML = `${totalhora}:`
        }
    }
}