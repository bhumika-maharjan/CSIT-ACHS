export const  registerFormControls = [
    {
        name: "userName",
        label: "User Name",
        placeholder: "Enter your user name",
        componentType: "input",
        type: "text",
      },
      {
        name: "email",
        label: "Email",
        placeholder: "Enter your email",
        componentType: "input",
        type: "email",
      },
      {
        name: "password",
        label: "Password",
        placeholder: "Enter your password",
        componentType: "input",
        type: "password",
      },
    ];



export const loginFormControls = [
    {
      name: "email",
      label: "Email",
      placeholder: "Enter your email",
      componentType: "input",
      type: "email",
    },
    {
      name: "password",
      label: "Password",
      placeholder: "Enter your password",
      componentType: "input",
      type: "password",
    },
  ] 


export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "casualwears", label: "Casual Wears" },
      { id: "partywears", label: "Party Wears" },
      { id: "weddingwears", label: "Wedding Wears" },
      
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "sabyasachi", label: "Sabyasachi" },
      { id: "biba", label: "Biba" },
      { id: "manishMalhotra", label: "Manish Malhotra" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
]


export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "Shop",
    label: "Shop",
    path: "/shop/listing",
  },
  {
    id: "About",
    label: "About",
    path: "/shop/about",
  },
  {
    id: "Contact",
    label: "Contact",
    path: "/shop/contact",
  },

  {
    id: "Search",
    label: "Search",
    path: "/shop/search",
  },
  
  
];

export const categoryOptionsMap = {
  'casualwears': "Casual Wears",
  'partywears': 'Party Wears',
  'weddingwears': 'Wedding Wears'
}


export const brandOptionsMap = {
  'sabyasachi': "Sabyasachi",
  'biba': 'Biba',
  'manishMalhotra': 'Manish Malhotra'
}

export const filterOptions = {
  brand: [
    { id: "sabyasachi", label: "Sabyasachi" },
    { id: "biba", label: "Biba" },
    { id: "manishMalhotra", label: "Manish Malhotra" },
  ],
  category: [
    { id: "casualwears", label: "Casual Wears" },
    { id: "partywears", label: "Party Wears" },
    { id: "weddingwears", label: "Wedding Wears" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
]

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];