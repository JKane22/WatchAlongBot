import React from "react";

import { Container, Fade, IconButton, Modal } from "@mui/material";

// Icons
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export default function ChangelogScreen() {
  const [open, setOpen] = React.useState(true);

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Fade in={open}>
        <Container
            style={{
              backgroundColor: "#2b3036",
              color: "white",
              borderRadius: "10px"
            }}
            maxWidth="sm"
          >
            <h4
              style={{
                textAlign: "center",
                fontWeight: "bold",
                paddingTop: "10px",
              }}
            >
              Changelog- Alpha Release 0.0.1
            </h4>
            <img
              // Best Img size will be height: 400 px width: 800 px
              src="https://images.ctfassets.net/a364c9khexw9/44ms7DfHSHe6CsCl3j0t9y/0a181cf40dcb3f7f52e99cecf406c7e8/RR_buttons.png"
              alt="Changelog"
              style={{ width: "100%", height: "auto", paddingTop: "10px" }}
            />
            <div>
              <h5
                style={{
                  paddingTop: "15px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Welcome Testers, This is a Alpha phase of WatchAlong!
              </h5>
              <div style={{ paddingLeft: "5px", paddingBottom: "5px" }}>
                <p style={{ paddingTop: "15px" }}>
                  Hi all, Thanks for choosing WatchAlong!
                  <p style={{ fontWeight: "lighter", paddingTop: "20px" }}>
                    Now that WatchAlong is here, I would like to share some of
                    the features with you!
                  </p>
                  <li>
                    Watch videos from [YouTube, Twitch] with your friends!
                  </li>
                  <li>Use our Discord bot to queue up videos with ease!</li>
                  <li>
                    Use our built in dashboard to control videos and more!
                  </li>
                </p>
                <p style={{ fontWeight: "bold", paddingTop: "5px" }}>
                  -- Vise (JKane)
                </p>
                <p
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    paddingTop: "5px",
                    fontSize: "15px",
                  }}
                >
                  Please report any bugs or issues to Vise#6220 on Discord!
                </p>
              </div>
            </div>
          </Container>
        </Fade>
      </Modal>
    </div>
  );
}
