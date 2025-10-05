# MagicMirror Photo Frame

***WORK IN PROGRESS***

Setup a Raspberry Pi with a small 7" or 10" touch screen, running MagicMirror and a few modules.

## Hardware
- Raspberry Pi 4 or better + Power Cable
- Raspberry Pi compatable Touch Display (any size, but 7" or 10" recommended)
- SD Card 32GB or more

## Steps
- [Setup Raspian OS](https://www.raspberrypi.com/documentation/computers/getting-started.html) on your Raspberry Pi.
- Follow the [MagicMirror tutorial](https://docs.magicmirror.builders) setup or follow command below.
  - NOTE: At the time of writing this, nodejs on Raspian is on version 20, to simplify the process this will use [version 2.30.0 of MagicMirror](https://github.com/MagicMirrorOrg/MagicMirror/releases/tag/v2.30.0). For the latest version, follow the official MagicMirror setup and manually install the latest nodejs.
  - In Terminal run these commands in order:
    - ```sudo apt install nodejs npm```
    - ```wget https://github.com/dansl/MagicMirror-Photo-Frame/raw/refs/heads/main/Assets/MagicMirror.zip```
    - ```unzip MagicMirror.zip```
    - ```cd MagicMirror```
    - ```npm install```
- Install these Modules:
  - NOTE: The steps listed below are using downloaded copies, if you want the up-to-date version, follow the repo's setup process.
  - [MMM-BackgroundSlideshow](https://github.com/darickc/MMM-BackgroundSlideshow)
    - ```cd ~/MagicMirror/modules/```
    - ```wget https://github.com/dansl/MagicMirror-Photo-Frame/raw/refs/heads/main/Assets/MMM-BackgroundSlideshow.zip```
    - ```unzip MMM-BackgroundSlideshow.zip```
    - ```cd MMM-BackgroundSlideshow```
    - ```npm install```
  - [MMM-Pages](https://github.com/edward-shen/MMM-pages)
    - ```cd ~/MagicMirror/modules/```
    - ```wget https://github.com/dansl/MagicMirror-Photo-Frame/raw/refs/heads/main/Assets/MMM-pages.zip```
    - ```unzip MMM-pages.zip```
  - [MMM-TouchButton](https://github.com/Tom-Hirschberger/MMM-TouchButton)
    - ```cd ~/MagicMirror/modules/```
    - ```wget https://github.com/dansl/MagicMirror-Photo-Frame/raw/refs/heads/main/Assets/MMM-TouchButton.zip```
    - ```unzip MMM-TouchButton.zip```
    - ```cd MMM-TouchButton```
    - ```npm install```
  - [MMM-ModuleScheduler](https://github.com/ianperrin/MMM-ModuleScheduler)
    - ```cd ~/MagicMirror/modules/```
    - ```wget https://github.com/dansl/MagicMirror-Photo-Frame/raw/refs/heads/main/Assets/MMM-ModuleScheduler.zip```
    - ```unzip MMM-ModuleScheduler.zip```
    - ```cd MMM-ModuleScheduler```
    - ```npm install --omit=dev```
- Download the [Config.js](https://github.com/dansl/MagicMirror-Photo-Frame/raw/refs/heads/main/config.js) and [Custom.css](https://github.com/dansl/MagicMirror-Photo-Frame/raw/refs/heads/main/custom.css) files from this repo.
  - Edit the Config.js file and find ```"/home/magicmirror/Pictures"```.
    - You will need to change this path to match your Pictures path on the Raspberry Pi. Typically, it will be something like ```"/home/pi/Pictures"```.
  - Edit the Config.js file and change the weather module's lat and lon variables to be your locations latitude and longitude.
  - Place edited Config.js in the "~/MagicMirror/config" folder.
  - Place Custom.css in the "~/MagicMirror/css" folder.
- Add your images to the "~/Pictures" folder.
- Restart MagicMirror and you should now have a Photo Frame.
  - By Default, it's set on a schedule of 7am to 11pm. Durring that time it will show the photo slideshow, outside that time it will dim the modules and show "Good Night" on the screen with no slideshow. This can be changed in the Config.js.

## Recommendation
- Follow [this guide](https://docs.magicmirror.builders/configuration/autostart.html) to setup Autostart with PM2. Then you can use the "Exit" button I setup on the system page as well as the [Desktop icon](https://github.com/dansl/MagicMirror-Photo-Frame/raw/refs/heads/main/Start-Slideshow.desktop) by placing it in your "~/Desktop" folder.
  - ```sudo npm install -g pm2```
  - ```pm2 startup```
  - ```cd ~```
  - ```nano mm.sh```
  - Paste the below text into the window, then press 'ctrl+x', press 'y', press 'enter'
    ```
    cd ./MagicMirror
    DISPLAY=:0 npm start
    ```
  - ```chmod +x mm.sh```
  - ```pm2 start mm.sh```
  - ```pm2 save```
  - ```cd ~/Desktop```
  - ```wget https://github.com/dansl/MagicMirror-Photo-Frame/raw/refs/heads/main/Start-Slideshow.desktop```
  - ```chmod +x Start-Slideshow.desktop```
- Setup Dropbox or another service to easily sync your photos to the Pi. There are a few ways to do this, I chose to use this [Dropbox Uploader script](https://github.com/andreafabrizi/Dropbox-Uploader) to sync photos to my "~/Pictures" folder.
  - For instance, I setup the script following the instructions, then setup a cron job to run every hour to download my photos.
    - Edit your cron table by entering ```crontab -e``` in terminal.
    - Then at the bottom add ```0 * * * * /home/username/Dropbox-Uploader/dropbox_uploader.sh download / /home/username/Pictures```
    - Make sure to change the 2 instances of "username" with your Linux username(ex: 'pi').
    - Press 'ctrl+x', press 'y', press 'enter', now it should run every hour!
- Install "unattended-upgrades" so you dont need to periodically manually update the OS. Just open terminal and run ```sudo apt install unattended-upgrades```.
- 3D Print a shell for your display. I saved a [few here](https://github.com/dansl/MagicMirror-Photo-Frame/tree/main/3D%20Print) that may work.

## Screenshots
![Screenshot 1](https://github.com/dansl/MagicMirror-Photo-Frame/blob/7a29c26a3ec8684508ddc74662d76c80fbb34192/screenshots/screenshot1.png)

![Screenshot 2](https://github.com/dansl/MagicMirror-Photo-Frame/blob/7a29c26a3ec8684508ddc74662d76c80fbb34192/screenshots/screenshot2.png)

![Screenshot 3](https://github.com/dansl/MagicMirror-Photo-Frame/blob/7a29c26a3ec8684508ddc74662d76c80fbb34192/screenshots/screenshot3.png)

![Screenshot 4](https://github.com/dansl/MagicMirror-Photo-Frame/blob/7a29c26a3ec8684508ddc74662d76c80fbb34192/screenshots/screenshot4.png)
