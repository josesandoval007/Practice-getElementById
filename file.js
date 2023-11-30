
function cambiarTexto() {
    // Obtén el elemento con el id "miTitulo"
    var elementoTitulo = document.getElementById("miTitulo");

    // Modifica el contenido del elemento
    elementoTitulo.innerHTML = "¡New Text!";
}

function ChangeColor(){
    const ChanColor=document.getElementById("ColorStyle");
    ChanColor.style.color="blue";
    
}

function ChangeMotor(){
    const motorcicle=document.getElementById("Motor");

    motorcicle.src="/img/2.jpg";
    motorcicle.alt="Ducati-Mamasita";
    
}

function Listen(){
    const sorprise=document.getElementById("EventL");
    sorprise.addEventListener("click",function(){
        alert ("Congratulations!!!!! now you download TROYAN");
    });
}

function deleteParagraph(){
    const contenedor=document.getElementById("contenedor");
    const text=document.getElementById("paragraph");

    if (text){
        contenedor.removeChild(paragraph);
    }
    
}
function Transit(){
    const imgTr=document.getElementById("miDiv");
    imgTr.style.backgroundColor="lightcoral";
    imgTr.style.transition="all 2s";
    imgTr.style.transform="translateX(900px)";
}

function Underline(){
    const under=document.getElementById("parag");
    under.classList.toggle("underlineParag")
}