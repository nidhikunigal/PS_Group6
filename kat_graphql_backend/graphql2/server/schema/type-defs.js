const { ApolloServer, gql } = require("apollo-server"); //graph ql working on apollo server

const typeDefs = gql`


type Part { #type def for the parts as a whole
    Type: String
    Product_Name: String
    Company: String
    Cost: Float
    Specifications: String
    Technical_Details: String
    General_Vehicle: String
    Compatible_Vehicles: [CompatibleVehicle!]!
    }

type CompatibleVehicle { #type def for the compatible vehicles
    Product_Name: String
    Year: String!
    Make: String!
    Model: String!
    Trim: String!
    VehicleParts:[Part!]!
}


type Query { #queries we want implimented
getParts(Type: String, Company: String ,General_Vehicle: String) : [Part]
vehicles:[CompatibleVehicle]!
partByName(Product_Name:String!): [Part!]
partByYear(Year:String!):[CompatibleVehicle!]

}


`;

module.exports = { typeDefs };