const spaceConsole = document.querySelector('.console');

const spacelog = (message) => {
  console.log(message);
  spaceConsole.innerHTML += `${message}<br>`;
}

const nextUp = () => {
  radio.randomStation();

}



const radio = {
  stations: [
    {
      name: 'WOOO',
      songs: [
        {
          title: "Charlie Don't Surf",
          artist: 'The Clash'
        },
        {
          title: 'Unwind',
          artist: 'Sonic Youth'
        },
        {
          title: 'Mary Had a Little Goat',
          artist: 'Harry Bellafonte'
        }
      ]
    },
    {
      name: 'WGUC',
      songs: [
        {
          title: 'Nocturne Op. 72. No. 1',
          artist: 'F. Chopin'
        },
        {
          title: 'Concerto Grosso Op. 3 No. 2',
          artist: 'Antonio Vivaldi'
        },
        {
          title: 'Row Row Row Your Goat',
          artist: 'Mel Torme'
        }
      ]
    },
    {
      name: 'WHFS',
      songs: [
        {
          title: 'Tommy The Cat',
          artist: 'Primus'
        },
        {
          title: "What's The Frequency, Kenneth?",
          artist: 'REM'
        },
        
        {
          title: "There Was An Old Lady Who Swallowed a Goat",
          artist: 'Burt Bacharach'
        },
        
      ]
    }
  ],

  randomStation() {

    const station = radio.stations[Math.floor(Math.random() * (radio.stations.length))];
    const song = station.songs[Math.floor(Math.random() * (station.songs.length))];

    spacelog(`${station.name} now playing: ${song.title} by ${song.artist}`)
  }
}

radio.randomStation();
