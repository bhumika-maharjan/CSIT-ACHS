import random

def f(x):
    # Define the function here. For example, f(x) = x^2
    return x**2

def estimate_area_under_curve(a, b, num_samples):
    # Determine the maximum value of the function in the interval [a, b]
    max_y = max(f(a), f(b))
    
    # Count the number of points below the curve
    points_below_curve = 0
    
    for _ in range(num_samples):
        x = random.uniform(a, b)
        y = random.uniform(0, max_y)
        
        if y <= f(x):
            points_below_curve += 1
    
    # Estimate the area under the curve
    bounding_box_area = (b - a) * max_y
    area_estimate = (points_below_curve / num_samples) * bounding_box_area
    return area_estimate

# Interval [a, b] and number of samples for the simulation
a = 0
b = 1
num_samples = 1000000

area_estimate = estimate_area_under_curve(a, b, num_samples)
print(f"Estimated area under the curve between {a} and {b}: {area_estimate}")
