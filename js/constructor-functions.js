console.log('constructor-functions.js READY');


// Constructor Functions ---------------------
// -------------------------------------------
// A function used to create new objects with a similar structure.
// It's like a template or blueprint for objects.


function Song (songTitle, songArtist, myYear) {
    // var obj = {};
    // obj.key = 'value';

    // constructor function refers to the empty object by using "this"
    this.artist = songArtist;
    this.title = songTitle;
    this.year = myYear;

    // even though you CAN do this, you shouldn't.
    // instead attach methods to the prototype (see prototypes.js)
    this.play = function () {
        console.log('Playing "'+ this.title +'" by ' + this.artist);
    };

    this.pause = function () {
        console.log('Pausing "'+ this.title +'"');
    };
}

// "new" creates an empty object
var songA = new Song('I Believe I Can Fly', 'R. Kelly', 1996);

var songB = new Song('Jamming', 'Bob Marley', 1978);

console.log(songA);
console.log(songB);

songA.play();

songA.pause();

songB.play();

songB.pause();

//      new Song('I Believe I Can Fly', 'R. Kelly')
//          ----  -------------------    --------
//           |        |                      |
// function Song (songTitle,            songArtist) {
//                     |                      |
//              this.title             this.artist
