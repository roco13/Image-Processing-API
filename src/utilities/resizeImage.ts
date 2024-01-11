import sharp from 'sharp';
import path from 'path';

const resizeImage = async (
  imageName: string,
  width: number,
  height: number
): Promise<String> => {
  const newFilenameInput: string = imageName + '.jpg';
  let imgPath: string = path.resolve(
    __dirname,
    '..',
    '..',
    'images',
    newFilenameInput
  );
  const newFilename: string = imageName + '_' + width + '_' + height + '.jpg';
  let newImagPath: string = path.resolve(
    __dirname,
    '..',
    '..',
    'images/thumb',
    newFilename
  );

  await sharp(imgPath).resize(width, height).toFile(newImagPath);

  return newImagPath;
};

export default resizeImage;
