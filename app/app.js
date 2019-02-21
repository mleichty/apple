function loadData() {
    //url then data that's being returned
    //can use .then which is a promise to wait until data has loaded
    $.getJSON("data/data.json", function (data) {
        // console.log(data.Sections);

        //first parameter in function is the index value of the array
        // $.each(data.Nav, function (idx, value) {
        //     console.log(idx);
        //     console.log(value.navHTML);

            $(".navBar").append(data.Nav.navHTML);
        // });

        $.each(data.Sections, function(idx, value) {

            $("body").append(value.sectionHTML);
        })
    });
}

$(document).ready(function(){
    loadData();
});