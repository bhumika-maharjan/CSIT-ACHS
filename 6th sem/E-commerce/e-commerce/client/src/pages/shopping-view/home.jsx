




// import { useState, useEffect } from 'react';
// import bannerOne from '../../assets/hotgown.jpg';
// import bannerTwo from '../../assets/redhotsari.jpg';
// import bannerThree from '../../assets/panjabi.jpg';
// import { Button } from '@/components/ui/button';
// import { ChevronLeftIcon, ChevronRightIcon, CloudLightning, ShirtIcon, WatchIcon, PartyPopperIcon, HeartIcon, CrownIcon, StarIcon, GemIcon } from 'lucide-react';
// import { Card, CardContent } from '@/components/ui/card';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchAllFilteredProducts } from '@/store/shop/products-slice';
// import ShoppingProductTile from '@/components/shopping-view/product-tile';
// import { useNavigate } from 'react-router-dom';

// const categoriesWithIcon = [
//   { id: "casualwears", label: "Casual Wears", icon: ShirtIcon },
//   { id: "partywears", label: "Party Wears", icon: PartyPopperIcon },
//   { id: "weddingwears", label: "Wedding Wears", icon: HeartIcon },
// ];

// const brandsWithIcons=
// [
//   { id: "sabyasachi", label: "Sabyasachi", icon: CrownIcon },
//   { id: "biba", label: "Biba", icon: StarIcon },
//   { id: "manishMalhotra", label: "Manish Malhotra",  icon: GemIcon },
// ]

// function ShoppingHome() {
//   const slides = [bannerOne, bannerTwo, bannerThree];
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const {productList} =useSelector(state=> state.shopProducts);
//   const dispatch =useDispatch();
//   const navigate = useNavigate()



//   function handleNavigateToListingPage(getCurrentItem, section){
//     sessionStorage.removeItem('filters')
//     const currentFilter ={
//       [section]: [getCurrentItem.id]
//     }

//     sessionStorage.setItem('filters', JSON.stringify(currentFilter))
//     navigate('/shop/listing')
//   }

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 3000); // Change slide every 3 seconds

//     return () => clearInterval(interval); // Cleanup on component unmount
//   }, []);

//   const handlePrevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   const handleNextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const handleGetProductDetails = (productId) => {
//     // Implement product details functionality
//     console.log("View product details:", productId);
//   };

//   const handleAddtoCart = (product) => {
//     // Implement add to cart functionality
//     console.log("Add to cart:", product);
//   };

//   useEffect(()=>{
//     dispatch(fetchAllFilteredProducts({filterParams :{},sortParams:'price-lowtohigh'}));
//   },[dispatch]);
  
//   console.log(productList,'productList');

//   return (
//     <div>
//       {/* Main Content with Flex Layout */}
//       <div className="flex min-h-screen">
//         {/* Text Section */}
//         <div className="flex flex-col justify-center items-start w-1/2 p-8 bg-gray-100">
//           <h1 className="text-4xl font-bold">Discover Chic & Luxury</h1>
//           <p className="mt-4 text-lg">Find the latest trends and timeless fashion pieces.</p>
//         </div>

//         {/* Image Section */}
//         <div className="relative w-1/2 h-screen overflow-hidden">
//           {slides.map((slide, index) => (
//             <img
//               src={slide}
//               key={index}
//               className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-1000 ${
//                 index === currentSlide ? 'opacity-100' : 'opacity-0'
//               }`}
//             />
//           ))}

//           {/* Navigation Buttons */}
//           <Button
//             variant="outline"
//             size="icon"
//             className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80"
//             onClick={handlePrevSlide}
//           >
//             <ChevronLeftIcon className="w-6 h-6" />
//           </Button>
//           <Button
//             variant="outline"
//             size="icon"
//             className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80"
//             onClick={handleNextSlide}
//           >
//             <ChevronRightIcon className="w-6 h-6" />
//           </Button>
//         </div>
//       </div>

//       {/* Shop by Category Section */}
//       <section className="py-12 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-8">
//             Shop by category
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
//             {categoriesWithIcon.map(categoryItem => (
//               <Card onclick={()=>handleNavigateToListingPage(categoryItem, 'category')} key={categoryItem.id} className="cursor-pointer hover:shadow-lg transition-shadow border-none">
//                 <CardContent className="flex flex-col items-center justify-center p-4">
//                   <categoryItem.icon className="w-8 h-8 mb-2 text-primary" />
//                   <span className="font-bold text-sm">{categoryItem.label}</span>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>



      


//       <section className="py-12 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-8">
//             Shop by brand
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
//             {brandsWithIcons.map(brandItem => (
//               <Card onclick={()=> handleNavigateToListingPage(brandItem,'brand')} key={brandItem.id} className="cursor-pointer hover:shadow-lg transition-shadow border-none">
//                 <CardContent className="flex flex-col items-center justify-center p-4">
//                   <brandItem.icon className="w-8 h-8 mb-2 text-primary" />
//                   <span className="font-bold text-sm">{brandItem.label}</span>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Featured Products Section */}
//       <section className='py-12'>
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-8">
//             Feature Products
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {productList && productList.length > 0
//               ? productList.map((productItem) => (
//                   <ShoppingProductTile
//                     key={productItem.id || productItem._id}
//                     handleGetProductDetails={handleGetProductDetails}
//                     product={productItem}
//                     handleAddtoCart={handleAddtoCart}
//                   />
//                 ))
//               : null}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default ShoppingHome;














import { useState, useEffect } from 'react';
import bannerOne from '../../assets/hotgown.jpg';
import bannerTwo from '../../assets/redhotsari.jpg';
import bannerThree from '../../assets/panjabi.jpg';
import { Button } from '@/components/ui/button';
import { ChevronLeftIcon, ChevronRightIcon, CloudLightning, ShirtIcon, WatchIcon, PartyPopperIcon, HeartIcon, CrownIcon, StarIcon, GemIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllFilteredProducts } from '@/store/shop/products-slice';
import ShoppingProductTile from '@/components/shopping-view/product-tile';
import { useNavigate } from 'react-router-dom';

const categoriesWithIcon = [
  { id: "casualwears", label: "Casual Wears", icon: ShirtIcon },
  { id: "partywears", label: "Party Wears", icon: PartyPopperIcon },
  { id: "weddingwears", label: "Wedding Wears", icon: HeartIcon },
];

const brandsWithIcons=
[
  { id: "sabyasachi", label: "Sabyasachi", icon: CrownIcon },
  { id: "biba", label: "Biba", icon: StarIcon },
  { id: "manishMalhotra", label: "Manish Malhotra",  icon: GemIcon },
]

function ShoppingHome() {
  const slides = [bannerOne, bannerTwo, bannerThree];
  const [currentSlide, setCurrentSlide] = useState(0);
  const {productList} =useSelector(state=> state.shopProducts);
  const dispatch =useDispatch();
  const navigate = useNavigate()



  function handleNavigateToListingPage(getCurrentItem, section){
    sessionStorage.removeItem('filters')
    const currentFilter ={
      [section]: [getCurrentItem.id]
    }

    sessionStorage.setItem('filters', JSON.stringify(currentFilter))
    navigate('/shop/listing')
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handleGetProductDetails = (productId) => {
    // Implement product details functionality
    console.log("View product details:", productId);
  };

  const handleAddtoCart = (product) => {
    // Implement add to cart functionality
    console.log("Add to cart:", product);
  };

  useEffect(()=>{
    dispatch(fetchAllFilteredProducts({filterParams :{},sortParams:'price-lowtohigh'}));
  },[dispatch]);
  
  console.log(productList,'productList');

  return (
    <div>
      {/* Main Content with Flex Layout */}
      <div className="flex min-h-screen">
        {/* Text Section */}
        <div className="flex flex-col justify-center items-start w-1/2 p-8 bg-gray-100">
          <h1 className="text-4xl font-bold">Discover Chic & Luxury</h1>
          <p className="mt-4 text-lg">Find the latest trends and timeless fashion pieces.</p>
        </div>

        {/* Image Section */}
        <div className="relative w-1/2 h-screen overflow-hidden">
          {slides.map((slide, index) => (
            <img
              src={slide}
              key={index}
              className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80"
            onClick={handlePrevSlide}
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80"
            onClick={handleNextSlide}
          >
            <ChevronRightIcon className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Shop by Category Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Shop by category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {categoriesWithIcon.map(categoryItem => (
              <Card onClick={() => handleNavigateToListingPage(categoryItem, 'category')} key={categoryItem.id} className="cursor-pointer hover:shadow-lg transition-shadow border-none">
                <CardContent className="flex flex-col items-center justify-center p-4">
                  <categoryItem.icon className="w-8 h-8 mb-2 text-primary" />
                  <span className="font-bold text-sm">{categoryItem.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>



      


      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Shop by brand
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {brandsWithIcons.map(brandItem => (
              <Card onClick={() => handleNavigateToListingPage(brandItem, 'brand')} key={brandItem.id} className="cursor-pointer hover:shadow-lg transition-shadow border-none">
                <CardContent className="flex flex-col items-center justify-center p-4">
                  <brandItem.icon className="w-8 h-8 mb-2 text-primary" />
                  <span className="font-bold text-sm">{brandItem.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className='py-12'>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Feature Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productList && productList.length > 0
              ? productList.map((productItem) => (
                  <ShoppingProductTile
                    key={productItem.id || productItem._id}
                    handleGetProductDetails={handleGetProductDetails}
                    product={productItem}
                    handleAddtoCart={handleAddtoCart}
                  />
                ))
              : null}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ShoppingHome;






