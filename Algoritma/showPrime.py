
#this function will print the prime number within given interval from user
def primeNumber(start,end):
    # Traverse each number in the interval
    # with the help of for loop
    for i in range(start, end + 1):

        # Skip 1 a s1 is niether
        # prime nor composite
        if (i <= 1):
            continue

        # flag variable to tell
        # if i is prime or not
        flag = 1

        for j in range(2, i // 2 + 1):
            if (i % j == 0):
                flag = 0
                break

        # flag = 1 means i is prime
        # and flag = 0 means i is not prime
        if (flag == 1):
            print(i, end = " ")

start = int(input("Start Interval : ") )
end = int(input("End of Interval : "))
primeNumber(start,end)
