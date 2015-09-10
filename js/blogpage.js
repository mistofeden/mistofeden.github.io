(function(){
    "use strict";
    var $cbTargets = $(".panel-blog");
    // add event handlers
    $cbTargets.each(function(){
        var $this = $(this),
            description = $this.find(".panel-title").text(),
            img = $this.find(".panel-body img");
        $(img).on("click", function(){
            $.colorbox({ width: "100%", height: "100%", href: $(img).attr("src"), title: description});
        });
    });
}());
