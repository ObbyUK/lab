# Obby Lab

![AltText](https://media.giphy.com/media/wAxlCmeX1ri1y/giphy.gif)

### Setup & Play

* `git clone` the repo
* Be on node `8.9.4` or greater `nvm install 8.9.4 && nvm use 8.9.4`
* `yarn`
* `yarn make-var-files`
* Change `LEAD_GENERATION_EMAIL` email to your own in `.env`
* `yarn start-lang` and go to `localhost:5000` for langauges app
* `yarn start-med` and go to `localhost:3000` for meditation app

### Deployment

* Set prod `.env` and `settings.js` files
* Make sure both `meditation` and `languages` listen to different ports (this will be set by default if you copy the `.example` files)
* make sure in `settings.js` for both apps that the  `host` is not `localhost`
* `yarn`
* `yarn prod-lang` (this will use **pm2** to run the app)
* `yarn prod-med` (this will use **pm2** to run the app)
