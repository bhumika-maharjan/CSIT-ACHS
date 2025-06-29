import math

def factorial(n):
    if n == 0 or n == 1:
        return 1
    fact = 1
    for i in range(2, n + 1):
        fact *= i
    return fact

def poisson(x, lambda_):
    return (math.exp(-lambda_) * math.pow(lambda_, x)) / factorial(x)

lambda_ = 12.0

print(f"Poisson Distribution (lambda = {lambda_}):")
for x in range(16):
    p = poisson(x, lambda_)
    print(f"P(X = {x}) = {p:.6f}")
