import { IProduct, IProductFinally } from "./interfaces";

class ProductList implements IProductFinally{

   private productList: IProduct[] = [];
   
   id: number = 1;


    createProduct(data:{name:string, price: number}){
        const newProduct:IProduct = {...data, createdAt: new Date(), updatedAt: new Date() , id:this.id}
        this.productList.push(newProduct);
        this.id += 1;
        return newProduct
    }


    getProducts(){
       return this.productList;
    }


}