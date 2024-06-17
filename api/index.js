import express from 'express';
import cors from 'cors';
import cookieParser from "cookie-parser";
import postRouter from './routes/posts.js';
import authRouter from './routes/auth.js';
import userRouter from './routes/users.js';

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors())


app.use("/api/posts", postRouter)
app.use("/api/user", userRouter)
app.use("/api/auth", authRouter)

app.listen(8800, () => {
	console.log('serwer serweruje');
});
