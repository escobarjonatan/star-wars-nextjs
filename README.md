# Next.js + Tailwind + Star Wars api
The purpose of this project is to create an app with the following requirements:
1. Present the list of vehicles on the page.
2. With each vehicle, show all of the films each vehicle is featured in.
3. When clicking on a particular film, the film details should populate into the film section. 4. Selected film should persist across browser refresh

Using the following API:
Vehicles: https://swapi.dev/api/vehicles?format=json
(data might be spread across multiple pages, use search params to specify page)
Films: https://swapi.dev/api/films/3/?format=json

## Getting Started
First, run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Dev Notes
- There are a couple of major improvements I would have implemented given more time. You can find those throughout the app if you search for `TODO`.
- The reason why I decided to fetch all vehicles at once was because I thought I was going to have enough time to get to the filter/sort bonus feature and it would have made it easier. In retrospect, I should have implemented a pagination feature.
- Even though it fetches all vehicles at once, because of SSR/getStaticProps, performance impact is very small.
