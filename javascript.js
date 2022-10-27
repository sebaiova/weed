$(function () {
    $('.collapsed[role="button"]').on('click', function () {
        var x = this;
        var y = x.getAttribute("href");
        var z = x.firstElementChild;
        

        $(y).on('hidden.bs.collapse', function () {
            z.className="fa fa-plus-circle";
            console.log(z);
        })

        $(y).on('shown.bs.collapse', function () {                        
            z.className="fa-solid fa-circle-minus";            
        })

    })
});