# Function to calculate investment
def calculate_investment(Y):
    return 2 + 0.1 * Y - 1

# Function to calculate national income
def calculate_income(I, G):
    return 45.45 + 2.27 * (I + G)

# Function to calculate taxes
def calculate_taxes(Y):
    return 0.2 * Y

# Function to calculate consumption
def calculate_consumption(Y, T):
    return 20 + 0.7 * (Y - T)

def main():
    years = 5
    income = [0] * years
    investment = [0] * years
    taxes = [0] * years
    consumption = [0] * years
    growth = [0] * years
    government_expenditure = [20, 25, 30, 35, 40]  # Government expenditure for each year
    
    # Initial income (Y-1)
    Y = 80
    previous_income = Y

    # Print table header
    print(f"{'Year':<5} {'Gov Expenditure':<20} {'Income':<10} {'Investment':<10} {'Taxes':<10} {'Consumption':<15} {'Growth (%)':<15}")
    print("-" * 91)

    for t in range(years):
        # Calculate investment for the current year
        investment[t] = calculate_investment(Y)
        
        # Calculate income for the current year
        income[t] = calculate_income(investment[t], government_expenditure[t])
        
        # Calculate taxes for the current year
        taxes[t] = calculate_taxes(income[t])
        
        # Calculate consumption for the current year
        consumption[t] = calculate_consumption(income[t], taxes[t])

        # Calculate growth of national income
        if t == 0:
            growth[t] = ((income[t] - previous_income) / previous_income) * 100
        else:
            growth[t] = ((income[t] - income[t-1]) / income[t-1]) * 100

        # Print the results for the current year in tabular format
        print(f"{t + 1:<5} {government_expenditure[t]:<20.2f} {income[t]:<10.2f} {investment[t]:<10.2f} {taxes[t]:<10.2f} {consumption[t]:<15.2f} {growth[t]:<15.2f}")
        
        # Update Y for the next year
        Y = income[t]

if __name__ == "__main__":
    main()
