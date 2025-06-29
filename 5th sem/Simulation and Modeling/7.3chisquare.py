import numpy as np

# Constants
INTERVALS = 10  # number of intervals
TABULATED_VALUE = 16.919  # assumed LOS=5% and DF=9

def main():
    x0 = 7  # initial seed
    a = 13  # constant multiplier (changed for variability)
    c = 17  # increment (changed for variability)
    m = 97  # modulus (changed for variability)
    n = 100  # size of the sample
    lb = np.arange(0, 100, 10)  # lower bounds of the intervals
    ub = np.arange(9, 109, 10)  # upper bounds of the intervals, adjusted to include the upper edge
    observed = np.zeros(INTERVALS, dtype=int)  # observed frequencies
    array = np.zeros(n, dtype=int)  # store the random numbers generated

    # Generate random numbers using mixed congruential method
    print("The random numbers are:")
    for i in range(n):
        x1 = (a * x0 + c) % m
        array[i] = x1
        x0 = x1
        print(f"{array[i]}\t", end="")
    print()

    # Calculate observed frequency for each interval
    for i in range(n):
        for j in range(INTERVALS):
            if lb[j] <= array[i] <= ub[j]:
                observed[j] += 1
                break

    # Calculate expected frequency, chi-square values, and total
    expected = n / INTERVALS
    calculation = (observed - expected) ** 2 / expected
    final = np.sum(calculation)
    N = np.sum(observed)

    # Display in tabulated format
    print("\n---------------------------------------------------------------------")
    print("S.No \t\t Oi \t\t Ei \t\t((Oi-Ei)*(Oi-Ei))/Ei ")
    print("---------------------------------------------------------------------")
    for i in range(INTERVALS):
        print(f"{i+1} \t\t {observed[i]} \t\t {expected:.0f} \t\t {calculation[i]:.4f}")
    print("---------------------------------------------------------------------")
    print(f"\t\t{N} \t\t\t\t {final:.4f}")

    # Compare tabulated and calculated value and conclude if Ho is accepted
    if final <= TABULATED_VALUE:
        print(f"\nThe calculated value = {final:.4f} < Tabulated value = {TABULATED_VALUE}. "
              f"So, the null hypothesis is not rejected and hence the random numbers are uniform.")
    else:
        print(f"\nThe calculated value = {final:.4f} > Tabulated value = {TABULATED_VALUE}. "
              f"So, the null hypothesis is rejected and hence the random numbers are not uniform.")

if __name__ == "__main__":
    main()
