window.addEventListener('load', function(){

//variables

	const btn_info_app_pedidos = document.querySelector('#info-app-pedidos');
	const btn_info_kanok = document.querySelector('#info-kanok');


//eventos
	
	btn_info_app_pedidos.addEventListener('click', function(){
		swal({
		  title: "Aplicación de pedidos",
		  text: "Esta pequeña aplicación se hizo con html, css, js, jquery, django y sqlite",
		  icon: "info",
		});
	});


	btn_info_kanok.addEventListener('click', function(){
		swal({
		  title: "Pagina del laboratorio Kanok",
		  text: "Esta pagina se hizo con html, css js y jquery, por la falta de imágenes de la empresa la pagina carece de un poco de diseño",
		  icon: "info",
		});
	});


//efectos
    ScrollReveal().reveal('.card', {
        interval: 300,
        reset: true,
    });

    ScrollReveal().reveal('section', {
        interval: 300,
        reset: true
    });
    
});