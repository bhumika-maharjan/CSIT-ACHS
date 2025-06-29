# Define the probabilities
p_rain_tomorrow_given_rain_today = 0.4
p_not_rain_tomorrow_given_rain_today = 0.6
p_rain_tomorrow_given_not_rain_today = 0.2
p_not_rain_tomorrow_given_not_rain_today = 0.8

# Calculate the probability of not raining the day after tomorrow given not raining today
p_not_rain_day_after_tomorrow_given_not_rain_tomorrow = p_not_rain_tomorrow_given_not_rain_today
p_not_rain_day_after_tomorrow_given_rain_tomorrow = p_not_rain_tomorrow_given_rain_today

p_not_rain_day_after_tomorrow_given_not_rain_today = (
    p_not_rain_day_after_tomorrow_given_not_rain_tomorrow * p_not_rain_tomorrow_given_not_rain_today +
    p_not_rain_day_after_tomorrow_given_rain_tomorrow * p_rain_tomorrow_given_not_rain_today
)

# Round the result to 2 decimal places
result_rounded = round(p_not_rain_day_after_tomorrow_given_not_rain_today, 2)

# Print the rounded result
print("The probability of not raining the day after tomorrow given not raining today is:", result_rounded)
