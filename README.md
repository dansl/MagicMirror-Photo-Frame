# MagicMirror Photo Frame

***WORK IN PROGRESS***

Setup a Raspberry Pi with a small 7" or 10" touch screen, running MagicMirror and a few modules.

## Setup
- Raspberry Pi 3 or better
- Touch Display
- [MagicMirror](https://github.com/MagicMirrorOrg/MagicMirror)

## Steps
- Follow the [MagicMirror tutorial](https://docs.magicmirror.builders) to start your setup. Once you are setup, continue below.
- Install these Modules following their recommended steps:
  - [MMM-BackgroundSlideshow](https://github.com/darickc/MMM-BackgroundSlideshow)
  - [MMM-Pages](https://github.com/edward-shen/MMM-pages)
  - [MMM-TouchButton](https://github.com/Tom-Hirschberger/MMM-TouchButton)
  - [MMM-ModuleScheduler](https://github.com/ianperrin/MMM-ModuleScheduler)
- Downlod the Config.js and Custom.css files from this repo.
  - Edit the Config.js file and find ```"/home/magicmirror/Pictures"```.
    - You will need to change this path to match your Pictures path on the Raspberry Pi. Typically, it will be something like ```"/home/username/Pictures"```.
  - Place edited Config.js in the "~/MagicMirror/config" folder.
  - Place Custom.css in the "~/MagicMirror/css" folder.
- Add your images to the "~/Pictures" folder.
- Restart MagicMirror and you should now have a Photo Frame.
  - By Default, it's set on a schedule of 7am to 11pm. Durring that time it will show the photo slideshow, outside that time it will dim the modules and show "Good Night" on the screen with no slideshow. This can be changed in the Config.js.
