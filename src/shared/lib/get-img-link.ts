const FB_STORAGE_URL = import.meta.env.VITE_APP_FB_STORAGE_URL;

export const getImgLink = (pathName: string, downloadTokens: string) => {
  const imageUrl = `${FB_STORAGE_URL}/${encodeURIComponent(pathName)}?alt=media&token=${downloadTokens}`;
  return imageUrl;
};
