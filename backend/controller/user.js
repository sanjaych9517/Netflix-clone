
import { User } from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

// LOGIN
export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Invalid data",
                success: false
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                message: "Invalid Email or Password",
                success: false
            });
        }

        const isMatch = await bcryptjs.compare(
            password,
            user.password
        );

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid Email or Password",
                success: false
            });
        }

        const tokenData = {
            id: user._id
        };

        const token = jwt.sign(
            tokenData,
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        return res.status(200)
            .cookie("token", token, {
                httpOnly: true,
                sameSite: "lax",
                maxAge: 24 * 60 * 60 * 1000
            })
            .json({
                message: `Welcome back ${user.fullName}`,
                success: true,
                user: {
                    _id: user._id,
                    fullName: user.fullName,
                    email: user.email
                }
            });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};


// // REGISTER
export const Register = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;

        if (!fullName || !email || !password) {
            return res.status(400).json({
                message: "Invalid data",
                success: false
            });
        }

        const user = await User.findOne({ email });

        if (user) {
            return res.status(409).json({
                message: "This email is already used",
                success: false
            });
        }

        const hashedPassword = await bcryptjs.hash(password, 14);

        await User.create({
            fullName,
            email,
            password: hashedPassword
        });

        return res.status(201).json({
            message: "Account created successfully",
            success: true
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};


// Logout

export const Logout = async (req, res) => {
    return res.status(200)
        .cookie("token", "", {
            httpOnly: true,
            expires: new Date(0),
            sameSite: "lax"
        })
        .json({
            message: "Logged out successfully",
            success: true
        });
}; 
