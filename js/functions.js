$(function() {
    $(".section-tittle").click(function() {
        var pai = $(this).parent(); //pega a informação de quem é o elemento pai (.section-pattern)
        var irmao = $(this).siblings(".slide-down"); //pega a informação de quem é o elemento irmão cuja classe é slide-down

        if ($(".section-pattern").hasClass("active-section") == false) {
            $(pai).addClass("active-section"); // classe para validação
            $(this).find('~.section-comment').addClass("active-comment");

            $(pai).css("height", "100%");

            // Clique inicial
            $(this).css("font-size", "1em");
            $(irmao).slideDown();
            $(".section-pattern").not(pai).hide();
            $(".section-comment.active-comment").hide();
            console.log("false");
        } else {
            // Clique de caminho inverso
            $(".section-pattern").removeClass("active-section");

            $(pai).insertAfter("#main-top");
            $(pai).css("height", "25%");

            $(this).css("font-size", "2em");
            $(irmao).slideToggle("fast");
            $(".section-pattern").not(pai).show();
            $(".section-comment.active-comment").show();
        }
    });
    console.log("TWF5IHRoZSBjb2RlIGJlIHdpdGggeW91IQ==");
});