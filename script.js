
    let inputAdulto = document.getElementById("adultos");
    let inputCrianca = document.getElementById("criancas");
    let inputDura = document.getElementById("duracao");
    let calc = document.getElementById("calcular");

    let resul = document.getElementById("resultado")


    calc.addEventListener("click", function(){
        let adulto = inputAdulto.value;
        let crianca = inputCrianca.value;
        let dura = inputDura.value;


        let carneTotal = carnePP(dura) * adulto + carnePP(dura) * crianca / 2;
        let cervejaTotal = cervejaPP(dura) * adulto;
        let bebidaTotal = bebidaPP(dura) * adulto + bebidaPP(dura) * crianca / 2;

         

        resul.innerHTML = `<h1> ${carneTotal / 1000} Kg de carne</h1>`
        resul.innerHTML += `<h1> ${Math.ceil(cervejaTotal / 355)} Latinhas de cerveja</h1>`
        resul.innerHTML += `<h1> ${Math.ceil(bebidaTotal/1000)} Garrafas de bebidas</h1>`
        //console.log(carneTotal / 1000, Math.ceil(cervejaTotal / 355), Math.ceil(bebidaTotal/1000))
    
    })

    function carnePP(dura){
        if (dura >= 6){
            return 650
        }else{
            return 400
        }
    }
    
    function cervejaPP(dura){
        if (dura >= 6){
            return 2000
        }else{
            return 1200
        }
    }

    function bebidaPP(dura){
        if (dura >= 6){
            return 1100
        }else{
            return 1000
        }
    }

    /*let carne1 = 650;
        let carne2 = 400;
        let cerveja1 = 2000;
        let cerveja2 = 1200;
        let refri1 = 1100;
        let refri2 = 1000;

        

        if (dura.value >= 6){
            let equacao1 = (adulto.value * carne1)
            let equacao2 = (adulto.value * cerveja1)
            let equacao3 = (adulto.value * refri1)
            console.log(equacao1, equacao2, equacao3)
        }else{
            let equacao1 = (adulto.value * carne2)
            let equacao2 = (adulto.value * cerveja2)
            let equacao3 = (adulto.value * refri2)
            console.log(equacao1, equacao2, equacao3)
        }*/

        /*if(adulto.value < 400){
            console.log("menor");
        }else{
            console.log("maior")
        }*/
