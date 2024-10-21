"use client";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { fetchProducts } from "@/utils/data";


const AdminPage = () => {
  const { user, isSignedIn, isLoaded } = useUser();
  const router = useRouter();

  //   const [banners, setBanners] = useState({
  //     heroImage: "/commingsoon.png",
  //     supportArtistImage: "/commingsoon.png",
  //   });

  const [productData, setProductData] = useState({
    name: "",
    price: 0,
    image1: "",
    image2: "",
    reviews: 0,
  });


  useEffect(() => {
    if (isLoaded) {
      if (!isSignedIn) {
        router.push("/sign-in");
      } else if (user?.publicMetadata?.role !== "admin") {
        router.push("/U-don't-have-admin-privilages");
      }
    }
  }, [isLoaded, isSignedIn, user, router]);

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  if (!isSignedIn || user?.publicMetadata?.role !== "admin") {
    return <p>Forbidden</p>;
  }

  // Handle banner image and text updates
  //   const handleBannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const { name, value } = e.target;
  //     setBanners((prev) => ({ ...prev, [name]: value }));
  //   };

  // Handle product form input
  const handleProductInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (files) {
      setProductData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setProductData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Add new product to the list
  const addProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      console.log("lskdjf");
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      if (!response.ok) {
        console.log(response);
        throw new Error("Failed to add product");
      }

      const result = await response.json();
      console.log("Product added:", result);
      // Reset form and update the product list
      setProductData({
        name: "",
        price: 0,
        image1: "",
        image2: "",
        reviews: 0,
      });

    } catch (error) {
      console.error("Error adding product:", error);
    }
  };


  // fetchAndSetProducts()

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">Admin Dashboard</h1>

      {/* Banner Update Section */}
      {/* <section className="mb-10">
        <h2 className="text-2xl mb-3">Update Banners</h2>
        <div>
          <label>Hero Banner Image URL:</label>
          <input
            type="text"
            name="heroImage"
            value={banners.heroImage}
            onChange={handleBannerChange}
            className="block border p-2 mb-3 w-full"
          />
          <label>Support Artist Banner URL:</label>
          <input
            type="text"
            name="supportArtistImage"
            value={banners.supportArtistImage}
            onChange={handleBannerChange}
            className="block border p-2 mb-3 w-full"
          />
        </div>
      </section> */}

      {/* Product Addition Section */}
      <section className="mb-10">
        <h2 className="text-2xl mb-3">Add New Product</h2>
        <form onSubmit={addProduct}>
          <div className="mb-4">
            <label>Product Name:</label>
            <input
              type="text"
              name="name"
              value={productData.name}
              onChange={handleProductInput}
              className="block border p-2 mb-3 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label>Price:</label>
            <input
              type="number"
              name="price"
              value={productData.price}
              onChange={handleProductInput}
              className="block border p-2 mb-3 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label>Product Image 1 (Ratio: 4:3):</label>
            <input
              type="url"
              name="image1"
              value={productData.image1}
              onChange={handleProductInput}
              className="block border p-2 mb-3 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label>Product Image 2 (Ratio: 4:3):</label>
            <input
              type="url"
              name="image2"
              value={productData.image2}
              onChange={handleProductInput}
              className="block border p-2 mb-3 w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Product
          </button>
        </form>
      </section>

      {/* Products List */}
      {/* <section className="mb-10">
        <h2 className="text-2xl mb-3">Current Products</h2>
        <div className="grid grid-cols-2 gap-4">
          {products.map((product) => (
            <div key={product._id} className="border p-4">
              <a
                href="#"
                className="group block px-1.5 h-96 lg:h-[35rem] w-full"
              >
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={product.image1}
                    alt={`${product.name} image 1`}
                    layout="fill"
                    objectFit="contain"
                    className="absolute hmax-w-full max-h-full inset-0 opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                  />
                  <Image
                    src={product.image2}
                    alt={`${product.name} image 2`}
                    layout="fill"
                    objectFit="contain"
                    className="absolute max-w-full max-h-full inset-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
};

export default AdminPage;
