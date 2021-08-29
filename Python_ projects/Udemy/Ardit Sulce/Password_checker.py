correct_password = "python123"
name = input("Enter name: ")
surname = input("Enter Surname: ")
password = input("Enter Password: ")

while correct_password != password:
    password = input ("Wrong passsword! Enter again: ")

print ("Hi, {} you are logged in".format(name))
