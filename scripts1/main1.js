function newImage (){
	var image = document.getElementById("myImage") ;
	if(image.src.match("imagenes2")){
		image.src = "imagenes/image1.jpg";
		}else{
		image.src = "imagenes/image2.jpg"
		}
	}