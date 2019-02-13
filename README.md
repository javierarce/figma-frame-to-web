Figma-Frame-to-Web
=================

Renders a Figma frame into a website using SVGs!

[This](https://figma-frame-to-web.glitch.me/) website was generated from
[this Figma file](https://www.figma.com/file/UPwtwXg6WnGrCagd468vgAcc/javier?node-id=0%3A1") and it's updated every 5 minutes.

---

### How to use this project:

1. Create a new project in Figma. Add a frame and put some cool stuff in it.
2. Copy the `FILE_ID` from the URL (hint: `https://www.figma.com/file/FILE_ID/USERNAME`)
3. Select the frame and copy its ID (hint: `https://www.figma.com/file/FILE_ID/USRNAME?node-id=ID`)
4. Go to your profile and generate a new personal access token.
5. Edit the .env file in this project and paste the file id, node id, and the token.
6. Update the `SECRET` with a random string.
7. Visit `YOUR_GLITCH_URL/refresh/SECRET` to import your Figma frame.
8. Visit `YOUR_GLITCH_URL` to see your frame rendered as an SVG.

Bonus: use https://cron-job.org to ping the refresh URL and update the SVG automatically!

Your secret .env file should look like this:

```
SECRET=change-me
FIGMA_TOKEN=1234-12345678-1234-1234-1234-123456789012
FIGMA_FILE=1234567890
FIGMA_IDS=12:1234
```
---

Grab the code in [Github](https://github.com/javierarce/figma-frame-to-web) · Written by [Javier Arce](http://twitter.com/javier)