import resizeImage from '../utilities/resizeImage';
import path from 'path';

describe('test if Sharp resize function works', () => {
  it('returns a valid response with the rigth image', async () => {
    const response = await resizeImage('palmtunnel', 300, 300);
    expect(response).toEqual(
      path.resolve(
        __dirname,
        '..',
        '..',
        'images/thumb',
        'palmtunnel_300_300.jpg'
      )
    );
  });

  //   it('returns an error when heigh is 0', async () => {
  //     const response = await resizeImage('palmtunnel', 300, 0);
  //     expect(response).toEqual(
  //       'Error: Expected positive integer for height but received 0 of type number'
  //     );
  //   });
});
