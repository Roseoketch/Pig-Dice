            $(document).ready(function() {
              $("button#start").click(function() {
                $(".container-fluid").show();
                $(".container").hide();

              });
            });


            $("button#new-game").click(function(event){
              $(".container").show();
                $(".container-fluid").hide();
});
