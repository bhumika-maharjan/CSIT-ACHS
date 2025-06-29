import numpy as np

def point_estimation_and_bias(sample, population_mean):
    # Calculate sample mean
    sample_mean = np.mean(sample)

    # Calculate bias
    bias = sample_mean - population_mean

    return sample_mean, bias

# Example usage
if __name__ == "__main__":
    # Sample data
    sample = [5.5, 6.1, 5.7, 6.6, 5.2, 6.0, 5.6, 6.3, 5.9, 5.8]

    # Given population mean
    population_mean = 6.1

    sample_mean, bias = point_estimation_and_bias(sample, population_mean)

    # Print results with 2 decimal places
    print(f"Sample Mean: {sample_mean:.2f}")
    print(f"Bias: {bias:.2f}")
