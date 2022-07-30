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

* Styling 
  * Color Schemes
    { White | Light Blue }


### Workflow: 
* Backend Setup
    * [X] Auth Redirect link to Discord
    * [X] Connecting to the Database
    * [X] Grabbing info from that and Logging it into the Database.
    * [X] Logging into Dashboard with Dashboard-Passport.
    * [X] Fix API not replying with right data. (IM DUMB!)
    * [X] Update guild info in database on click (Already pull current data on Auth)
    * [X] Show guilds the bot isn't in but the user has perms (Bugged right now and not working right now!)
    * [X] Setup Guild Database for the WatchAlong room.
* Simple Dashboard Functions
    * [X] Adding Bootstrap for Components
    * [X] Set up simple Router for Pages
    * [X] Using Cookies with Database [MongoDB](https://www.mongodb.com/).
    * [X] Selecting a Channel | With Data and All being transferred
    * [X] Add bot button that will allow users to invite the bot to a guild.
    * [X] Dropdown on click of the Username and Discriminator.
    * [] Create UI for Dashboard. (Opening a Room for Videos to get pushed too, Side bar that shows Current Guilds and the Abilty to switch the guilds with a dropdown.)
* Updates (Not important at this Stage)
    * [X] Make the Cards(Server List) break every 3rd server on the screen.
    * [] Auto Login with Backend if we have cookies
    * [] Info about WatchAlong and How to use it.
    * [] Creating UI for the Home page
* Bot Setup 
    * [] Allow for the bot to go online with the Server.
    * [] Allow for the bot to manage Database with the backend
    * Events 
      * [] Guild Create (Create a Channel for the Video to be sent too)
      * [] Message Create (If that message is sent in the bots channel, filter the link or message)