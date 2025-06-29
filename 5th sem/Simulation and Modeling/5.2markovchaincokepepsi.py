# Transition probability matrix
P = [[0.9, 0.1],
     [0.2, 0.8]]

# Matrix multiplication function
def matrix_multiply(A, B):
    # Dimensions of matrices A and B
    rows_A = len(A)
    cols_A = len(A[0])
    cols_B = len(B[0])

    # Resultant matrix C
    C = [[0 for _ in range(cols_B)] for _ in range(rows_A)]

    # Perform matrix multiplication
    for i in range(rows_A):
        for j in range(cols_B):
            for k in range(cols_A):
                C[i][j] += A[i][k] * B[k][j]

    return C

# Calculate P2 = P * P (matrix multiplication)
P2 = matrix_multiply(P, P)

# Extract the probability of purchasing Coke after two purchases
coke_prob = (P2[1][0])  # Transition from Pepsi to Coke

print("The probability of purchasing Coke after two purchases from now is:", coke_prob)
