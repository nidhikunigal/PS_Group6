import json
from weakref import ref


def fileHandle(file, vehicle):
    with open("allDataCSV.json", "r") as data_file:
        data = json.load(data_file)
    newData = []
    for data in data:
        newData.append(data["Compatible Vehicles"])
    specific_vehicle = []
    refine = []

    for cars in newData:
        refine.append(cars.split(","))

    for i in range(len(refine)):
        temp = []
        for j in refine[i]:
            if vehicle in j:
                val = j.strip(" ")
                val = val.strip("\n")
                temp.append(val)
        if not temp:
            continue
        specific_vehicle.append(temp)
    return specific_vehicle


def objFormat(input):

    returnVal = []
    for i in input:
        for j in i:
            value = j.split(" ")
            yearVal = value[0]
            makeVal = value[1]
            modelVal = value[2]
            trimVal = value[3]
            returnVal.append(
                "{Year:"
                + yearVal
                + ", Make:"
                + makeVal
                + ", Model:"
                + modelVal
                + ", Trim:"
                + trimVal
                + "}"
            )

    return returnVal


def main():
    file = "allDataCSV.json"
    # input vehicle brand
    vehicle = "Ram"
    refined_data = fileHandle(file, vehicle)
    res = objFormat(refined_data)
    print(res)


if __name__ == "__main__":
    main()
