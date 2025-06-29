import scipy.stats as stats
import numpy as np


def confidence_interval(sample_mean, sample_std, n, confidence_level):
    # Calculate the critical value
    alpha = 1 - confidence_level
    t_critical = stats.t.ppf(1 - alpha / 2, df=n - 1)

    # Calculate the margin of error
    margin_of_error = t_critical * (sample_std / np.sqrt(n))

    # Calculate the confidence interval
    lower_bound = sample_mean - margin_of_error
    upper_bound = sample_mean + margin_of_error

    return lower_bound, upper_bound, margin_of_error


# Example usage
if __name__ == "__main__":
    # Given data
    sample_mean = 5.8
    sample_std = 1.6
    n = 120
    confidence_level = 0.95

    lower_bound, upper_bound, margin_of_error = confidence_interval(sample_mean, sample_std, n, confidence_level)

    print(f"95% Confidence Interval: ({lower_bound:.2f}, {upper_bound:.2f})")
    print(f"Margin of Error: ±{margin_of_error:.2f}")
