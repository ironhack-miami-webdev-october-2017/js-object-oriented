console.log('prototypes.js READY');


// Prototypes --------------------------------
// -------------------------------------------
// Where the methods of a constructor go.


function Song (songTitle, songArtist, myYear) {
    // constructor function refers to the empty object by using "this"
    this.artist = songArtist;
    this.title = songTitle;
    this.year = myYear;
}

// the methods of a constructor function should always go on the prototype
// (it avoids the memory waste of duplicate copies)
Song.prototype.play = function () {
    console.log('Playing "'+ this.title +'" by ' + this.artist);
};

Song.prototype.pause = function () {
    console.log('Pausing "'+ this.title +'"');
};


var songA = new Song('I Believe I Can Fly', 'R. Kelly', 1996);

var songB = new Song('Jamming', 'Bob Marley', 1978);

console.log(songA);
console.log(songB);

songA.play();

songA.pause();

songB.play();

songB.pause();
