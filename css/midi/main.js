function tocaSom (seletorAudio) {  
   const elemento = document.querySelector(seletorAudio);
   
   if (elemento != null && elemento.localName === 'audio'){ 
           elemento.play ();
   }

   else {
       //alert ('Elemento nao encontrado');
       console.log ('Elemento ou seletor nao encontrado');
   }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas [contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento){

        if (evento.code === 'Space' || evento.code === 'Enter') {
        tecla.classList.add('ativa');
        }
    }


    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }


}
