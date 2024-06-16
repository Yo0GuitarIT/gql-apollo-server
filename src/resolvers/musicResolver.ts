import musicDB from "../data/musicDB";

const musicResolvers = {
  Query: {
    artists() {
      return musicDB.artists;
    },
    artist(_: null, args: any) {
      return musicDB.artists.find((artist) => artist.id === args.id);
    },
    albums() {
      return musicDB.albums;
    },
    album(_: any, args: any) {
      return musicDB.albums.find((album) => album.id === args.id);
    },
    songs() {
      return musicDB.songs;
    },
    song(_: any, args: any) {
      return musicDB.songs.find((song) => song.id === args.id);
    },
  },

  Artist: {
    albums(artist: any) {
      return musicDB.albums.filter((album) => album.artistId === artist.id);
    },
  },
  Album: {
    artist(album: any) {
      return musicDB.artists.find((artist) => artist.id === album.artistId);
    },

    songs(album: any) {
      return musicDB.songs.filter((song) => song.albumId === album.id);
    },
  },
  Song: {
    artist(song: any) {
      return musicDB.artists.find((artist) => artist.id === song.artistId);
    },
    album(song: any) {
      return musicDB.albums.find((album) => album.id === song.albumId);
    },
  },
};

export default musicResolvers;
