import { create } from "zustand";
import { ProductStore } from "../interface";


export const useProductStore = create<ProductStore>((set) => ({
    products:[],
    selectedProduct:null,
    fetchProducts:async()=> {
        const res = await fetch(import.meta.env.VITE_API_URL)
        const data:Product[] = await res.json();
        set({
            products:data
        });
    },
    setSelectedProduct:(product) => set({
        selectedProduct:product
    }),
}))