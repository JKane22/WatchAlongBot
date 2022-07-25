* Info about WatchAlong
  * Logging in, Not passwords. Social Login
  * A User can invite the bot to any server from Bot or Dashboard
  * A Master User (Admin Role) can open a Channel/Room for video/clips Viewing
  * Users can Submit videos/clips (Twitch.tv | Youtube)
  * Master User (Admin Role) has controls over Video. (Volume, Pause/Play, Skip)

* REACT
  * Template: Typescript
* Discord Bot [WatchAlong]
  * Pushes Videos to the Queue
  * Updates people in discord what Videos are in Queue and what position.
  * Status of Channel/Room being open for videos or not.
* Dashboard
  * Simple Oauth2 Discord Passport
  * Simple way to start up a Channel/Room
* Database [MongoDB](https://www.mongodb.com/)
  * Simple Database for Saving Data


### Workflow: 
* [] Backend Setup
    * [X] Auth Redirect link to Discord
    * [X] Connecting to the Database
    * [X] Grabbing info from that and Logging it into the Database.
    * [X] Logging into Dashboard with Dashboard-Passport.
    * [X] Fix API not replying with right data. (IM DUMB!)
* [] Simple Dashboard Functions
    * [X] Adding Bootstrap for Components
    * [X] Set up simple Router for Pages
    * [X] Using Cookies with Database [MongoDB](https://www.mongodb.com/).
    * [X] Selecting a Channel | With Data and All being transferred
    * [] Info about WatchAlong and How to use it.
    * [] Add bot button that will allow users to invite the bot to a guild.