import { Router } from "express";
import verifyJWT from "../middleware/verifyAuth.js";
import { upload } from "../middleware/multerUpload.js";
import {
    getBlogs,
    getBlogBySlug,
    getAllBlogsForAdmin,
    createBlog,
    deleteBlog,
    getAdminBlogBySlug,
    publishDraftBlog
} from "../api/blog.js";

const router = Router();

// Public routes
router.get("/", getBlogs);
router.get("/:slug", getBlogBySlug);

// Admin routes
router.get("/admin/all", verifyJWT, getAllBlogsForAdmin);
router.get("/admin/:slug", verifyJWT, getAdminBlogBySlug)
router.post("/", verifyJWT, upload, createBlog);
router.delete("/:id", verifyJWT, deleteBlog);
router.patch("/:slug/publish", verifyJWT, publishDraftBlog)


export default router;