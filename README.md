# Project Title

REACT DASHBOARD

## Demo link:

https://react-dashboard-1223.netlify.app/

## Table of Content:

- [About The Project](#about-the-project)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Setup](#setup)

## About The Project

This project contains a UI for a dashboard/admin panel. The admin panel will contain a top-navigation, sidebar and a main-content area.

## Screenshots

![image](/uploads/8e179a8aae42f5f79929556f60995fe8/image.png)
![image](/uploads/b4288987b7a21508ad899a067ef0e63c/image.png)
![image](/uploads/d7d9a2eaa62ce79a3c5442adf9c81831/image.png)
![image](/uploads/19021c0ba72c7e080594aaee06ea1e1f/image.png)
![image](/uploads/edfe9ac3cab45d712edab1542bdab612/image.png)
![image](/uploads/9419c7034404781f42abb7bd19a15f28/image.png)

## Technologies

`Vite`, `ReactJS` , `MUI`, `Eslint`, `Prettier`, `Recharts`

## Setup

1\. Clone the repository:

```
git@code.jtg.tools:swaijot.kaur/react-assignment.git
```

2\. Install nvm :

```
https://github.com/nvm-sh/nvm#installing-and-updating
```

3\. Install node using nvm:

`nvm install --lts`

4\. Install the dependencies:

```bash
nvm use
yarn install
```

5\. **Start** :  
After the successfull installation of the packages:

```
yarn run dev
```

6\. **build** : To run the project in production mode:

```
yarn run build
```

7\. **lint** : Run ESLint

```
 yarn lint
```

**lint:fix** : Run ESLint and Automatically Fix Errors Resolvable By ESLint

```
 yarn lint:fix
```

**When adding new aliases** :
define in both `vite.config.js` and in `jsconfig.json` for intellisense.

**Used `recharts.js` for implementing graph** :

```
 https://recharts.org/en-US/
```

## Steps To Deploy:

1\. Install netlify cli using following command:

```
yarn add global netlify-cli
```

2\. To deploy the application we have to make sure that we’re in the project folder and then we will run this command:

```
netlify deploy
```

We might get a pop-up window which will ask us to log in with Netlify and grant access to the Netlify CLI.

Now, we’ll click Authorize. Now that we’re authorized, we can follow the command line prompts to deploy the app.

3\. Command Line Prompts

```
In the console, it says that “This folder isn’t linked to a site yet. What would you like to do?” It wants to know if we want to link this directory to an existing site or create and configure a new site. Since this is a new site, we’ll select Create & configure a new site.
```

```
It gives us the option to give our site a name. I’ll type portfolio on netlify (You can type any available name which you like).
```

```
Now, as deploy path, we need to specify our project's dist directory which contains the assets for deployment. So, we will type build there and press enter.
```

```
our site will get created and will be deployed to a draft URL first, which we can view by copying and pasting the URL in the browser.
```

```
back in the console, it says “If everything looks good on your draft URL, take it to live with the --prod flag”.

So to make our app live, we’ll run the command shown on the command line: "netlify deploy --prod"
```

4\. If you’re publishing an app that uses a router like React Router you’ll need to configure redirects and rewrite rules for your URLs

`add a file inside the dist folder of our app named _redirects. Inside the file, we need to include the following rewrite rule.
`

```
/*    /index.html  200
```

This rewrite rule is going to serve index.html file instead of giving a 404, no matter what URL the browser requests.
