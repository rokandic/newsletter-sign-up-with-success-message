const basePath =
  process.env.NODE_ENV === "production" ? process.env.BASEPATH : "";

const assetPrefixPath =
  process.env.NODE_ENV === "production" ? `${process.env.BASEPATH}/` : "";

export { assetPrefixPath, basePath };
