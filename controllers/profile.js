const User = require("../models/User");


// @desc      UPDATE PROFILE
// @route     PUT api/v1/auth/profile
// @access    Private
exports.updateProfile = async (req, res, next) => {
    const {
        firstName,
        lastName,
        displayName,
        email,
        phone,
        shipping_address
    } = req.body;
    
    const newExp = {
        firstName,
        lastName,
        displayName,
        email,
        phone,
        shipping_address
    }

    console.log(newExp)
    
    try {
        let profile = await User.findOne({ email });

        // UPDATE
        profile = await User.findByIdAndUpdate(
            profile._id,
            { $set: newExp },
            { new: true }
        );
    
        return res.status(200).json({ success: true, message: 'Profile was updated successfully' });
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            success: false,
            error: "Server Error",
          });
    }
}
