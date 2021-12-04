def reverse_words(s):  # input is entered in s
    word = s.split()  # we split input(s) and storing in word
    s = " ".join(reversed(word)) #frist we reversed the (word) and then we joined them (join()) with a space("")
    return s