def mm1_queue(arrival_rate, service_rate):
    # Calculate utilization factor (ρ)
    rho = arrival_rate / service_rate

    # Calculate average number of customers in the system (L)
    L = rho / (1 - rho)

    # Calculate average number of customers in the queue (Lq)
    Lq = rho**2 / (1 - rho)

    # Calculate average time a customer spends in the system (W)
    W = 1 / (service_rate - arrival_rate)

    # Calculate average time a customer spends in the queue (Wq)
    Wq = rho / (service_rate - arrival_rate)

    return rho, L, Lq, W, Wq

if __name__ == "__main__":
    arrival_rate = float(input("Enter Arrival Rate (λ): "))
    service_rate = float(input("Enter Service Rate (μ): "))

    rho, L, Lq, W, Wq = mm1_queue(arrival_rate, service_rate)

    print("Utilization factor (ρ):", rho)
    print("Average number of customers in the system (L):", L)
    print("Average number of customers in the queue (Lq):", Lq)
    print("Average time a customer spends in the system (W):", W)
    print("Average time a customer spends in the queue (Wq):", Wq)
