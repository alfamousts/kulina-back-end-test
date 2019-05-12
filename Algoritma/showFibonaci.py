fn = 0 #global variable
fnn = 1 #global variable

#this function will print fibonaci number as many as input given from user
def printFibonaci(total):
    global fn
    global fnn
    if total == 1 :
        print(fnn, end = " ")
        fn = 0
        fnn = 1
    else:
        print(fnn, end = " ")
        fn , fnn = fnn , fn+fnn
        printFibonaci(total-1) #recursive function

total = int(input("numer of fibonaci you want to print : ") )
printFibonaci(total)
