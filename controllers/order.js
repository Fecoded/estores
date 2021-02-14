const Order = require("../models/Order");

// @desc      GET ORDER
// @route     GET api/v1/order
// @access    Private
exports.getOrder = async (req, res, next) => {
    try {
        const order = await Order.find({ user: req.user.id }).sort({ createdAt: -1});

        return res
        .status(200)
        .json({ success: true, count: order.length, data: order });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Server Error",
          });
    }
}


// @desc        GET ALL ORDER
// @route       GET api/v1/order/all
// @access      Private
exports.getAllOrder = async (req, res, next) => {
    try {
        const order = await Order.find().sort({ createdAt: -1});

        return res
        .status(200)
        .json({ success: true, count: order.length, data: order });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Server Error",
          });
    }
}

 // @desc      CREATE ORDER
 // @route     POST api/v1/order
 // @access    private
 exports.postOrder = async (req, res, next) => {
     try {
        let order = await Order.findOne({ user: req.user.id });

        let arr = req.body;

        function addUserId(v) {
          return { ...v, user: req.user.id };
        }
        let newArr = arr.map(addUserId);

        for(let i in newArr){
          let obj = newArr[i];
          delete obj['_id'];
       }

        order = await Order.create(newArr);
    
        res.status(201).json({ success: true, data: order });
     } catch (err) {
       console.log(err)
        return res.status(500).json({
            success: false,
            error: "Server Error",
          });
     }
 }

// @desc    UPDATE ORDER STATUS
// @route   PUT /api/v1/order/:id
// @access  Private
exports.updateStatus = async (req, res, next) => {
    try {
      let order = await Order.findById(req.params.id);
  
      let status = "Approved";
  
      const newExp = {
        status,
      };
  
      order = await Order.findByIdAndUpdate(
        req.params.id,
        { $set: newExp },
        { new: true }
      );
  
      return res.status(200).json({ success: true, data: order });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  };

// @desc    DELETE ORDER
// @route   DELETE /api/v1/order/:id
// @access  Private
exports.deleteOrder = async (req, res, next) => {
    try {
        let order = await Order.findById(req.params.id);

        if (!order) {
          return res.status(400).json({ msg: "Order does not exist" });
        }
    
        await Order.findByIdAndRemove(req.params.id);

    
        return res
          .status(200)
          .json({ success: true, message: 'Order deleted successfully'});
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  };