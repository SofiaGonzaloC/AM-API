import Users from "../models/Users.js";

export const newUser = async (req, res) => {
    const {
        name,
        birthdate,
        email,
        phone,
        signature,
    } = req.body;


    try {
        const newUser = new Users({
            name,
            birthdate,
            email,
            phone,
            signature,
        })

        await newUser.save()
        console.log("User created successfully");

        return res.status(201).json(newUser);
    } catch (err) {
        console.error("Failed to create user", error);
        return res.status(400).json({ message: "Failed to create user" });
    }

}

export const getUsers = async (req, res) => {

    try {
        const data = await Users.find();
        res.send(data)
    } catch (err) {
        console.error("An error occurred", err);
        return res.status(400).json({ message: "Failed to fetch users" });
    }

}