Figma-Frame-to-Web
=================

Renders a Figma frame into a website using SVGs!

[This](https://figma-frame-to-web.glitch.me/) website was generated from
[this Figma file](https://www.figma.com/file/UPwtwXg6WnGrCagd468vgAcc/javier?node-id=0%3A1") and it's updated every 5 minutes.

---

### How to use this project:

1. Create a new project in Figma. Add a frame and put some cool stuff in it.
2. Select the frame and copy the `FILE_ID` and `NODE_ID`from the URL (hint: `https://www.figma.com/file/FILE_ID/USERNAME?node-id=NODE_ID`)
3. Go to your Figma profile and generate a new personal access token.
4. Edit the `key.env` file in this project and paste the `FILE_ID`, `NODE_ID`, and the token.
5. Update the `SECRET` with a random string.

You are all set! Now: 

1. Visit `YOUR_GLITCH_URL.com/refresh/SECRET` to import and your Figma frame / refresh the SVG.
2. Visit `YOUR_GLITCH_URL.com` to see your beautiful frame rendered as an SVG.

Bonus points: use [cron-job.org](https://cron-job.org) to ping the refresh URL every X minutes and have the SVG updated automatically while you sleep!

Your secret .env file should look like this:

```
SECRET=change-me
FIGMA_TOKEN=1234-12345678-1234-1234-1234-123456789012
FIGMA_FILE=1234567890
FIGMA_IDS=12:1234
```

- Grab the code in [Github](https://github.com/javierarce/figma-frame-to-web)
- Run the code in [Glitch](https://glitch.com/edit/#!/figma-frame-to-web?path=README.md:1:0)


Written by [Javier Arce](http://twitter.com/javier)