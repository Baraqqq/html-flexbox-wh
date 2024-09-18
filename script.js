// Selecteer het h1-element binnen de content-klasse
const overigeTitle = document.querySelector('.content h1');

// Verander de tekst van het h1-element
overigeTitle.textContent = 'Nieuwe Titel voor de Landing Page';

if (overigeTitle.textContent === 'Nieuwe Titel voor de Landing Page') {
    console.log('De titel is succesvol aangepast.');
} else {
    console.log('De titel is niet aangepast.');
}

for(let x = 1; x < 5; x++){
    console.log(x);
    if (x ===1) {
        console.log("bericht");
    }   else {
        console.log("geen bericht");
    }
}

piet(1,6);

function piet(s,n) {
    for(let x = s; x < n; x++) {
        console.log(x);
    
        switch(x){
            case 1: console.log("rood");
            break;
            case 2: console.log("blauw");
            break;
            case 3: console.log("oranje");
            break;  
            default: console.log("anders");
            break;
         }
    }

}


 