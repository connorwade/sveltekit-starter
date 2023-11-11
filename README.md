# Connor's Opinionated Sveltekit Starter

This is a starter template for Sveltekit for quickly prototyping apps or experimenting. Sveltekit is quite nice on it's own, but for most apps you'll need a way to style (especially if you aren't a designer and a solo developer) and a way to store data:

- CSS - TailwindCSS and DaisyUI
- ORM - Drizzle

That's pretty much it. The rest is just the standard Sveltekit starter.

## Basic functions that I got sick of rewriting every time I start a new Sveltkit project

1. Handle dark/light mode. This is accomplished through a very simple theme management from DaisyUI. It rights the preferences to the localStorage to keep them.
2. Very Basic Authorization. If you want to use this you need to extend it quite a bit. But I still like having it around since rewriting auth in Sveltekit everytime is annoying.
3. Basic DB setup. The database just uses sqlite pointing to ':memory:'. Again you have to extend it quite a bit to make it useable, but it's nice to be able to prototype with it.

## How to use

1. Clone to a repository
2. Delete the git file: `rm -rf .git`
3. Run these commands: `pnpm install && pnpm db:generate && pnpm dev`