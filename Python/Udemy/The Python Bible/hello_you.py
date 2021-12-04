#Ask user for  name
name=input("What is your Name?:")
print(name)

#Ask user for  age
age=input("What is your Age?:")
print(name)
print(age)

#Ask user for city
city=input("What city  do you live in?:")
print(city)

#Ask user what they enjoy
love=input("What do you enjoy doing?:")
print(love)

#Create output text

string="Your name is {} and you are {} years old.You live in{} and you love {}."
output= string.format(name,age,city,love)

#Print output to screen
print(output)
