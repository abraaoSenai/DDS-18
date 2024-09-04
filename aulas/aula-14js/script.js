var horas = document.getElementById("horas")
var minutos = document.getElementById("minutos")
var segundos = document.getElementById("segundos")
var titleSuperior = document.getElementById('title')

var diasSemana = ['Domingo', 'Segunda-Feira','Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira','Domingo']





var atualizaRelogio = setInterval(function() {
    var dataAtual = new Date()
    var horaAtual = dataAtual.getHours().toString().padStart(2, '0');
    var minutoAtual = dataAtual.getMinutes().toString().padStart(2, '0');
    var segundoAtual = dataAtual.getSeconds().toString().padStart(2, '0');
    var diaAtual = dataAtual.getDay()

    horas.textContent = horaAtual
    minutos.textContent = minutoAtual
    segundos.textContent = segundoAtual
    titleSuperior.textContent = `${diasSemana[diaAtual]}`

    

} )

function saudacaoDeHora(hora) {
    if (hora < 6) {
        return "Boa Madrugada";
    } else if (hora  < 12) {
        return "Bom Dia";
    } else if (hora  < 18) {
        return "Boa Tarde";
    } else {
        return "Boa Noite";
    }
}


function formatarMes(mes) {
    var meses = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    return meses[mes];
}

var atualizaRelogio = setInterval(function() {
    var dataAtual = new Date();
    var horaAtual = dataAtual.getHours().toString().padStart(2, '0');
    var minutoAtual = dataAtual.getMinutes().toString().padStart(2, '0');
    var segundoAtual = dataAtual.getSeconds().toString().padStart(2, '0');
    var diaAtual = dataAtual.getDay();
    var mesAtual = dataAtual.getMonth();
    var anoAtual = dataAtual.getFullYear();
    var saudacao = saudacaoDeHora(dataAtual.getHours());

    horas.textContent = horaAtual;
    minutos.textContent = minutoAtual;
    segundos.textContent = segundoAtual;
    titleSuperior.textContent = `${saudacao}, ${diasSemana[diaAtual]} - ${formatarMes(mesAtual)} ${anoAtual}`;
});

