import { NearestFilter, RepeatWrapping, TextureLoader } from "three";

// import { glassImage } from "./images.js";

import { groundTextureUrl } from "./glass.png";

const groundTexture = new TextureLoader().load(groundTextureUrl);
groundTexture.wrapS = RepeatWrapping;
groundTexture.wrapT = RepeatWrapping;
groundTexture.magFilter = NearestFilter;

export { groundTexture };
