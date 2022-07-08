import json

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

def main():
    file = "allDataCSV.json"
    vehicle = "Toyota"
    print(fileHandle(file, vehicle))

if __name__ == "__main__":
  main()
