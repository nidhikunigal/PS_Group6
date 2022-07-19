#f = open("testFile.txt", "r")


# takes in an array seperated by commas and returns an array of strings of car info
def parseSilverado(line):
    arr = []
    for x in line:
        currCar = x.split(" ")
        # print(currCar[0])
        year = ""
        make = ""
        model = ""
        trim = ""
        # print(currCar)
        if (currCar[0] == '"Compatible'):
            year = currCar[3]
            make = currCar[4]
            model = currCar[5] + " " + currCar[6]
            trim = currCar[7]
        else:
            year = currCar[1]
            make = currCar[2]
            model = currCar[3] + " " + currCar[4]
            trim = currCar[5]

        newVal = '{"year": "' + year + '", "make": "' + make + \
            '", "model": "' + model + '", "trim": "' + trim + '"}'
        arr.append(newVal)
    return arr


#line = f.readline()
#newArr = line.split(",")

# parseSilverado(newArr)
