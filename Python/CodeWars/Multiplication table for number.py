def multi_table(number):
    table  = ""
    for num in range (1,11):
        table += (str(num) + " * " + str(number) + " = " + str(num*number) + "\n")
    return table.strip()