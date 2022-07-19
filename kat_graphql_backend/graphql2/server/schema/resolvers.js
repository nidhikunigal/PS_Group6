const { PartList, Compatible_Vehicles } = require("../allDataThree");


//resolver function is where we define all our query functions
//so we write the js code to complete the queries
const resolvers = {

    Query: { //resolvers for our queries
        //parts function, returns a list of all the parts

        getParts(Parent, args) {
            const { Type, Company, General_Vehicle } = args;
            if (Type == null && Company == null && General_Vehicle == null) {
                return PartList;
            }
            else if (Type != null && Company == null && General_Vehicle == null) {
                //only type is not null
                return PartList.filter((a) => a.Type == Type);
            }
            else if (Type == null && Company != null && General_Vehicle == null) {
                //only company is given
                return PartList.filter((a) => a.Company == Company);
            }
            else if (Type == null && Company == null && General_Vehicle != null) {
                //only general vehicle is null
                return PartList.filter((a) => a.General_Vehicle == General_Vehicle);
            }
            else if (Type != null && Company != null && General_Vehicle == null) {
                //type and company are given
                return PartList.filter((a) => a.Company == Company && a.Type == Type);
            }
            else if (Type != null && Company == null && General_Vehicle != null) {
                //Type and General Vehicle are given
                return PartList.filter((a) => a.Type == Type && a.General_Vehicle == General_Vehicle);
            }
            else if (Type == null && Company != null && General_Vehicle != null) {
                //Company and general vehicle are given
                return PartList.filter((a) => a.Company == Company && a.General_Vehicle == General_Vehicle);
            }
            else {
                //all params are given
                return PartList.filter((a) => a.Type == Type && a.Company == Company && a.General_Vehicle == General_Vehicle);

            }


        },


        parts() {

            return PartList;
        },
        vehicles() {
            return Compatible_Vehicles;
        },
        partByName(parent, args) {
            const { Product_Name } = args;
            return PartList.filter((a) => a.Product_Name == Product_Name);
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
            console.log(Compatible_Vehicles.Product_Name);
            return Compatible_Vehicles.filter((a) => a.Year == Year);

        },
    },
    Part: {
        //gets the proper compatible vehicles
        Compatible_Vehicles(parent) {
            // console.log(parent);
            return Compatible_Vehicles.filter(CompatibleVehicle => CompatibleVehicle.Product_Name === parent.Product_Name);
        }
    },
    CompatibleVehicle: {
        //gets the parts with each compatible vehicle
        VehicleParts(parent) {
            //console.log(parent);
            return PartList.filter(Part => Part.Product_Name === parent.Product_Name);
        }
    }



};

module.exports = { resolvers };