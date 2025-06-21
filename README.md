# MagicMirror Photo Frame

***WORK IN PROGRESS***

Setup a Raspberry Pi with a small 7" or 10" touch screen, running MagicMirror and a few modules.

## Hardware
- Raspberry Pi 4 or better + Power Cable
- Raspberry Pi compatable Touch Display (any size, but 7" or 10" recommended)
- SD Card 32GB or more

## Steps
- [Setup Raspian OS](https://www.raspberrypi.com/documentation/computers/getting-started.html) on your Raspberry Pi.
- Follow the [MagicMirror tutorial](https://docs.magicmirror.builders) to start your setup. Once you are setup, continue below.
- Install these Modules following their recommended steps:
  - [MMM-BackgroundSlideshow](https://github.com/darickc/MMM-BackgroundSlideshow)
  - [MMM-Pages](https://github.com/edward-shen/MMM-pages)
  - [MMM-TouchButton](https://github.com/Tom-Hirschberger/MMM-TouchButton)
  - [MMM-ModuleScheduler](https://github.com/ianperrin/MMM-ModuleScheduler)
- Download the [Config.js](https://github.com/dansl/MagicMirror-Photo-Frame/raw/refs/heads/main/config.js) and [Custom.css](https://github.com/dansl/MagicMirror-Photo-Frame/raw/refs/heads/main/custom.css) files from this repo.
  - Edit the Config.js file and find ```"/home/magicmirror/Pictures"```.
    - You will need to change this path to match your Pictures path on the Raspberry Pi. Typically, it will be something like ```"/home/username/Pictures"```.
  - Edit the Config.js file and change the weather module's lat and lon variables to be your locations latitude and longitude.
  - Place edited Config.js in the "~/MagicMirror/config" folder.
  - Place Custom.css in the "~/MagicMirror/css" folder.
- Add your images to the "~/Pictures" folder.
- Restart MagicMirror and you should now have a Photo Frame.
  - By Default, it's set on a schedule of 7am to 11pm. Durring that time it will show the photo slideshow, outside that time it will dim the modules and show "Good Night" on the screen with no slideshow. This can be changed in the Config.js.

## Recommendation
- Follow [this guide](https://docs.magicmirror.builders/configuration/autostart.html) to setup Autostart with PM2. Then you can use the "Exit" button I setup on the system page as well as the [Desktop icon](https://github.com/dansl/MagicMirror-Photo-Frame/raw/refs/heads/main/Start-Slideshow.desktop) by placing it in your "~/Desktop" folder.
- Setup Dropbox or another service to easily sync your photos to the Pi. There are a few ways to do this, I chose to use this [Dropbox Uploader script](https://github.com/andreafabrizi/Dropbox-Uploader) to sync photos to my "~/Pictures" folder.
  - For instance, I setup the script following the instructions, then setup a cron job to run every hour to download my photos. Edit your cron table by entering ```cronttab -e``` in terminal, then at the bottom add ```0 * * * * /home/username/Dropbox-Uploader/dropbox_uploader.sh download / /home/username/Pictures```, make sure to change the "username" with your Linux username. Press ctrl+x, press y, press enter, now it should run every hour!
- Install "unattended-upgrades" so you dont need to periodically manually update the OS. Just open terminal and run ```sudo apt install unattended-upgrades```.
- 3D Print a shell for your display. I saved a [few here](https://github.com/dansl/MagicMirror-Photo-Frame/tree/main/3D%20Print) that may work.

## Screenshots
![Screenshot 1](https://github.com/dansl/MagicMirror-Photo-Frame/blob/7a29c26a3ec8684508ddc74662d76c80fbb34192/screenshots/screenshot1.png)

![Screenshot 2](https://github.com/dansl/MagicMirror-Photo-Frame/blob/7a29c26a3ec8684508ddc74662d76c80fbb34192/screenshots/screenshot2.png)

![Screenshot 3](https://github.com/dansl/MagicMirror-Photo-Frame/blob/7a29c26a3ec8684508ddc74662d76c80fbb34192/screenshots/screenshot3.png)

![Screenshot 4](https://github.com/dansl/MagicMirror-Photo-Frame/blob/7a29c26a3ec8684508ddc74662d76c80fbb34192/screenshots/screenshot4.png)
