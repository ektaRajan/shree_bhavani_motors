const User = require("./../db/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function registerUser(model) {

    const hasePassword = await bcrypt.hash(model.password, 10);
    let user = new User({
        name: model.name,
        email: model.email,
        password: hasePassword
    });
    await user.save();
    return user.toObject();
}

async function loginUser(model) {
    const user = await User.findOne({ email: model.email });
    if (!user) {
        return null;
    }
    console.log(user, model.password, user.password);
    const isMatch = await bcrypt.compare(model.password, user.password);
    if (isMatch) {
        //create token login
        const token = jwt.sign({
            id: user._id,
            name: user.name,
            email: user.email,
            isAdmin : user.isAdmin
        },
            "seceret",
            {
                expiresIn: "1h",
            }
        );
        return {token, user};
    }
    else {
        return null;
    }
}

module.exports = { registerUser, loginUser }