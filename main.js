$(document).ready(function(){
    //Immetto le celle nel mio container: lo devo fare per 64 volte! -> Ciclo for.
    for (var i = 0; i < 64; i++) {
        $(".container").append("<div></div>");
    }
    $(".container div").addClass("quadrato");
    //Generiamo un array di 15 numeri casuali diversi che vanno da 0 a 64 (il numero di mie caselle!): questo indicherà quali delle caselle sono bombe.
    function random_generator_sixtyfour() {
        var risultato = Math.floor(Math.random()*64);
        return risultato;
    } //Questa funzione genera un numero casuale tra 0 e 63.
    var lista_mine = []; //Generiamo un array di 15 valori.
    var elemento_corrente = 0; //Utilizzato nel ciclo come flag.
    for (var i = 0; i < 15; i++) {
        elemento_corrente = random_generator_sixtyfour();
        while (lista_mine.includes(elemento_corrente)) {
            elemento_corrente = random_generator_sixtyfour();
        }
        lista_mine[i] = elemento_corrente;
        //Ora che abbiamo verificato che l'elemento corrente non sia già contenuto nell'array delle bombe, segniamo il quadratino corrispondente!
        $(".container .quadrato").eq(elemento_corrente).addClass("pericoloso");
    }
    console.log(lista_mine); //Per permettere cheats.
    //Ora che abbiamo creato l'array con valori validi e meno, valutiamo cosa accade con ogni click...
    $(".container .quadrato").click(function() {
        if ($(this).hasClass("pericoloso")) {
            $(this).addClass("rosso");
        } else {
            $(this).addClass("blu");
        };
    });

});

// $(document).ready(function(){
//     // Arrow Left section:
//     function scroll_left() {
//         var current_img = $("img.active");
//         var current_dot = $("i.active");
//         var prev_img = current_img.prev("img");
//         var prev_dot = current_dot.prev("i");
//         if (prev_img.length==0) {
//             prev_img = $("img:last-child");
//             prev_dot = $(".dots-container i:last-child");
//         }
//         current_img.removeClass("active");
//         prev_img.addClass("active");
//         current_dot.removeClass("active");
//         prev_dot.addClass("active");
//     };
//     $("i.fa-arrow-circle-left").click(scroll_left);
//     // Arrow Right section:
//     function scroll_right() {
//         var current_img = $("img.active");
//         var current_dot = $("i.active");
//         var next_img = current_img.next("img");
//         var next_dot = current_dot.next("i");
//         if (next_img.length==0) {
//             next_img = $("img:first-child");
//             next_dot = $(".dots-container i:first-child")
//         }
//         current_img.removeClass("active");
//         next_img.addClass("active");
//         current_dot.removeClass("active");
//         next_dot.addClass("active");
//     };
//     $("i.fa-arrow-circle-right").click(scroll_right);
//     //Bonus: selecting images from dots:
//     $(".dots-container i").click(function(){
//         var clicked_index = $(".dots-container i").index(this);
//         var current_img = $(".img-container img.active");
//         var current_dot = $("i.active");
//         var clicked_dot = $(".dots-container i").eq(parseInt(clicked_index));
//         var clicked_img = $(".img-container img").eq(parseInt(clicked_index));
//         current_img.removeClass("active");
//         current_dot.removeClass("active");
//         clicked_img.addClass("active");
//         clicked_dot.addClass("active");
//     });
//     // Automatic scroll every 3s:
//     var clock = setInterval(scroll_right, 3000);
//     scroll_right();
// });
