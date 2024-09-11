import { IProduct, IProductFinally } from "./interfaces";

class ProductList implements IProductFinally{

   private productList: IProduct[] = [];
   
   id: number = 1;

    createProduct(data:{ name:string, price: number }){
        const newProduct:IProduct = {...data, createdAt: new Date(), updatedAt: new Date() , id:this.id}
        this.productList.push(newProduct);
        this.id += 1;
        return newProduct;
    }

    getProducts(){
       return this.productList;
    }

    getOneProduct(id: number): IProduct | undefined {
        const oneProductId = this.productList.find(product => product.id === id);
        return oneProductId;
    }

    updateProduct(id: number, data: { name?: string ; price?: number }): IProduct {
        const index = this.productList.findIndex(product => product.id === id);
        const newProduct : IProduct = {...this.productList[index], updatedAt: new Date() , ...data}
        this.productList.splice( index, 1, newProduct )
        return newProduct;
    }

   deleteProduct(id: number): { message: string } {
        const index = this.productList.findIndex(product => product.id === id);
        this.productList.splice(index, 1);
        return { message: "Product successfully deleted."}
   }
      
}

export const productList = new ProductList();