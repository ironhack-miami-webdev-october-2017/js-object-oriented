function Song (songTitle, songArtist, myYear) {
    this.artist = songArtist;
    this.title = songTitle;
    this.year = myYear;
}

Song.prototype.play = function () {
    console.log('Playing "'+ this.title +'" by ' + this.artist);
};

Song.prototype.pause = function () {
    console.log('Pausing "'+ this.title +'"');
};



// ------------------------------------------------------



// Inheritance ------------------------------------------
// ------------------------------------------------------
// Sharing code between constructor functions.
//
// 2 aspects to inherit:
//    #1 the code inside constructor function (lines 2-4)
//    #2 the constructor's prototype (lines 7-13)

function CountrySong (songTwanginess, countryTitle, countryArtist) {
    // #1 call the "Song" constructor with our "CountrySong" object
    Song.call(this, countryTitle, countryArtist);

    this.twanginess = songTwanginess;
    this.hasTactor = false;
}

// #2 create a new prototype for "CountrySong" with the "Song" prototype attached
CountrySong.prototype = Object.create(Song.prototype);

//  🚨 🚨 🚨 🚨
// any new prototype methods must come AFTER prototype sharing
CountrySong.prototype.play = function () {
    console.log( "twang ".repeat(this.twanginess) );
};


var countryA = new CountrySong(3, 'Country Roads', 'John Denver');
var countryB = new CountrySong(7, 'Wal-Mart Parking Lot', 'Chris Cagle');

console.log(countryA);
console.log(countryB);

countryA.play();

countryA.pause();

countryB.play();

countryB.pause();
