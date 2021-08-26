import { Gallery, Home } from "../pages";
import { CreatePost, DetailItem } from "../components";

export const routers = [
    { path: "/detail/:bikeId", isExact: true, Component: DetailItem},
    { path: "/post/:productId", isExact: true, Component: CreatePost },
    { path: "/gallery", isExact: true, Component: Gallery },
    { path: "/", isExact: true, Component: Home },
];