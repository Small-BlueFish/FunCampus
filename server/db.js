const mongoose = require("mongoose");

// 连接mongodb数据库
mongoose.connect("mongodb://localhost:27017/fun_campus")
  // 数据库 fun_campus
  .then(() => {
    console.log("数据库连接成功！");
  })
  .catch((err) => {
    console.log("数据库连接失败！", err);
  })
const OrderReceiveSchema = new mongoose.Schema({
  openid: {
    type: String
  },
  name: {
    type: String
  },
  userID: {
    type: String
  },
  userIDImg: {
    type: String
  },
  userInfo: {
    type: Object
  },
  status: {
    type: String
  },
  time: {
    type: String
  },
  OrderNumber: {
    type: Number,
    default: 0
  }
})

const OrderReceive = mongoose.model("OrderReceive1", OrderReceiveSchema);

OrderReceiveSchema.create({
  openid: '1111',
  name: 'CreatorRay',
  userID: '18851104',
  userIDImg: '00000',
  userInfo: {
    a: 1
  },
  state: '待审核',
  time: '2023/11/23 23:33:56',
})

// 抛出内容
module.exports = {
  OrderReceive,
}