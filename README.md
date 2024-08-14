# Image-Processing-API

Project 1 for Backend Development with Node.js course.
Build an API that can be used in two different ways. As a simple placeholder API, the first allows you to place images into your frontend with the size set via URL parameters (and additional stylization if you choose) for rapid prototyping. The second use case is as a library to serve properly scaled versions of your images to the front end to reduce page load size. Rather than needing to resize and upload multiple copies of the same image to be used throughout your site, the API you create will handle resizing and serving stored images for you.

# Start Server

    npm run start

# Endpoints

    api/
    api/images

# Test

    npm run test

# Dependencies

    npm i express
    npm i jasmine
    npm i jasmine-spec-reporter
    npm i sharp
    npm i supertest

# Dev Dependencies

    npm i --save-dev @types/express
    npm i --save-dev @types/jasmine
    npm i --save-dev @types/node
    npm i --save-dev @types/sharp,
    npm i --save-dev @types/supertest
    npm i --save-dev eslint
    npm i --save-dev eslint-config-prettier
    npm i --save-dev eslint-plugin-prettier
    npm i --save-dev nodemon
    npm i --save-dev prettier
    npm i --save-dev ts-node
    npm i --save-dev typescript
