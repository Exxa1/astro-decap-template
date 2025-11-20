# Használat

- Ha a weboldal linkje változik, két helyen kell átírni a kódban:
  - src/data/config.ts
  - public/admin/config.yml

- Change the basic information in the src/data folder for a new webpage.
- For different languages change the text in the src/data/base_text.ts file.
- To change the nav items go to src/data/nav_items.ts


## Theming

The color concept follows the tokenized approach, explained in this video:
https://www.youtube.com/watch?v=GUupJJC5Ac4&t=284s

To change the colors go to src/styles/tailwind_theme.css and read the comments there in the code

The webpage uses the tailwind typography plugin to style the markdown. The colors follow the webpage colors specified in the tailwind_theme.css file (see above) but you can also specifically change them in the src/styles/markdown_typography_plugin_colors.css file.


## Pages that are only reachable by knowing the link

I made a folder named secret and exculded pages going from there from sitemap in astro.config.mjs.
This way it's possible to make pages that are only reachable if you know the link.
Keep in mind to keep in the header of those pages: <meta name="robots" content="noindex"> so nice robots don't crawl them.

## Dev tools

The code is formatted using the VS code prettier extension


# 👨‍🚀 Astro & decap (netlify) CMS - Portfolio Template

![Template](https://astro-decapcms-starter.netlify.app/opengraph-image.jpg)

This Repo is not that much old but Astro is growing faster its hard for me to cachup due to some of my personal work. if anyone want to use this repo then please do update packages after cloning and look for astro docs to upgrade astro version. Netlify CMS intigration will work fine

This theme/template is designed and crafted by [maxencewolff](https://www.maxencewolff.com) and futher develop by [me](https://codenanshu.in) 
NB: Additional color themes can also be configured on the `src/data/theme.ts` file.

## 🥷 Usage

- You can modify all the information in the files in the `data` folder (presentation, social links, projects list, colors).
- You can write articles in `markdown` format in the `content/posts` folder.
- deploy to netlify
- setup authentication for GithHub

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Features
- seo friendly
- amazing UI/UX (thanks to [maxencewolff](https://www.maxencewolff.com))
- easy to setup
- write from anywhare with git based CMS
- [jampack](https://github.com/divriots/jampack) (for optimization)

  ## how to setup authentication
  the main issue you will face will deploying the site is authentication. to solve this issue please use the guide bellow

  You need to create an API application and make note of the `Client ID` and a Client Secret so that you can use them in your Netlify configuration.

1. In GitHub, go to your account Settings and select Developer Settings, then OAuth Apps or use this [shortcut](https://github.com/settings/developers).
2. Select Register a new application.
3. For the Authorization callback URL, enter `https://api.netlify.com/auth/done`. The other fields can contain anything you want.
4. ![template](https://d33wubrfki0l68.cloudfront.net/67edd5b656c432888d736cd40125cb61376905bb/120ac/images/visitor-access-github-oauth-config.png)
5. On your new application’s GitHub overview page, make note of the `Client ID`.
6. Generate a `Client Secret` and make note of it for later. You can’t access this secret again.

When you complete application registration with GitHub, you need to add the Client ID and Client Secret to your Netlify site:
1. Go to [Site configuration > Access control > OAuth](https://app.netlify.com/sites/astro-decapcms-starter/configuration/access#oauth).
2. Under Authentication Providers, select Install Provider
3. Select GitHub and enter the Client ID and Client Secret from earlier, then save.

That's it now enjoy 🥂



<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
