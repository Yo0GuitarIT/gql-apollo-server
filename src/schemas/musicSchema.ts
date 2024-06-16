const musicTypeDefs = `#graphql
    type Artist {
        id: ID!
        artistName: String!
        albums: [Album!]
    }

    type Album {
        id: ID!
        albumName: String!
        artist: Artist!
        songs: [Song!]
     }

     type Song{
        id: ID!
        songName: String!
        artist: Artist!
        album: Album!
     }
     
     type Query {
        artists: [Artist]
        albums: [Album]
        songs: [Song]
        artist(id: ID!): Artist
        album(id: ID!): Album
        song(id: ID!): Song
     }

     type Mutation {
        deleteSong(id: ID!): [Song]
        addSong(song: AddSongInput!): Song
        updateSong(id: ID!, edits: EditSongInput!): Song
     }

     input AddSongInput{
        songName: String!
        artistId: String!
        albumId: String!
     } 

     input EditSongInput{
        songName: String
        artistId: String
        albumId: String
     } 
`;

export default musicTypeDefs;
