/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["shedontknowbutsheknows","Truth Hurts","7 Rings","Roses"];
var artists = ["Tove Lo","Lizzo","Ariana Grande","Juice WRLD and Brendon Urie"];
var lengthOfSong = ["3:17","2:53","2:59","3:44"];
var links = ["https://www.youtube.com/watch?v=CKbp1rAh5PM",
"https://www.youtube.com/watch?v=P00HMxdsVZI",
"https://www.youtube.com/watch?v=M84fFXooS5w",
"https://www.youtube.com/watch?v=S_1MXllHWMQ"];
var images = ["http://static1.squarespace.com/static/51a11013e4b029928eb9006c/51f6d572e4b08b0bde0f718d/5a50f5aae2c483af0bdb1e8a/1515259473364/Blue+Lips.jpg?format=1500w",
"https://cdn.albumoftheyear.org/album/114436-truth-hurts.jpg",
"https://static.stereogum.com/uploads/2019/01/Ariana-Grande-_7-rings_-Artwork-1547761906-640x640.jpg",
"https://pixel.nymag.com/imgs/daily/vulture/2018/10/18/19-drugs.w330.h330.png"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above



function displaySongInfo(){ //for each = display all song info
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
    songs.forEach(function(song){
        $("#songs").append('<p>'+song+'</p>');            
    });
    
    artists.forEach(function(artist){
        $("#artists").append('<p>'+artist+'</p>');            
    });
    
    lengthOfSong.forEach(function(length){
        $("#lengths").append('<p>'+length+'</p>');            
    });
    
    links.forEach(function(link){
        $("#links").append('<a href="' + link +'">Click Here</a>');
    });
    
    images.forEach(function(img){
        $("#images").append('<img src="' + img +'">');
    })
    
}

function emptySongInfo(){ //emptys html
    $("#images").empty();
    $("#songs").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();
    // Use jQuery to empty all of the remaining divs
    
}


function addSongInfo(){ //pushes new song info provided
    // BELOW write the code to add new items to each of the arrays.
    $("#add").click(function(){
        var Song = $("#song").val();
        var img = $("#image").val();
        var length = $("#length").val();
        var artist = $("#artist").val();
        var link = $("#link").val();
    
        songs.push(Song);
        artists.push(img);
        lengthOfSong.push(length);
        links.push(artist);
        images.push(link);
    });
}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
