import { IProduct, IProductFinally } from "./interfaces";

class ProductList implements IProductFinally{

   private productList: IProduct[] = [];
   
   id: number = 1;


    createProduct(data:{name:string, price: number}){
        const newProduct:IProduct = {...data, createdAt: new Date(), updatedAt: new Date() , id:this.id}
        this.productList.push(newProduct);
        this.id += 1;
        return newProduct;
    }


    getProducts(){
       return this.productList;
    }

    
    updateProduct(id: number, data: { name: string | undefined; price: number | undefined; }): IProduct{
        this.productList.splice(id, 1);


    }

   deleteProduct(id: number): { message: string} {
        const index = this.productList.findIndex(product => product.id === id);
        this.productList.splice(index, 1);
        return { message: "Product successfully deleted."}
   }


}