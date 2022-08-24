# Tiny Tuba

Small little tuba that plays a sound when you click it. 🎺

## Quickstart

Requires Node and pnpm.

Clone the repo and install all the necessary packages:

```bash
npx degit nullpasswd/tinytuba tinytuba && \
    cd tinytuba && \
    pnpm i
```

### Production setup

This project uses [@sveltejs/adapter-node](https://www.npmjs.com/package/@sveltejs/adapter-node) for production.

To build the app, run `npm run build` inside the root folder of this project.

After that's done, you can run the compiled website with `node build/index.js`.
