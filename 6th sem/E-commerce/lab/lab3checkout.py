products = [
    (1, "Ear Studs"),
    (2, "Hair Rubber"),
    (3, "Claw Clips"),
    (4, "Bangles"),
    (5, "Lipstick")
]

cart = []


def display_products():
    print("Available Products:")
    for product in products:
        print(f"{product[0]}. {product[1]}")


def add_to_cart(product_id, quantity):
    for product in products:
        if product[0] == product_id:
            cart.append({"name": product[1], "quantity": quantity})
            print(f"{product[1]} has been added to your cart!")


def display_cart():
    if not cart:
        print("\nYour cart is empty!")
    else:
        print("Items in your cart:")
        for item in cart:
            print(f"{item['name']} x {item['quantity']}")


def checkout():
    if not cart:
        print("\nYour cart is empty!")
        return

    total_items = sum(item['quantity'] for item in cart)
    print(f"\nYou have {total_items} items in your cart.")
    print("Proceeding to checkout...")

    print("Ordered items:")
    for item in cart:
        print(f"{item['name']} x {item['quantity']}")

    print("Thank you for your purchase!")


def main():
    display_products()
    while True:
        product_id = int(input("Enter product ID to add to cart (0 to quit): "))
        if product_id == 0:
            break
        quantity = int(input("Enter quantity: "))
        add_to_cart(product_id, quantity)

        view_cart = input("Do you want to view your cart? (yes/no): ").lower()
        if view_cart == 'yes':
            display_cart()

    checkout()


if __name__ == "__main__":
    main()
