import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

// describe('Test endpoint responses', () => {
//   it('gets the api endpoint', async (done) => {
//     const response = await request.get('/api');
//     expect(response.status).toBe(200);
//     done();
//   });
// });

describe('Test endpoint responses', () => {
  it('gets the api endpoint', async () => {
    const response = await request.get('/api/images');
    expect(response.status).toBe(200);
  });

  it('gets the proper response when image name and dimensions are provided', async () => {
    const response = await request.get(
      '/api/images?name=fjord&width=300&height=300'
    );
    expect(response.status).toBe(200);
  });

  it('gets the proper response even if image dimensions is missing', async () => {
    const response = await request.get(
      '/api/images?name=fjord&width=300&height='
    );
    expect(response.status).toBe(200);
  });
});
