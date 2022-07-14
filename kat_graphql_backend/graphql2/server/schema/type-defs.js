const { gql } = require("apollo-server"); //graph ql working on apollo server

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
    year: String!
    make: String!
    model: String
    trim: String!
}


type Query { #queries we want implimented
parts: [Part]! #lists all the parts
partByType(Type:String!): [Part!] #lists parts based on their type, maybe make type an enum ?
partByCompany(Company:String!):[Part!] #lists parts based on the company
partByGeneralVehicle(General_Vehicle:String!):[Part!] #lists parts based off the general car
partByYear(year:String!):[Part!]


}


`;

module.exports = { typeDefs };