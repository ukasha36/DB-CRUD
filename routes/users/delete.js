import User from "../../models/user/index.js";

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    // Optional validation (can be commented out if not needed)
    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //   return res.status(400).send({ status: 400, message: "Invalid user ID" });
    // }

    console.log("Received ID:", id); // Added for debugging

    const deletedUser = await User.findByIdAndDelete(id);

    // if (!deletedUser) {
    //   return res.status(404).send({ status: 404, message: "User not found" });
    // }

    res
      .status(200)
      .send({ status: 200, message: "User Deleted Successfully", deletedUser });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).send({ status: 500, message: "Internal Server Error" });
  }
};

export default deleteUser;
