const isNetworkOkay = true;

const promiseOne = new Promise(
    (resolve , reject)=>{
        
        setTimeout(
            ()=>{
                
                if(isNetworkOkay){
                    //success
                    console.log("Data saved in database")
                    resolve({
                        name : "John Doe",
                        age : 25,
                        city : "New York"
                    })
                }else{
                    //unsuccessful
                    console.log("Data not saved in database")
                    reject("Network issue")
                }

            }
            ,5000
        )

    }
)

promiseOne.then(
    (result)=>{
        console.log(result)
        console.log("Upload complete")
    }
).catch(
    (err)=>{
        console.log(err)
        console.log("Upload failed")
    }
)