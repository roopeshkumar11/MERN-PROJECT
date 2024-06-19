import Contact from "../modals/Contact.js";

export const getdata=async (req,res)=>{
    try{
        let {fullname,email,message}=req.body
    
        const createdUser = await new Contact({
            fullname: fullname,
            email: email,
           message:message // Save the hashed password
        });

        await createdUser.save()
        

    }
    catch(error){
        console.log("data not store",error)
    }
}