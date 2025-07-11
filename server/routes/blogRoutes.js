import express from "express"
import upload from "../middlewares/multer";
import { addBlog } from "../controllers/blogController";

const blogRouter = express.Router();

blogRouter.post("/add", upload.single('image'), addBlog)