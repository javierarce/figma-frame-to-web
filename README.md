Figma Frame to Web
==================

Renders a Figma frame into a website using SVGs.

[This](https://figma-frame-to-web.glitch.me) website was generated from
[this Figma file](https://www.figma.com/file/UPwtwXg6WnGrCagd468vgAcc/javier?node-id=0%3A1") and it's updated every 5 minutes.

---

### How to use this project:

1. Create a new project in Figma. Add a frame and put some stuff in it.
2. Select the frame and copy the `FILE_ID` and `NODE_ID`from the URL (hint: `https://www.figma.com/file/FILE_ID/USERNAME?node-id=NODE_ID`)
3. Go to your Figma profile and generate a new personal access token (you'll only need to do this once).
4. Edit the hidden `.env.sample` file in this project and paste the `FILE_ID`, `NODE_ID`, and the token.
5. Rename `.env.sample` to `.env`.
6. Update the `SECRET` with a random string.

You are all set! Now: 

1. Visit `YOUR_GLITCH_URL.me/refresh/SECRET` to import and your Figma frame / refresh the SVG.
2. Visit `YOUR_GLITCH_URL.me` to see your beautiful frame rendered as an SVG.

Bonus points: use [cron-job.org](https://cron-job.org) to ping the refresh URL every X minutes and have the SVG updated automatically while you sleep or walk your cute dog!

### Play with the code

<a href="https://glitch.com/edit/#!/remix/figma-frame-to-web">
  <img src="https://cdn.glitch.com/2bdfb3f8-05ef-4035-a06e-2043962a3a13%2Fremix%402x.png?1513093958726" alt="remix button" aria-label="remix" height="33">
</a>
