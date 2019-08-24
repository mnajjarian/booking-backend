import { IResolvers } from 'graphql-tools';

const resolverMap: IResolvers = {
    Query: {
        info(_: void, args: void): string {
            return 'this is the API of a Booking App'
        },
    },
};

export default resolverMap;