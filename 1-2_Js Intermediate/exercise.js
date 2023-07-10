function printSongList(songPromise) {
  songPromise
    .then((songs) => {
      console.log("Song List:");
      songs.forEach((song) => {
        console.log(`Title: ${song.title}`);
        console.log(`Artist: ${song.artists[0].name}`);
        console.log(`Duration: ${song.duration}`);
        console.log("------------------------------");
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

async function printSongList(songPromise) {
  try {
    const songs = await songPromise;
    console.log("Song List:");
    songs.forEach((song) => {
      console.log(`Title: ${song.title}`);
      console.log(`Artist: ${song.artists[0].name}`);
      console.log(`Duration: ${song.duration}`);
      console.log("------------------------------");
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

const songPromise = new Promise((resolve, reject) => {
  const songList = [
    {
      title: "Song 1",
      artists: [{ name: "Artist 1" }],
      duration: 200,
    },
    {
      title: "Song 2",
      artists: [{ name: "Artist 2" }],
      duration: 180,
    },
  ];

  resolve(songList);
});

printSongList(songPromise);
