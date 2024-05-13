import User from '../../models/user/index.js';

const getUser = async (req, res) => {
  try {
    // const users = await User.find({
 
    //         email: "ahmed36@gmail.com" 
    // });
    const users = await User.find();
    res.status(200).send({ status: 200, users });

  } catch (error) {
    console.error(error); // Logging the error for debugging
    res.status(500).send({ status: 500, error: "Internal server error" });
  }
};

export default getUser;