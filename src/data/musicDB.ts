let artists: Array<{
  id: string;
  artistName: string;
}> = [
  { id: "1", artistName: "Bring Me The Horizon" },
  { id: "2", artistName: "Linkin Park" },
  { id: "3", artistName: "Coldplay" },
];

let albums: Array<{
  id: string;
  albumName: string;
  artistId: string;
}> = [
  // Bring Me The Horizon 的專輯
  { id: "1", albumName: "Sempiternal", artistId: "1" },
  { id: "2", albumName: "That's the Spirit", artistId: "1" },

  // Linkin Park 的專輯
  { id: "3", albumName: "Hybrid Theory", artistId: "2" },
  { id: "4", albumName: "Meteora", artistId: "2" },

  // Coldplay 的專輯
  { id: "5", albumName: "Parachutes", artistId: "3" },
  { id: "6", albumName: "A Rush of Blood to the Head", artistId: "3" },
];

let songs: Array<{
  id: string;
  songName: string;
  artistId: string;
  albumId: string;
}> = [
  // Bring Me The Horizon - Sempiternal
  { id: "1", songName: "Can You Feel My Heart", artistId: "1", albumId: "1" },
  { id: "2", songName: "The House of Wolves", artistId: "1", albumId: "1" },
  { id: "3", songName: "Empire (Let Them Sing)", artistId: "1", albumId: "1" },
  { id: "4", songName: "Sleepwalking", artistId: "1", albumId: "1" },
  { id: "5", songName: "Shadow Moses", artistId: "1", albumId: "1" },
  {
    id: "6",
    songName: "And the Snakes Start to Sing",
    artistId: "1",
    albumId: "1",
  },
  { id: "7", songName: "Seen It All Before", artistId: "1", albumId: "1" },

  // Bring Me The Horizon - That's the Spirit
  { id: "8", songName: "Doomed", artistId: "1", albumId: "2" },
  { id: "9", songName: "Happy Song", artistId: "1", albumId: "2" },
  { id: "10", songName: "Throne", artistId: "1", albumId: "2" },
  { id: "11", songName: "True Friends", artistId: "1", albumId: "2" },
  { id: "12", songName: "Avalanche", artistId: "1", albumId: "2" },
  { id: "13", songName: "Follow You", artistId: "1", albumId: "2" },
  { id: "14", songName: "Drown", artistId: "1", albumId: "2" },

  // Linkin Park - Hybrid Theory
  { id: "15", songName: "Papercut", artistId: "2", albumId: "3" },
  { id: "16", songName: "One Step Closer", artistId: "2", albumId: "3" },
  { id: "17", songName: "With You", artistId: "2", albumId: "3" },
  { id: "18", songName: "Points of Authority", artistId: "2", albumId: "3" },
  { id: "19", songName: "Crawling", artistId: "2", albumId: "3" },
  { id: "20", songName: "Runaway", artistId: "2", albumId: "3" },
  { id: "21", songName: "By Myself", artistId: "2", albumId: "3" },

  // Linkin Park - Meteora
  { id: "22", songName: "Foreword", artistId: "2", albumId: "4" },
  { id: "23", songName: "Don't Stay", artistId: "2", albumId: "4" },
  { id: "24", songName: "Somewhere I Belong", artistId: "2", albumId: "4" },
  { id: "25", songName: "Lying from You", artistId: "2", albumId: "4" },
  { id: "26", songName: "Hit the Floor", artistId: "2", albumId: "4" },
  { id: "27", songName: "Easier to Run", artistId: "2", albumId: "4" },
  { id: "28", songName: "Faint", artistId: "2", albumId: "4" },

  // Coldplay - Parachutes
  { id: "29", songName: "Don't Panic", artistId: "3", albumId: "5" },
  { id: "30", songName: "Shiver", artistId: "3", albumId: "5" },
  { id: "31", songName: "Spies", artistId: "3", albumId: "5" },
  { id: "32", songName: "Sparks", artistId: "3", albumId: "5" },
  { id: "33", songName: "Yellow", artistId: "3", albumId: "5" },
  { id: "34", songName: "Trouble", artistId: "3", albumId: "5" },
  { id: "35", songName: "Parachutes", artistId: "3", albumId: "5" },

  // Coldplay - A Rush of Blood to the Head
  { id: "36", songName: "Politik", artistId: "3", albumId: "6" },
  { id: "37", songName: "In My Place", artistId: "3", albumId: "6" },
  {
    id: "38",
    songName: "God Put a Smile upon Your Face",
    artistId: "3",
    albumId: "6",
  },
  { id: "39", songName: "The Scientist", artistId: "3", albumId: "6" },
  { id: "40", songName: "Clocks", artistId: "3", albumId: "6" },
  { id: "41", songName: "Daylight", artistId: "3", albumId: "6" },
  {
    id: "42",
    songName: "A Rush of Blood to the Head",
    artistId: "3",
    albumId: "6",
  },
];

export default { artists, albums, songs };
