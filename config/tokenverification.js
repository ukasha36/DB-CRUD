import jwt from 'jsonwebtoken'


const tokenVerification = (req, res, next) => {
try {
    

    if (req.headers.authorization) {

     
        const token = req.headers.authorization.split(" ")[1];

        console.log("Token --->" , token );
       const decoded =  jwt.verify(token , process.env.JWT_SECRET );
          console.log("Decoded" , decoded)
         if (decoded) {
            next();

        } else {
            res.status(403).send({ status: 403 , message : " Token unauthorized"})

        }

    }
    else {
        res.status(403).send({ status: 403 , message : " Token not provided"})
    }
} 

    catch (error) {
        res.status(403).send({ status: 403 , message : " Token unauthorized"})

    }

};

export default tokenVerification;
