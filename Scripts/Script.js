
//flickity slider
$(document).ready(function () {
    $(".flickity-viewport").css('height', '598px');

    var elem = document.querySelector('.main-carousel');
    var flkty = new Flickity(elem, {
        // options
        cellAlign: 'left',
        autoPlay: true,
        contain: true
    });

});

//nav scroll event
jQuery(document).ready(function ($) {
    $(".scroll").click(function (event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1200);
    });
});

//collapsible script
var coll = this.document.getElementsByClassName("collapsible");
// var coll = $(".collapse-btn > .active-col");

var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
       
        this.classList.toggle("active-col");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
          
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
        
    });
}


//flexslider
$(window).load(function () {
    // The slider being synced must be initialized first
    $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 210,
        itemMargin: 5,
        asNavFor: '#slider'
    });

    $('#slider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#carousel"
    });

    //images with title
    $("#slider .flex-next,#slider .flex-prev").on('click touchend', function () {
    
        var imageId = $("#slider .flex-active-slide img").attr("src");
        switch (imageId) {
            case "Images/Go-Protein-Bar-cocconut.png":
                $("#pro-features").empty();
                $("#pro-features").append("<div class='row' ><div class='pro-details'><div class='pro-name'>Go Protein Bar <span style='color: #ca400f;'>Cocconut</span> </div><br /></div></div><div class='row'><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>22 gram protein (soy free)</p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>18 grams oats fibers</p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>24 grams Carb </p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>Chocolate coat</p></div>");
                break;

            case "Images/Go-Protein-Bar-Coffee.png":
                $("#pro-features").empty();
                $("#pro-features").append("<div class='row' ><div class='pro-details'><div class='pro-name'>Go Protein Bar <span style='color: #ca400f;'>Coffee</span> </div><br /></div></div><div class='row'><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>22 gram protein (soy free)</p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>18 grams oats fibers</p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>24 grams Carb </p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>Chocolate coat</p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>Coffee (Caffeine Source)</p></div>");
                break;
            case "Images/Go-Protein-Bar-muscles-1.png":
                $("#pro-features").empty();
                $("#pro-features").append("<div class='row' ><div class='pro-details'><div class='pro-name'>Go Protein Bar Coconut <span style='color: #ca400f;'>Muscles</span> </div><br /></div></div><div class='row'><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>22 gram protein (soy free)</p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>18 grams oats fibers</p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>24 grams Carb </p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>Chocolate coat</p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>Enriched with BCAA and glutamine</p></div>");
                break;
            case "Images/Go-Whey-Protein-png.png":
                $("#pro-features").empty();
                $("#pro-features").append("<div class='row' ><div class='pro-details'><div class='pro-name'>Go Whey <span style='color: #ca400f;'>Protein</span> </div><br /></div></div><div class='row'><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>24 gram protein</p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>Free soy, suger, hormone</p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>Chocolate taste</p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>100% multiphase whey protein</p></div>");
                break;
            case "Images/Go-Protein-bar-collagen-magic.png":
                $("#pro-features").empty();
                $("#pro-features").append("<div class='row' ><div class='pro-details'><div class='pro-name'>Go Protein Bar <span style='color: #ca400f;'>Collagen Magic</span> </div><br /></div></div><div class='row'><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>High quality protein blend</p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>Enriched with collagen peptides</p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>for the health and beauty of skin</p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>Building bones and joints</p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>1-2 Bars daily according to skin quality</p></div>");
                break;
            case "Images/Go-Protein-bar-diet.png":
                $("#pro-features").empty();
                $("#pro-features").append("<div class='row' ><div class='pro-details'><div class='pro-name'>Go Protein Bar <span style='color: #ca400f;'>Diet Secret</span> </div><br /></div></div><div class='row'><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>High quality protein blend</p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>With high fiber content</p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>Provide satiety for 4-5 hours</p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>Once daily bar with green tea or 2 cups of water</p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>Best time between breakfast and lunch time</p></div>");
                break;
            case "Images/Go-Protein-bar-muscle-bulk.png":
                $("#pro-features").empty();
                $("#pro-features").append("<div class='row' ><div class='pro-details'><div class='pro-name'>Go Protein Bar <span style='color: #ca400f;'>Muscle Bulk</span> </div><br /></div></div><div class='row'><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>High quality protein blend with egg albumin</p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>Increase the building of muscle</p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>Once daily post workout </p></div>");
                break;
            case "Images/Go-Protein-bar-super-power.png":
                $("#pro-features").empty();
                $("#pro-features").append("<div class='row' ><div class='pro-details'><div class='pro-name'>Go Protein Bar <span style='color: #ca400f;'>Super Power</span> </div><br /></div></div><div class='row'><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>High quality protein</p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>Blend with complex carbs</p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>Used as preworkout</p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>Once daily preworkout</p></div>");
                break;
 
        }
        //return false;
    });

    //images with title on small images click
    $("#carousel img").click(function () {

        var imageId = $(this).attr("src");
        switch (imageId) {
            case "Images/Go-Protein-Bar-cocconut.png":
                $("#pro-features").empty();
                $("#pro-features").append("<div class='row' ><div class='pro-details'><div class='pro-name'>Go Protein Bar <span style='color: #ca400f;'>Cocconut</span> </div><br /></div></div><div class='row'><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>22 gram protein (soy free)</p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>18 grams oats fibers</p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>24 grams Carb </p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>Chocolate coat</p></div>");
                break;

            case "Images/Go-Protein-Bar-Coffee.png":
                $("#pro-features").empty();
                $("#pro-features").append("<div class='row' ><div class='pro-details'><div class='pro-name'>Go Protein Bar <span style='color: #ca400f;'>Coffee</span> </div><br /></div></div><div class='row'><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>22 gram protein (soy free)</p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>18 grams oats fibers</p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>24 grams Carb </p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>Chocolate coat</p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>Coffee (Caffeine Source)</p></div>");
                break;
            case "Images/Go-Protein-Bar-muscles-1.png":
                $("#pro-features").empty();
                $("#pro-features").append("<div class='row' ><div class='pro-details'><div class='pro-name'>Go Protein Bar Coconut <span style='color: #ca400f;'>Muscles</span> </div><br /></div></div><div class='row'><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>22 gram protein (soy free)</p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>18 grams oats fibers</p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>24 grams Carb </p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>Chocolate coat</p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>Enriched with BCAA and glutamine</p></div>");
                break;
            case "Images/Go-Whey-Protein-png.png":
                $("#pro-features").empty();
                $("#pro-features").append("<div class='row' ><div class='pro-details'><div class='pro-name'>Go Whey <span style='color: #ca400f;'>Protein</span> </div><br /></div></div><div class='row'><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>24 gram protein</p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>Free soy, suger, hormone</p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>Chocolate taste</p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>100% multiphase whey protein</p></div>");
                break;
            case "Images/Go-Protein-bar-collagen-magic.png":
                $("#pro-features").empty();
                $("#pro-features").append("<div class='row' ><div class='pro-details'><div class='pro-name'>Go Protein Bar <span style='color: #ca400f;'>Collagen Magic</span> </div><br /></div></div><div class='row'><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>High quality protein blend</p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>Enriched with collagen peptides</p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>for the health and beauty of skin</p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>Building bones and joints</p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>1-2 Bars daily according to skin quality</p></div>");
                break;
            case "Images/Go-Protein-bar-diet.png":
                $("#pro-features").empty();
                $("#pro-features").append("<div class='row' ><div class='pro-details'><div class='pro-name'>Go Protein Bar <span style='color: #ca400f;'>Diet Secret</span> </div><br /></div></div><div class='row'><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>High quality protein blend</p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>With high fiber content</p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>Provide satiety for 4-5 hours</p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>Once daily bar with green tea or 2 cups of water</p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>Best time between breakfast and lunch time</p></div>");
                break;
            case "Images/Go-Protein-bar-muscle-bulk.png":
                $("#pro-features").empty();
                $("#pro-features").append("<div class='row' ><div class='pro-details'><div class='pro-name'>Go Protein Bar <span style='color: #ca400f;'>Muscle Bulk</span> </div><br /></div></div><div class='row'><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>High quality protein blend with egg albumin</p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>Increase the building of muscle</p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>Once daily post workout </p></div>");
                break;
            case "Images/Go-Protein-bar-super-power.png":
                $("#pro-features").empty();
                $("#pro-features").append("<div class='row' ><div class='pro-details'><div class='pro-name'>Go Protein Bar <span style='color: #ca400f;'>Super Power</span> </div><br /></div></div><div class='row'><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>High quality protein</p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>Blend with complex carbs</p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>Used as preworkout</p><br /><p class='pro-det'><span class='glyphicon glyphicon-chevron-right' style='color: #ca400f;'></span>Once daily preworkout</p></div>");
                break;

        }
    });

});


