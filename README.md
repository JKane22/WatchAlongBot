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
    * [] Show guilds the bot isnt in but the user has perms (Bugged right now and not working right now!)
* Simple Dashboard Functions
    * [X] Adding Bootstrap for Components
    * [X] Set up simple Router for Pages
    * [X] Using Cookies with Database [MongoDB](https://www.mongodb.com/).
    * [X] Selecting a Channel | With Data and All being transferred
    * [] Info about WatchAlong and How to use it.
    * [] Add bot button that will allow users to invite the bot to a guild.
    * [] Dropdown on click of the Username and Discriminator.
    * [] Auto Login with Backend if we have cookies
* Updates to UI
    * [] Make the Cards(Server List) break every 3rd server on the screen.




** Need to Do This After **
{BotNotIncluded.map((guild: any) => (
        <!-- <Row>
          <Col sm="3">
            <div key={guild.id}>
              <Card
                style={{
                  width: "18rem",
                  minWidth: "50px",
                  height: "300px",
                  backgroundColor: "#1c1c1c",
                  marginLeft: "15px",
                  marginBottom: "15px",
                  opacity: "0.9",
                }}
              >
                <Card.Img
                  src={
                    guild.icon
                      ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`
                      : `https://i.imgur.com/bNdKwD5.png`
                  }
                  alt="Guild Icon"
                  style={{
                    filter: "blur(3px)",
                    overflow: "clip",
                    borderRadius: "10px",
                    minHeight: "50px",
                    height: "200px",
                  }}
                />
                <Card.Img
                  src={
                    guild.icon
                      ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`
                      : `https://i.imgur.com/bNdKwD5.png`
                  }
                  style={{
                    position: "absolute",
                    top: "20%",
                    left: "37%",
                    overflow: "clip",
                    borderRadius: "50px",
                    width: "80px",
                    height: "80px",
                  }}
                />
                <Card.Body>
                  <Card.Title style={{ fontWeight: "bold", color: "white" }}>
                    {guild.name}
                  </Card.Title>
                  <Button
                    variant="success"
                    style={{
                      color: "white",
                      fontWeight: "bold",
                    }}
                    onClick={async () => {}}
                  >
                    Add to Server!
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      ))} -->