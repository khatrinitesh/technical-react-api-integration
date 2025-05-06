export interface NavItem {
    label: string;
    hreflink: string;
  }

export interface Product{
    postId:number;
    id:number;
    name:string;
    email:string;
    body:string;
}

export interface ProductStore {
    products:Product[];
    selectedProduct:Product | null;
    fetchProducts:() => Products<void>;
    setSelectedProduct:(product:Product | null) => void;
}