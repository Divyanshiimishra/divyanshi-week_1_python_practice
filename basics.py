//practice of basics in python//

name = "Divyanshi"
age = 22
college = "Government Engineering College, Ajmer"

print("Name:", name)
print("Age:", age)
print("College:", college)

name = input("Enter your name: ")

print("Hello", name)

a = int(input("Enter first number: "))
b = int(input("Enter second number: "))

sum = a + b

print("Sum =", sum)

length = float(input("Enter length: "))
breadth = float(input("Enter breadth: "))

area = length * breadth

print("Area =", area)

num = int(input("Enter a number: "))

if num % 2 == 0:
    print("Even Number")
else:
    print("Odd Number")

num = int(input("Enter number: "))

if num > 0:
    print("Positive")
elif num < 0:
    print("Negative")
else:
    print("Zero")

a = int(input("Enter first number: "))
b = int(input("Enter second number: "))

if a > b:
    print(a, "is largest")
else:
    print(b, "is largest")



