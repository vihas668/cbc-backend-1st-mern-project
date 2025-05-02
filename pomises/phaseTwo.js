function getAllProducts(dbPassword , connectionSpeed){

    const promise = new Promise(
        (resolve,reject)=>{
            setTimeout(
                ()=>{

                    if(connectionSpeed >= 20){

                        if(dbPassword == "Malith"){
                            resolve([
                                {
                                    id : 1,
                                    name : "Product 1",
                                    price : 1000
                                },
                                {
                                    id : 2,
                                    name : "Product 2",
                                    price : 2000
                                },
                                {
                                    id : 3,
                                    name : "Product 3",
                                    price : 3000
                                }
                            ])
                        }else{
                            reject({
                                error : "Invalid password",
                                password : dbPassword
                            })
                        }

                    }else{
                        reject({
                            error : "Connection speed is very low",
                            speed : connectionSpeed
                        })
                    }

                }
                ,5000
            )
        }
    )
    return promise;

}


//Product.find().then().catch()
getAllProducts("Malith4444" , 22).then(
    (result)=>{
        console.log(result)
        console.log("Products fetched successfully")
    }
).catch(
    (err)=>{
        console.log(err)
        console.log("Failed to fetch products")
    }
)
