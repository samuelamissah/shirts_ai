import { proxy } from "valtio";


const state = proxy({
intro: true,
color: "#0000FF",
isLogoTexture: true,
isFullTetxture: false,
logoDecal:"./threejs.png",
fullDecal:"./threejs.png",


});

export default state;