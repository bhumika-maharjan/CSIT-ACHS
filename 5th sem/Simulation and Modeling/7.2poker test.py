# Define Chi-Square tabulated value for 4-digit poker test
CHISQUARE = 9.49

def poker_test_4d(four_diff, four_of_a_kind, three_of_a_kind, one_pair, two_pair):
    # Calculate total number of generated numbers
    n = four_diff + four_of_a_kind + three_of_a_kind + one_pair + two_pair

    # Probabilities for 4-digit hands
    probabilities_4d = [0.504, 0.001, 0.036, 0.432, 0.027]
    efreq = [prob * n for prob in probabilities_4d]

    # Observed frequencies
    ofreq = [four_diff, four_of_a_kind, three_of_a_kind, one_pair, two_pair]

    # Calculate Chi-Square statistic
    csqstat = sum(
        (observed - expected) ** 2 / expected
        for observed, expected in zip(ofreq, efreq)
    )

    # Print results
    print("4-Digit Poker Test")
    print(f"Observed frequencies: {ofreq}")
    print(f"Expected frequencies: {efreq}")
    print(f"Chi-Square statistic: {csqstat:.2f}")
    print(f"Tabulated value: {CHISQUARE}")

    if csqstat <= CHISQUARE:
        print("The generated random numbers are independent.")
    else:
        print("The generated random numbers are not independent.")

def main():
    # Hard-coded observed frequencies for demonstration
    four_diff = 560
    four_of_a_kind = 1
    three_of_a_kind = 13
    one_pair = 394
    two_pair = 32

    poker_test_4d(four_diff, four_of_a_kind, three_of_a_kind, one_pair, two_pair)

if __name__ == "__main__":
    main()
