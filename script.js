$(document).ready(function(){
    $(".btn1").on("click",function(){
        var num = Math.ceil(Math.random()*88)
        $.get(`https://akabab.github.io/starwars-api/api/id/${num}.json`,function(data){
            $(".name").text(`Name: ${data["name"]}`)
            $(".home").text(`Homeworld: ${data["homeworld"]}`)
            $(".species").text(`Species: ${data["species"]}`)
            $(".mass").text(`Mass: ${data["mass"]}`)
            $(".height").text(`Height: ${data["height"]}`)
            $(".haircolor").text(`Haircolour: ${data["hairColor"]}`)
            $(".skincolor").text(`Skincolour: ${data["skinColor"]}`)
            $(".eyecolor").text(`Eyecolour: ${data["eyeColor"]}`)
            $(".photo").attr("src",data["image"])
        })
    })
})