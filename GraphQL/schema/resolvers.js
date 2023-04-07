const { UserList, MovieList } = require("../FakeData");
const _ = require("lodash");

const resolvers = {
    Query: {
        users: () => {
            return UserList;
        },

        user: (parent, args) => {
            const id = args.id;
            const user = _.find(UserList, {id: Number(id)});
            return user;
        },

        movies: () => {
            return MovieList;
        },

        movie: (parent, args) => {
            const name = args.name;
            return _.find(MovieList, { name })
        }
    },

    // resolver for a type
    User: {
        favoriteMovies: () => {
            return _.filter(MovieList, (movie) => movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2010)
        }
    },

    // mutations
    Mutation: {
        createUser: (parent, args) => {
            const user = args.input;
            const lastId = UserList[UserList.length-1].id;
            user.id = lastId;
            UserList.push(user);
            return user;
        },

        updateUsername: (parent, args) => {
            let { id, newusername } = args.input;
            id = parseInt(id);
            UserList.forEach((user) => {
                if(user.id === id) {
                    user.username = newusername;
                    newUser = user;
                }
            })
            return newUser;
        },

        deleteUser: (parent, args) => {
            let id = args.id;
            _.remove(UserList, (user) => user.id == Number(id))
            return null;
        }
    }
}

module.exports = { resolvers }