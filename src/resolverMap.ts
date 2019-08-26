import { IResolvers } from 'graphql-tools';

const clubroom = [{  
    type: "clubroom",
    title: "B 308",
    description: 'description',
    startAt: "17:00",
    endAt: "18:00",
    date: "08/25/2019"
}]
const resolverMap: IResolvers = {
    Query: {
        info(_: void, args: void): string {
            return 'this is the API of a Booking App';
        },
        entry(_: void, args: void): Array<Object> {
            return clubroom;
        }
    },
    Mutation: {
        addEntry(root, args): Array<Object> {
            console.log(args)
            return clubroom.concat(args) ;
        }
    }
};

export default resolverMap;