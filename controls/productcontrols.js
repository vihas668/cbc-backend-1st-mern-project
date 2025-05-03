import e from "express";
import Product from "../models/product.js";


 export async function getProduct(req, res) {
    

    try {
        if(isAdmin(req) ) {
            const products = await Product.find();
            res.json(products);
        }else{
            const products = await Product.find({isAvailable:true});
            res.json(products);
        }
           
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}


export function saveProduct(req, res) {
    if (!isAdmin(req)) {
        res.status(403).json({
            message: 'you are not authorized to create a product',
        });
        return;
    }
    console.log(req.body); 
    const product = new Product(
        req.body
    );
 
     product.save().then(() => {
         res.json({
             message:'Product saved successfully',
         });
     }).catch(() => {
         res.json({
             message: 'Failed to save product',
         });
     });
};

export function isAdmin(req ) {
    if (req.user == null) {
    
        return false
    }
    if (req.user.role != "Admin") {

        return false;
    }

    return true;
}

export async function deleteProduct(req, res) {
    if (!isAdmin(req)) {
        res.status(403).json({
            message: 'you are not authorized to delete a product',
        });
        return;
    }

    try {
        await Product.deleteOne({productid : req.params.productid});
        res.json({
            message: 'Product deleted successfully'
        });
    
    }catch (error) {
       
        res.status(500).json({
             message: "failed to delete product",
             error: error.message
             });
    }
    
}

export async function getProductById(req,res){
    const productid = req.params.productid
    
    try{

        const product = await Product.findOne(
            {productid : productid}
        )

        if(product == null){
            res.status(404).json({
                message : "Product not found"
            })
            return
        }
        if(product.isAvailable){
            res.json(product)
        }else{
            if(!isAdmin(req)){
                res.status(404).json({
                    message : "Product not found"
                })
                return
            }else{
                res.json(product)
            }
        }

    }catch(err){
        res.status(500).json({
            message : "Internal server error",
            error : err
        })
    }


}

export async function updateProduct(req,res){
    if(!isAdmin(req)){
        res.status(403).json({
            message: "You are not authorized to update a product"
        })
        return
    }

    const productid = req.params.productid
    const updatingData = req.body

    try{
        await Product.updateOne(
            {productid : productid},
            updatingData
        )

        res.json(
            {
                message : "Product updated successfully"
            }
        )

    }catch(err){
        res.status(500).json({
            message : "Internal server error",
            error : err
        })
    }
}
