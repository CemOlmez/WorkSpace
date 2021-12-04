from typing import Dict, List

students: dict[str, list[str]] ={
        "male":["Tom","Charlie","Harry","Frank"],
        "female":["Sarah","Huda","Samantha","Emily","Elizabeth"]
        }

for key in students.keys():
    for name in  students[key]:
        if "a"in name:
            print (name)
    
