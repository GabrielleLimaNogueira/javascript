function aula () {
    //enquanto () faca...
    //para con ate con2 interable
    var i = 0
;
while (i < 10){
    console.log(i);
    i++
}
while(false){
    var pergunta = confirm ("Repete?");

    if (pergunta == false)
 break;

    }
    for(var I;I<100;I++){
        
    }
}
aula ();

function produtos (){
for(var i = 0;i<10;i++){
document.getElementById("produtos").innerHTML += `
<DIV class="produtos">
        <IMG src="https://images.tcdn.com.br/img/img_prod/1334667/pirulito_pokemon_chaveiro_pikachu_sabor_frutas18g_261_1_7a64fb7c3000194b34c62a3d76aa60f8.jpg"></IMG>
    <H1>PIRULITO</H1>
    <P>RR$ 20</P>
    <BUTTON type="BUTTON"> COMPRAR</BUTTON>

    </DIV> 
    `;
}
}
produtos();
