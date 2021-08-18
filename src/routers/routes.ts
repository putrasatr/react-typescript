import { Gallery, Home } from "../pages";
import { CreatePost } from "../components";

export const routers = [
    { path: "/post/:productId", isExact: true, Component: CreatePost },
    { path: "/gallery", isExact: true, Component: Gallery },
    { path: "/", isExact: true, Component: Home },
];