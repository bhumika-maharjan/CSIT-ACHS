

import ProductDetailsDialog from "@/components/shopping-view/product-details";
import ShoppingProductTile from "@/components/shopping-view/product-tile";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import { fetchProductDetails } from "@/store/shop/products-slice";
import {
  getSearchResults,
  resetSearchResults,
} from "@/store/shop/search-slice";
import { Loader2, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

function SearchProducts() {
  const [keyword, setKeyword] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { searchResults, isLoading } = useSelector((state) => state.shopSearch);
  const { productDetails } = useSelector((state) => state.shopProducts);
  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.shopCart);
  const { toast } = useToast();
  
  // Initialize keyword from URL on component mount
  useEffect(() => {
    const keywordFromUrl = searchParams.get("keyword");
    if (keywordFromUrl) {
      setKeyword(keywordFromUrl);
      dispatch(getSearchResults(keywordFromUrl));
    }
  }, []);

  // Handle search submission
  const handleSearch = (e) => {
    e?.preventDefault(); // Handle both form submit and manual calls
    
    if (keyword && keyword.trim() !== "") {
      setIsSearching(true);
      setSearchParams(new URLSearchParams(`?keyword=${keyword}`));
      dispatch(getSearchResults(keyword))
        .finally(() => {
          setIsSearching(false);
        });
    } else {
      setSearchParams(new URLSearchParams(``));
      dispatch(resetSearchResults());
    }
  };

  function handleAddtoCart(getCurrentProductId, getTotalStock) {
    let getCartItems = cartItems.items || [];

    if (getCartItems.length) {
      const indexOfCurrentItem = getCartItems.findIndex(
        (item) => item.productId === getCurrentProductId
      );
      if (indexOfCurrentItem > -1) {
        const getQuantity = getCartItems[indexOfCurrentItem].quantity;
        if (getQuantity + 1 > getTotalStock) {
          toast({
            title: `Only ${getTotalStock} quantity available for this item`,
            variant: "destructive",
          });
          return;
        }
      }
    }

    dispatch(
      addToCart({
        userId: user?.id,
        productId: getCurrentProductId,
        quantity: 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchCartItems(user?.id));
        toast({
          title: "Product was added to your cart",
        });
      }
    });
  }

  function handleGetProductDetails(getCurrentProductId) {
    dispatch(fetchProductDetails(getCurrentProductId));
  }

  useEffect(() => {
    if (productDetails !== null) setOpenDetailsDialog(true);
  }, [productDetails]);

  return (
    <div className="container mx-auto md:px-6 px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Search Products</h1>
      
      <div className="flex justify-center mb-8">
        <form onSubmit={handleSearch} className="w-full flex gap-2">
          <Input
            value={keyword}
            name="keyword"
            onChange={(event) => setKeyword(event.target.value)}
            className="py-6"
            placeholder="Search Products..."
          />
          <Button 
            type="submit" 
            disabled={isSearching || isLoading}
            className="min-w-[100px]"
          >
            {isSearching || isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <>
                <Search className="h-4 w-4 mr-2" />
                Search
              </>
            )}
          </Button>
        </form>
      </div>
      
      {isLoading || isSearching ? (
        <div className="flex flex-col items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin mb-4" />
          <p>Searching for products...</p>
        </div>
      ) : searchResults.length === 0 ? (
        <div className="text-center py-8">
          {keyword && keyword.trim() !== "" ? (
            <>
              <h2 className="text-xl font-semibold mb-2">No products found for "{keyword}"</h2>
              <p className="text-muted-foreground">
                Try using different keywords or browse our categories.
              </p>
            </>
          ) : (
            <>
              <h2 className="text-xl font-semibold mb-2">Enter a search term above</h2>
              <p className="text-muted-foreground">
                Search for products by name, description, brand, or category.
              </p>
            </>
          )}
        </div>
      ) : (
        <>
          <p className="mb-4">Found {searchResults.length} product(s) for "{keyword}"</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {searchResults.map((item) => (
              <ShoppingProductTile
                key={item._id} // Add missing key prop
                handleAddtoCart={handleAddtoCart}
                product={item}
                handleGetProductDetails={handleGetProductDetails}
              />
            ))}
          </div>
        </>
      )}
      
      <ProductDetailsDialog
        open={openDetailsDialog}
        setOpen={setOpenDetailsDialog}
        productDetails={productDetails}
      />
    </div>
  );
}

export default SearchProducts;








