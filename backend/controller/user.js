//   authenticate of person

import { User } from "../models/userModel";

const Register = async (req, res) => {
    const { fullName, email, password } = req.body;


    //  check any field are empty or not
    if (!fullName || !email || !password) {
        return res.status(401).json({
            message: "Invalid data",
            success: false
        })
    }


    // check user email already register
    const user = await User.findOne({ email })
    if (user) {
        return res.status(401).json({
            message: "This email already Used",
            success: false
        })
    }

    await User.create({
        fullName,
        email,
        password
    })
    return res.status(201).json({
        message: "Account Created successfully",
        success: true
    })

    try {

    } catch (error) {
        console.log(error)
    }
}