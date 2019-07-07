#NC News front-end code and full-stack deployment

This app is the finished version of a full-stack NorthCoders project to produce a news website, called NC News.

The hosted version of the app can be found at https://mattsncnewsproject.netlify.com/

The front-end github repository is at https://github.com/miraematt/ncnews-front-end

The user is automatically logged in (for ease of demonstration) as 'jessjelly'. The user can navigate the site, adding and deleting both comments and articles. The main article page can be sorted while all comments and articles can be voted upon.

This site is fully responsive, using CSS Grid, Flexbox and media queries to fit all sizes of screen.

The hosted version of the back-end project can be found at https://mattsncnewsproject.herokuapp.com/api/

Finally, the back-end repository of this project can be found at https://github.com/miraematt/b-end-ncnews-project

## Available Scripts

In the project directory, you can run:

### `npm start`

This runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
The app is ready to be deployed.

To deploy the app, install netlify by typing:

```
npm install netlify-cli -g
```

## Deploy to a Draft URL

`netlify deploy`

- Authorise Netlify with GitHub, following the prompts in the browser.
- Select `Create & configure a new site`.
- Provide your choice of site name.
- Select your personal account.
- Provide a deploy path. This needs to point to your build directory and should be `./build`.

Your draft version should now be deployed on a url, e.g. `https://5c13ab16055b9be1725868e6--your-site-name.netlify.com`.
Test it out, make sure that everything is working as expected.

## Deploy a Production Version

`netlify deploy --prod`
Specify your build path again.
This will deploy the site to your actual url: `https://your-site-name.netlify.com`.

## Redeployment

1. Create an updated build version of your code:

```bash
npm run build
```

2. Deploy to a draft url:

```bash
netlify deploy
```

3. Deploy to your production url:

```bash
netlify deploy --prod
```
