

# Given parameters
lambda_arrival = 1 / 10  # arrival rate (per minute)
mu_service = 1 / 5  # service rate (per minute)

# Calculate the utilization factor (rho)
rho = lambda_arrival / mu_service

# a. Probability that a customer will not have to wait at the counter
p0 = 1 - rho
print("Probability that a customer will not have to wait at the counter:", p0)

# b. Expected number of customers in the bank (L)
L = rho / (1 - rho)
print("Expected number of customers in the bank:", L)

# c. Time a customer expects to spend in the bank (W)
W = 1 / (mu_service - lambda_arrival)
print("Time a customer expects to spend in the bank (minutes):", W)