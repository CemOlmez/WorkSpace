ef get_real_floor(n):
    if n <= 0:
        return n
    elif n <= 12:
        return n-1
    elif n > 13:
        return n-2