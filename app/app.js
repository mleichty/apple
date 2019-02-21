function loadData() {
    //url then data that's being returned
    //can use .then which is a promise to wait until data has loaded
    $.getJSON("data/data.json", function (data) {
        console.log(data.Sections);
        //let is var but only available in the function that we're writing in ?
        // for(let i = 0; i < data.Nav.length; i++) {
        //     console.log(data.Nav[i].linkName.toUpperCase());
        // }

        //first parameter in function is the index value of the array
        $.each(data.Nav, function (idx, value) {
            console.log(idx);
            console.log(value.linkName);

            let ln = '<a href="' + value.linkURL + '" id ='+ value.idName.toLowerCase() + '>' + value.linkName + '</a>';
            $("nav").append(ln);
        });

        $.each(data.Sections, function(idx, value) {
            let section = '<section id="' + value.idName + '">'+value.headerName+'</section>';
            $("#content").append(section);
        })
    });
}

//when just use function() it's an anonymous function
$(document).ready(function(){
    // alert("hello");
    loadData();
});