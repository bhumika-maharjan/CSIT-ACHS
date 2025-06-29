#WAP to generate 50 random numbers using Mixed Congruential Method  where X0=11, m=100, a = 5 and c = 13.  

def mixed_congruential_method(X0, a, c, m, n):
    random_numbers = []
    Xn = X0
    for _ in range(n):
        Xn = (a * Xn + c) % m
        random_numbers.append(Xn)
    return random_numbers

# Parameters
X0 = 11
m = 100
a = 5
c = 13
n = 50

# Generate 50 random numbers
random_numbers = mixed_congruential_method(X0, a, c, m, n)

# Print random numbers with a new line after every 10 numbers
for i in range(len(random_numbers)):
    print(random_numbers[i], end=' ')
    if (i + 1) % 10 == 0:
        print()