categories = {}
def add_item(category, item):
    if category in categories:
        categories[category].append(item)
    else:
        categories[category]=[item]


def display_categories():
    print("\n \n Here are the added categories and items:")
    for category, items in categories.items():
        print(f"{category}:")
        for item in items:
            print(f"-{item}")


while True:
    category = input("Enter a category (or 'done' to finish): ").strip()
    if category.lower() == 'done':
        break

    while True:
        item = input(f"Add item to '{category}' (or 'done' to finish): ").strip()
        if item.lower() == 'done':
            break
        add_item(category, item)

display_categories()
