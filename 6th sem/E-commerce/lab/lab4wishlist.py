products = [
    (1, "Ear Studs"),
    (2, "Hair Rubber"),
    (3, "Claw Clips"),
    (4, "Bangles"),
    (5, "Lipstick")
]

cart = []
wish_list = []


def display_products():
    print("\nAvailable Products:")
    for product_id, product_name in products:
        print(f"{product_id}. {product_name}")


def add_to_cart(product_id, quantity):
    for product_id_, product_name in products:
        if product_id_ == product_id:
            cart.append({"name": product_name, "quantity": quantity})
            print(f"{product_name} added to your cart!")
            return
    print("Invalid product ID!")


def add_to_wish_list(product_id):
    for product_id_, product_name in products:
        if product_id_ == product_id:
            if product_name not in [item['name'] for item in wish_list]:
                wish_list.append({"name": product_name})
                print(f"{product_name} added to your wish list!")
            else:
                print(f"{product_name} is already in your wish list.")
            return
    print("Invalid product ID!")


def display_cart():
    if not cart:
        print("\nYour cart is empty.")
    else:
        print("\nItems in your cart:")
        for item in cart:
            print(f"{item['name']} x {item['quantity']}")


def display_wish_list():
    if not wish_list:
        print("\nYour wish list is empty.")
    else:
        print("\nItems in your wish list:")
        for item in wish_list:
            print(f"{item['name']}")


def checkout():
    if not cart:
        print("\nYour cart is empty. Please add items before checkout.")
        return

    total_items = sum(item['quantity'] for item in cart)
    print(f"\nProceeding to checkout with {total_items} items.")
    print("Ordered items:")
    for item in cart:
        print(f"{item['name']} x {item['quantity']}")
    print("Thank you for shopping with us!")


def main():
    display_products()
    while True:
        try:
            print("\nOptions:")
            print("1: Add to Cart")
            print("2: Add to Wish List")
            print("3: View Cart")
            print("4: View Wish List")
            print("0: Checkout and Exit")

            choice = int(input("Enter your choice: "))

            if choice == 0:
                break
            elif choice == 1:
                product_id = int(input("Enter product ID to add to cart: "))
                quantity = int(input("Enter quantity: "))
                if quantity <= 0:
                    print("Quantity must be at least 1.")
                    continue
                add_to_cart(product_id, quantity)
            elif choice == 2:
                product_id = int(input("Enter product ID to add to wish list: "))
                add_to_wish_list(product_id)
            elif choice == 3:
                display_cart()
            elif choice == 4:
                display_wish_list()
            else:
                print("Invalid choice. Please select a valid option.")
        except ValueError:
            print("Invalid input. Please enter numbers only.")

    checkout()


if __name__ == "__main__":
    main()
