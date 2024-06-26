import _db from "../data/_db";

const resolvers = {
  Query: {
    games() {
      return _db.games;
    },
    game(_: null, args: any) {
      return _db.games.find((game) => game.id === args.id);
    },
    authors() {
      return _db.authors;
    },
    author(_: null, args: any) {
      return _db.authors.find((author) => author.id === args.id);
    },
    reviews() {
      return _db.reviews;
    },
    review(_: null, args: any) {
      return _db.reviews.find((review) => review.id === args.id);
    },
  },

  Game: {
    reviews(parent: any) {
      return _db.reviews.filter((r) => r.game_id === parent.id);
    },
  },

  Author: {
    reviews(parent: any) {
      return _db.reviews.filter((r) => r.author_id === parent.id);
    },
  },

  Review: {
    author(parent: any) {
      return _db.authors.find((a) => a.id === parent.author_id);
    },
    game(parent: any) {
      return _db.games.find((g) => g.id === parent.game_id);
    },
  },

  Mutation: {
    deleteGame(_: null, args: any) {
      _db.games = _db.games.filter((g) => g.id !== args.id);
      return _db.games;
    },

    addGame(_: null, args: any) {
      const game = {
        ...args.game,
        id: Math.floor(Math.random() * 10000).toString(),
      };
      _db.games.push(game);
      return game;
    },

    updateGame(_: null, args: any) {
      _db.games = _db.games.map((g) => {
        if (g.id === args.id) {
          return { ...g, ...args.edits };
        }
        return g;
      });
      return _db.games.find((g) => g.id === args.id);
    },
  },
};
export default resolvers;
