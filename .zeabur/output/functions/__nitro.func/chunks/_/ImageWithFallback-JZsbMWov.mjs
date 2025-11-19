import { jsx } from "react/jsx-runtime";
import { isBlurhashValid, decode } from "blurhash";
import { Image } from "@unpic/react";
import { useState } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
const DEFLATE_METHOD = String.fromCharCode(120, 1);
const CRC_TABLE = [];
const SIGNATURE = String.fromCharCode(137, 80, 78, 71, 13, 10, 26, 10);
const NO_FILTER = String.fromCharCode(0);
const makeCrcTable = () => {
  let c;
  for (let n = 0; n < 256; n++) {
    c = n;
    for (let k = 0; k < 8; k++) {
      if (c & 1) {
        c = 3988292384 ^ c >>> 1;
      } else {
        c = c >>> 1;
      }
    }
    CRC_TABLE[n] = c;
  }
};
makeCrcTable();
const inflateStore = (data) => {
  const MAX_STORE_LENGTH = 65535;
  let storeBuffer = "";
  let remaining;
  let blockType;
  for (let i = 0; i < data.length; i += MAX_STORE_LENGTH) {
    remaining = data.length - i;
    blockType = "";
    if (remaining <= MAX_STORE_LENGTH) {
      blockType = String.fromCharCode(1);
    } else {
      remaining = MAX_STORE_LENGTH;
      blockType = String.fromCharCode(0);
    }
    storeBuffer += blockType + String.fromCharCode(remaining & 255, (remaining & 65280) >>> 8);
    storeBuffer += String.fromCharCode(
      ~remaining & 255,
      (~remaining & 65280) >>> 8
    );
    storeBuffer += data.substring(i, i + remaining);
  }
  return storeBuffer;
};
const adler32 = (data) => {
  const MOD_ADLER = 65521;
  let a = 1;
  let b = 0;
  for (let i = 0; i < data.length; i++) {
    a = (a + data.charCodeAt(i)) % MOD_ADLER;
    b = (b + a) % MOD_ADLER;
  }
  return b << 16 | a;
};
const updateCrc = (crc2, buf) => {
  let c = crc2;
  let b;
  for (let n = 0; n < buf.length; n++) {
    b = buf.charCodeAt(n);
    c = CRC_TABLE[(c ^ b) & 255] ^ c >>> 8;
  }
  return c;
};
const crc = (buf) => updateCrc(4294967295, buf) ^ 4294967295;
const dwordAsString = (dword) => String.fromCharCode(
  (dword & 4278190080) >>> 24,
  (dword & 16711680) >>> 16,
  (dword & 65280) >>> 8,
  dword & 255
);
const createChunk = (length, type, data) => {
  const CRC = crc(type + data);
  return dwordAsString(length) + type + data + dwordAsString(CRC);
};
const IEND = createChunk(0, "IEND", "");
const createIHDR = (width, height) => {
  const IHDRdata = dwordAsString(width) + dwordAsString(height) + // bit depth
  String.fromCharCode(8) + // color type: 6=truecolor with alpha
  String.fromCharCode(6) + // compression method: 0=deflate, only allowed value
  String.fromCharCode(0) + // filtering: 0=adaptive, only allowed value
  String.fromCharCode(0) + // interlacing: 0=none
  String.fromCharCode(0);
  return createChunk(13, "IHDR", IHDRdata);
};
const png = (width, height, rgba) => {
  const IHDR = createIHDR(width, height);
  let scanlines = "";
  for (let y = 0; y < rgba.length; y += width * 4) {
    scanlines += NO_FILTER;
    for (let x = 0; x < width * 4; x++) {
      scanlines += String.fromCharCode(rgba[y + x] & 255);
    }
  }
  const compressedScanlines = DEFLATE_METHOD + inflateStore(scanlines) + dwordAsString(adler32(scanlines));
  const IDAT = createChunk(
    compressedScanlines.length,
    "IDAT",
    compressedScanlines
  );
  return SIGNATURE + IHDR + IDAT + IEND;
};
const getPngArray = (pngString) => {
  const pngArray = new Uint8Array(pngString.length);
  for (let i = 0; i < pngString.length; i++) {
    pngArray[i] = pngString.charCodeAt(i);
  }
  return pngArray;
};
const blurHashToDataURL = (hash, width = 32, height = 32) => {
  if (!isBlurhashValid(hash).result) return void 0;
  const rgba = decode(hash, width, height);
  const pngString = png(width, height, rgba);
  const base64 = typeof window === "undefined" ? Buffer.from(getPngArray(pngString)).toString("base64") : btoa(pngString);
  return `data:image/png;base64,${base64}`;
};
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const isObject = (value) => typeof value === "object" && value !== null && !Array.isArray(value);
const ImageWithFallback = ({
  alt,
  className,
  enableTransition = true,
  isThumbnail = false,
  ...props
}) => {
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { image } = props;
  const url = `${"https://4real.ltd/api"?.replace("/api", "")}${image?.url}`;
  const blurhash = image?.blurhash;
  const blurImage = blurhash ? blurHashToDataURL(blurhash) : null;
  const isSmallImage = image?.filesize && image.filesize < 500 * 1024;
  const shouldApplyTransition = enableTransition && !isSmallImage;
  const handleError = () => {
    setError(true);
  };
  const handleLoad = () => {
    setIsLoaded(true);
  };
  return /* @__PURE__ */ jsx(
    Image,
    {
      src: error && !url ? "/imager-error.webp" : url,
      alt,
      background: blurImage,
      onError: handleError,
      onLoad: handleLoad,
      layout: "fullWidth",
      className: cn(
        shouldApplyTransition ? "transition-all duration-700 ease-in-out" : "",
        shouldApplyTransition && !isLoaded ? "blur-sm brightness-90 opacity-80" : shouldApplyTransition ? "blur-0 brightness-100 opacity-100" : "",
        className
      ),
      ...props
    }
  );
};
export {
  ImageWithFallback as I,
  cn as c,
  isObject as i
};
