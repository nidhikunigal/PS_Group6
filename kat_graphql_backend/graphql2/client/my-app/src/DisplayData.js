import React, { useState } from "react";
import { useQuery, useLazyQuery, gql, useMutation } from "@apollo/client";

const QUERY_ALL_PARTS = gql` 
  query allParts{
    parts {
      Type
      Product_Name
      Company
      Cost
      Specifications
      Technical_Details
      General_Vehicle
    }
  }
`;

const QUERY_ALL_VEHICLES = gql` 
  query allVehicles{
    vehicles {
      Product_Name
      Year
      Make
      Model
      Trim
    }
  }
`;

const QUERY_PARTS_BY_NAME = gql` 
  query partsByName($productName: String!) {
    partByName(Product_Name: $productName) {
      Type
      Product_Name
      Company
      Cost
      Specifications
      Technical_Details
      General_Vehicle
    }
  }
`;

const QUERY_PARTS_BY_TYPE = gql` 
  query partsByType($type: String!)  {
    partByType(Type: $type) {
      Type
      Product_Name
      Company
      Cost
      Specifications
      Technical_Details
      General_Vehicle
    }
  }
`;

const QUERY_PARTS_BY_COMPANY = gql` 
  query partByCompany($company: String!)  {
    partByCompany(Company: $company) {
      Type
      Product_Name
      Company
      Cost
      Specifications
      Technical_Details
      General_Vehicle
    }
  }
`;

const QUERY_PARTS_BY_GENERAL = gql` 
  query partsByGeneral($generalVehicle: String!)  {
    partByGeneralVehicle(General_Vehicle: $generalVehicle) {
      Type
      Product_Name
      Company
      Cost
      Specifications
      General_Vehicle
      Technical_Details
    }
  }
`;

const QUERY_PARTS_BY_YEAR = gql` 
  query partsByYear($year: String!)  {
    partByYear(Year: $year) {
      Product_Name
      Year
      Make
      Model
      Trim
    }
  }
`;