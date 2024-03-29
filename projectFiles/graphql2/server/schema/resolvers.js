const { PartList, Compatible_Vehicles } = require("../completeData");


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
                return PartList.filter((a) => a.General_Vehicle == General_Vehicle || a.General_Vehicle == "Universal");
            }
            else if (Type != null && Company != null && General_Vehicle == null) {
                //type and company are given
                return PartList.filter((a) => a.Company == Company && a.Type == Type);
            }
            else if (Type != null && Company == null && General_Vehicle != null) {
                //Type and General Vehicle are given
                return PartList.filter((a) => a.Type == Type && (a.General_Vehicle == General_Vehicle || a.General_Vehicle == "Universal"));
            }
            else if (Type == null && Company != null && General_Vehicle != null) {
                //Company and general vehicle are given
                return PartList.filter((a) => a.Company == Company && (a.General_Vehicle == General_Vehicle || a.General_Vehicle == "Universal"));
            }
            else {
                //all params are given
                return PartList.filter((a) => a.Type == Type && a.Company == Company && (a.General_Vehicle == General_Vehicle || a.General_Vehicle == "Universal"));
            }
        },
        vehicles() {
            return Compatible_Vehicles;
        },
        partByName(parent, args) {
            const { Product_Name } = args;
            return PartList.filter((a) => a.Product_Name == Product_Name);
        },
        partByYear(parent, args) {
            const { Year, Make, Model } = args;
            if (Year == null && Make == null && Model == null) {
                return Compatible_Vehicles;
            }
            else if (Year != null && Make == null && Model == null) {
                //when only year is given
                return Compatible_Vehicles.filter((a) => a.Year == Year || a.Year == "Universal");
            }
            else if (Year == null && Make != null && Model == null) {
                //when only Make is given
                return Compatible_Vehicles.filter((a) => a.Make == Make || a.Make == "Universal");
            }
            else if (Year == null && Make == null && Model != null) {
                //when only Model is given
                return Compatible_Vehicles.filter((a) => a.Model == Model || a.Model == "Universal");
            }
            else if (Year != null && Make != null && Model == null) {
                //when year and make are given
                return Compatible_Vehicles.filter((a) => (a.Year == Year || a.Year == "Universal") && (a.Make == Make || a.Make == "Universal") );
            }
            else if (Year != null && Make == null && Model != null) {
                //when year and Model are given
                return Compatible_Vehicles.filter((a) => (a.Year == Year || a.Year == "Universal") && (a.Model == Model || a.Model == "Universal"));
            }
            else if (Year == null && Make != null && Model != null) {
                //when Model and make are given
                let filterWithoutUniversal = Compatible_Vehicles.filter((a) =>a.Make == Make && a.Model == Model);

                if (filterWithoutUniversal.length > 0) {
                    //so we cant search for a Jeep F-150, because that car does not exist
                    return Compatible_Vehicles.filter((a) =>( a.Make == Make || a.Make == "Universal") && (a.Model == Model || a.Model == "Universal"));
                }
                else {
                    return filterWithoutUniversal;
                }
            }
            else {
                //all are given
                let filterWithoutUniversal = Compatible_Vehicles.filter((a) =>a.Make == Make && a.Model == Model);
                if (filterWithoutUniversal.length > 0) {
                    //so we cant search for a Jeep F-150, because that car does not exist
                    return Compatible_Vehicles.filter((a) =>(a.Year == Year || a.Year == "Universal") &&  (a.Make == Make || a.Make == "Universal") && (a.Model == Model || a.Model == "Universal"));
                }
                else {
                    return filterWithoutUniversal;
                }

              
            }
        },

    },
    Part: {
        //gets the proper compatible vehicles
        Compatible_Vehicles(parent) {
            return Compatible_Vehicles.filter(CompatibleVehicle => CompatibleVehicle.Product_Name === parent.Product_Name);
        }
    },
    CompatibleVehicle: {
        //gets the parts with each compatible vehicle
        VehicleParts(parent) {
            return PartList.filter(Part => Part.Product_Name === parent.Product_Name);
        }
    }
};

module.exports = { resolvers };