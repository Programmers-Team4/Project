const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const index = require("./router/index");

const app = express();
const mongoURI = 'MongoDB 서버 주소';

app.use(express.json()); 
app.use(cors());
app.use("/", index);

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB 연결 성공");
    } catch (err) {
        console.error("MongoDB 연결 오류:", err);
        process.exit(1); // 연결 실패 시 서버 종료
    }
};

connectDB().then(() => {
    app.listen(5000, () => {
    console.log("Server Running at http://127.0.0.1:5000");
    });
});