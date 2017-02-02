export interface Thumbnail { path: string, extension: string };
export enum Format {
    Portrait,
    Standard,
    Landscape
};

const mapFormat = (format: Format): string => {
  if (format === Format.Portrait) {
    return 'portrait';
  }

  if (format === Format.Standard) {
    return 'standard';
  }

  return 'landscape';
};

export const buildUrl = ({path, extension}: Thumbnail, format: Format) => {
  return `${path}/${mapFormat(format)}_large.${extension}`;
};
