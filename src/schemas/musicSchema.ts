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
     }
`;


export default musicTypeDefs;