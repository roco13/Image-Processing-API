import sharp from 'sharp';
import path from 'path';

const resizeImage = async (
  imageName: string,
  width: number,
  height: number
) => {
  let imgPath = 'images/' + imageName + '.jpg';
  let newImagPath =
    'images/thumb/' + imageName + '_' + width + '_' + width + '.jpg';

  await sharp(path.resolve(imgPath))
    .resize(width, height)
    .toFile(path.resolve(newImagPath));
};

export default resizeImage;
