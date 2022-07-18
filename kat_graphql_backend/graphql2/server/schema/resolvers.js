const { PartList } = require("../allDataTwo");


//resolver function is where we define all our query functions
//so we write the js code to complete the queries
const resolvers = {

    Query: { //resolvers for our queries
        //parts function, returns a list of all the parts
        parts() {

            return PartList;
        },
        //get a part by its type, ex leveling suspension
        partByType(parent, args) {
            const { Type } = args;
            return PartList.filter((a) => a.Type == Type);
        },
        partByCompany(parent, args) {
            const { Company } = args;
            return PartList.filter((a) => a.Company == Company);
        },
        partByGeneralVehicle(parent, args) {
            const { General_Vehicle } = args;
            return PartList.filter((a) => a.General_Vehicle == General_Vehicle);
        },
        partByYear(parent, args) {
            const { Year } = args;
            return PartList.Compatible_Vehicles;

        },
    }



};

module.exports = { resolvers };