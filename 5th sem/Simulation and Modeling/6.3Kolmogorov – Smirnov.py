#WAP to implement Kolmogorov – Smirnov test.

import math
import random

def sort_data(data):
    return sorted(data)

def mean(data):
    return sum(data) / len(data)

def std_dev(data):
    m = mean(data)
    variance = sum((x - m) ** 2 for x in data) / len(data)
    return math.sqrt(variance)

def normal_cdf(x, mean, std_dev):
    return 0.5 * (1 + math.erf((x - mean) / (std_dev * math.sqrt(2))))

def ks_statistic(data, cdf):
    n = len(data)
    return max(max(abs(i/n - cdf(x)) for i, x in enumerate(data, 1)),
               max(abs(cdf(x) - (i-1)/n) for i, x in enumerate(data, 1)))

def ks_critical_value(n, alpha):
    # Approximation of critical values for large n
    return math.sqrt(-0.5 * math.log(alpha / 2) / n)

def kolmogorov_smirnov_test(data, alpha=0.05):
    """
    Perform the Kolmogorov-Smirnov test for a given dataset.
    
    Args:
    data (list): The observed data
    alpha (float): The significance level (default: 0.05)
    
    Returns:
    tuple: (D_statistic, critical_value, result)
    """
    data = sort_data(data)
    n = len(data)
    
    # Calculate mean and standard deviation
    m = mean(data)
    s = std_dev(data)
    
    # Define the CDF of the theoretical distribution (normal in this case)
    cdf = lambda x: normal_cdf(x, m, s)
    
    # Calculate the D statistic
    D = ks_statistic(data, cdf)
    
    # Calculate the critical value
    critical_value = ks_critical_value(n, alpha)
    
    # Determine the test result
    if D <= critical_value:
        result = "Fail to reject H0"
    else:
        result = "Reject H0"
    
    return D, critical_value, result

# Example usage
random.seed(42)  # for reproducibility
data = [random.gauss(0, 1) for _ in range(100)]  # Generate some random normal data

D, critical_value, result = kolmogorov_smirnov_test(data)

print(f"Kolmogorov-Smirnov Test Results:")
print(f"D statistic: {D:.4f}")
print(f"Critical value: {critical_value:.4f}")
print(f"Result: {result}")

if result == "Fail to reject H0":
    print("The data appears to follow the specified distribution.")
else:
    print("The data does not appear to follow the specified distribution.")