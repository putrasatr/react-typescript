import { Gallery, Home } from "../pages";
import { CreatePost } from "../components";

export const routers = [
    { path: "/post/:productId", isExact: true, component: CreatePost },
    { path: "/gallery", isExact: true, component: Gallery },
    { path: "/", isExact: true, component: Home },
];