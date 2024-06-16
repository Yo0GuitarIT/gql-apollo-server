import musicDB from "../data/musicDB";

const musicResolvers = {
  Query: {
    artists() {
      return musicDB.artists;
    },
    albums() {
      return musicDB.albums;
    },
    songs() {
      return musicDB.songs;
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
          return musicDB.songs.filter(song=>song.albumId === album.id )
      }
  },
};

export default musicResolvers;
