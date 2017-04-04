
/*
 * Records.js for archives
 */

!function($, undefined) {
    
    var counter = 0;
    var currentYear;
    $("#hidden-temp-container article").each(function(){
        if (counter == 0){
            currentYear = $(this).find("time").attr("year");
            $("#posts").html($("#posts").html() + '<div class="collection-title">' +
                    '<h2 class="archive-year motion-element" id="archive-year-' + currentYear + '" style="opacity: 1;">' + currentYear + '</h2>' +
                    '</div>');
        }
        if($(this).find("time").attr("year") < currentYear) {
            currentYear = $(this).find("time").attr("year");
            $("#posts").html($("#posts").html() + '<div class="collection-title">' +
                    '<h2 class="archive-year motion-element" id="archive-year-' + currentYear + '" style="opacity: 1;">' + currentYear + '</h2>' +
                    '</div>');
        }
        $(this).addClass("post post-type-normal");
        $("#posts").append($(this));
        counter += 1;
    });
    
}(jQuery);