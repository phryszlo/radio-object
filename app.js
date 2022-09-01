
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
        }
      ]
    }
  ],

  randomStation() {

    const station = radio.stations[Math.floor(Math.random() * (radio.stations.length))];
    const song = station.songs[Math.floor(Math.random() * (station.songs.length))];

    console.log(`${station.name} now playing: ${song.title} by ${song.artist}`)
  }
}

radio.randomStation();
