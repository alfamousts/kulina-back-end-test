#this function will have string input
def printNumberZeroPadded(numberStr) :
    if(len(numberStr)>0):
        firstChar = numberStr[0]
        n = len(numberStr)
        print(firstChar.ljust(n,'0'))
        printNumberZeroPadded(numberStr[1:])

number = input("Enter number : ")
printNumberZeroPadded(number)
