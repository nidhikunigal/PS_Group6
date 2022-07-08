

input = "2020 Ford F-150 Platinum", "2020 Ford F-150 King Ranch", "2020 Ford F-150 Limited" 

def fordfilter(input):

    returnVal = []
    for i in input:
        value = i.split(" ")
        yearVal = value[0]
        makeVal = value[1]
        modelVal = value[2]
        trimVal = value[3]

    returnVal.append("{Year:" + yearVal + ", Make:" + makeVal + ", Model:" + modelVal + ", Trim:" + trimVal + "}")

    return(returnVal)

