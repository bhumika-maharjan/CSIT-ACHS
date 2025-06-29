import random

def random_walk(n_steps):
    position = 0
    walk = [position]

    for _ in range(n_steps):
        step = random.choice([-1, 1])
        position += step
        walk.append(position)

    return walk

def main():
    n_steps = 15
    walk = random_walk(n_steps)

    for step_num, position in enumerate(walk):
        print(f"Step {step_num}: Position {position}")

if __name__ == "__main__":
    main()