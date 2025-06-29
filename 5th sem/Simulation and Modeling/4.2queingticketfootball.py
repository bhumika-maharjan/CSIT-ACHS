
# Given parameters
lambda_arrival = 1  # arrival rate (per minute)
mu_service = 3  # service rate (per minute), since it takes 20 seconds to purchase a ticket
time_to_reach_seat = 1.5  # time to reach the correct seat after purchasing the ticket (minutes)

# Calculate the utilization factor (rho)
rho = lambda_arrival / mu_service

# Calculate the time a customer expects to spend in the queue (Wq)
Wq = rho / (mu_service - lambda_arrival)

# Calculate the total time spent by a sports fan to be seated in his seat (W)
W = Wq + 1 / mu_service + time_to_reach_seat

print("Total time spent by a sports fan to be seated in his seat (minutes):", W)

# Calculate the time left before the game starts
time_left = 2

# Check if the sports fan can expect to be seated for the kick-off
if W <= time_left:
    print("The sports fan can expect to be seated for the kick-off.")
else:
    print("The sports fan may not be seated for the kick-off.")
    