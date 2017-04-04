 !function ($, undefined) {
     $(".tags-cloud").each(function () {
         switch ($(this).attr("post-num")) {
             case "0":
             case "1":
                 $(this).css("font-size", "12px");
                 $(this).css("color", "#ccc");
                 break;
             case "2":
                 $(this).css("font-size", "15px");
                 $(this).css("color", "#adadad");
                 break;
             case "3":
                 $(this).css("font-size", "18px");
                 $(this).css("color", "#8e8e8e");
                 break;
             case "4":
                 $(this).css("font-size", "21px");
                 $(this).css("color", "#6f6f6f");
                 break;
             case "4":
                 $(this).css("font-size", "24px");
                 $(this).css("color", "#4f4f4f");
                 break;
             case "4":
                 $(this).css("font-size", "27px");
                 $(this).css("color", "#303030");
                 break;
             default:
                 $(this).css("font-size", "30px");
                 $(this).css("color", "#111");
                 break;
         }
     });
 }(jQuery);
 