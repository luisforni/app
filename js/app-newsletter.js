window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			  }
			}
		]
	});
});

$(document).ready(function () {
	$('.imagen-min1').on({
		'mouseover': function(){
			var tituloText = $('.titulo-1').text();
			var resumenText = $('.resumen-1').text();
			$('.contenido-principal__imagen').attr('src','img/01.jpg');
			$('.contenido-principal__titulo').text(tituloText);
			$('.contenido-principal__resumen').text(resumenText);
		}
	})

	$('.imagen-min2').on({
		'mouseover': function(){
			var tituloText = $('.titulo-2').text();
			var resumenText = $('.resumen-2').text();
			$('.contenido-principal__imagen').attr('src','img/02.jpg');
			$('.contenido-principal__titulo').text(tituloText);
			$('.contenido-principal__resumen').text(resumenText);
		}
	})

	$('.imagen-min3').on({
		'mouseover': function(){
			var tituloText = $('.titulo-3').text();
			var resumenText = $('.resumen-3').text();
			$('.contenido-principal__imagen').attr('src','img/03.jpg');
			$('.contenido-principal__titulo').text(tituloText);
			$('.contenido-principal__resumen').text(resumenText);
		}
	})

	$('.imagen-min4').on({
		'mouseover': function(){
			var tituloText = $('.titulo-4').text();
			var resumenText = $('.resumen-4').text();
			$('.contenido-principal__imagen').attr('src','img/04.jpg');
			$('.contenido-principal__titulo').text(tituloText);
			$('.contenido-principal__resumen').text(resumenText);
		}
	})

	$('.imagen-min5').on({
		'mouseover': function(){
			var tituloText = $('.titulo-5').text();
			var resumenText = $('.resumen-5').text();
			$('.contenido-principal__imagen').attr('src','img/05.jpg');
			$('.contenido-principal__titulo').text(tituloText);
			$('.contenido-principal__resumen').text(resumenText);
		}
	})

	$('.imagen-min6').on({
		'mouseover': function(){
			var tituloText = $('.titulo-6').text();
			var resumenText = $('.resumen-6').text();
			$('.contenido-principal__imagen').attr('src','img/06.jpg');
			$('.contenido-principal__titulo').text(tituloText);
			$('.contenido-principal__resumen').text(resumenText);
		}
	})

	$('.imagen-min7').on({
		'mouseover': function(){
			var tituloText = $('.titulo-7').text();
			var resumenText = $('.resumen-7').text();
			$('.contenido-principal__imagen').attr('src','img/07.jpg');
			$('.contenido-principal__titulo').text(tituloText);
			$('.contenido-principal__resumen').text(resumenText);
		}
	})

	$('.imagen-min8').on({
		'mouseover': function(){
			var tituloText = $('.titulo-8').text();
			var resumenText = $('.resumen-8').text();
			$('.contenido-principal__imagen').attr('src','img/08.jpg');
			$('.contenido-principal__titulo').text(tituloText);
			$('.contenido-principal__resumen').text(resumenText);
		}
	})

});

//-- TITULO --//

var load = document.getElementById("loading");

window.onload = lun;

function lun() {
    load.style.display = "none";
}

var dialog = document.getElementsByClassName("noticias-konecta")[0];
var variableBorder = 1;
var changeBorder = setInterval(change, 300);

function change() {
    if (variableBorder == 1) {
        dialog.style.border = "none";
        variableBorder = 2;
    } else if (variableBorder == 2) {
        dialog.style.borderRight = "0px solid #71bd46";
        variableBorder = 1;
    }
}

var dialogs = {
    value0: function() {
        texts = "Estamos...";
        timer = 100;
    },
    value1: function() {
        texts = "KONECTADOS!";
        timer = 100;
    },
};

var number = 0;
var timer;
var texts;

type();

function type() {
    dialogs["value" + number]();
    if (number >= 1) {
        number = -1;
    }
    
    dialog.innerHTML = "";
    var Letters = [];
    
    for (var i = 0; i < texts.length; i++) {
        text = texts.charAt(i);
        Letters[i] = text;
    }
    
    writes = setInterval(write, timer);
    
    positionLetter = 0;
    
    function write() {
        if (positionLetter == Letters.length) {
            clearInterval(writes);
            number++;
            if (number == Object.keys(dialogs).length) {
                clearInterval(writes);
                return up();
            }
            setTimeout(type, 500);
            return;
        }
        dialog.innerHTML += Letters[positionLetter];
        positionLetter++;
    }
}   
