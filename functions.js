
		const botonMenu = document.getElementById("menu_hamburguesa");
		const menuFlotante = document.getElementById("menu-flotante");
		const menuSuper = document.getElementById("menu-super");
		const menuOverlay = document.getElementById("menu-overlay");
		const imagen_super = document.getElementById("imagen_super");

 
		botonMenu.addEventListener("click", function () {
	
			if (menuFlotante.style.display === "none" || menuFlotante.style.display === "") {
				menuFlotante.style.display = "flex";
				menuSuper.style.display = "flex";
				botonMenu.style.backgroundImage = "url('images/icon-close.svg')";
				botonMenu.style.height = "25px";
				menuOverlay.style.display = "block";
				imagen_super.style.display = "none";

			} else {
				menuFlotante.style.display = "none";
				menuSuper.style.display = "none";
				botonMenu.style.backgroundImage = "url('images/icon-hamburger.svg')";
				botonMenu.style.height = "15px";
				menuOverlay.style.display = "none"
				imagen_super.style.display = "";
			}
		});


		function ocultarMenuEnPantallaGrande() {
  if (window.innerWidth > 375) { 
  	menuFlotante.style.display = "none";
  	botonMenu.style.backgroundImage = "url('images/icon-hamburger.svg')";
  }
}

window.addEventListener("resize", ocultarMenuEnPantallaGrande);

