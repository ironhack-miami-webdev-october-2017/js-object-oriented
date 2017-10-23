console.log('plain-objects.js CONNECTED');


// SONGs

var songA = {
    artist: 'R. Kelly',
    title: 'I Believe I Can Fly',
    album: 'Space Jam',
    year: 1996,
    genre: 'Children\'s music',

    play: function () {
        console.log('Playing "I Believe I Can Fly" by R. Kelly');
    },

    pause: function () {
        console.log('Pausing "I Believe I Can Fly"');
    }
};

var songB = {
    artist: 'Bob Marley',
    title: 'Jamming',
    album: 'Babylon by Bus',
    year: 1978,
    genre: 'Reggae',

    play: function () {
        console.log('Playing "Jamming" by Bob Marley');
    },

    pause: function () {
        console.log('Pausing "Jamming"');
    }
};

songA.play();

songA.pause();

songB.play();
