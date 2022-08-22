import { Button, Container, IconButton } from "@mui/material";
import * as React from "react";

// Icons
import MoreVertIcon from "@mui/icons-material/MoreVert";

import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import { SkipNext } from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#2b3036" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  paddingTop: "0px",
  color: theme.palette.text.secondary,
}));

// Queue API
const queue = [ 
  {
    title: "Video 1",
    discordname: "Vise#0001",
    url: 'https://www.youtube.com/watch?v=QH2-TGUlwu4',
    thumbnail: 'https://i.ytimg.com/vi/S6nm4K1bhLw/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDKvGwLUMT34NtqRk8OScFx0HsMCA',
  },
  {
    title: "Video 2",
    discordname: "Vise#0001",
    url: 'https://www.youtube.com/watch?v=QH2-TGUlwu4',
    thumbnail: 'https://i.ytimg.com/vi/84GUEi-qrG0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCGlBQny7KuNi5Wjq1v5XHqvIUO5g',
  },
  {
    title: "Video 3",
    discordname: "Vise#0001",
    url: 'https://www.youtube.com/watch?v=QH2-TGUlwu4',
    thumbnail: 'https://i.ytimg.com/vi/JeTIZauSukk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB8y7M-hD4SclgZXt5C4cQG8haJGw',
  }
]

export default function Queue() {
  return (
    <div>
      <Container
        style={{
          backgroundColor: "#2b3036",
          color: "white",
          borderRadius: "5px",
          position: "fixed",
          minWidth: "100%",
          minHeight: "125px",
          bottom: "0",
          paddingBottom: "10px",
          paddingTop: "10px",
          zIndex: 1,
        }}
        maxWidth="lg"
      >
        <div>
          <Stack
            divider={<Divider orientation="vertical" flexItem />}
            direction="row"
            spacing={1}
          >
            <div>
              <h6
                style={{
                  fontWeight: "bold",
                }}
              >
                {" "}
                On Deck:{" "}
              </h6>
              <Button style={{ color: 'white', fontWeight: 'bold', backgroundColor: '#2b3036' }}><SkipNext /> Skip</Button>
            </div>
            {queue.map((item) => (
              <Item style={{ backgroundColor: "#2b3036", color: "white", padding: 0 }}>
              <img
                src={item.thumbnail}
                alt="VideoImg"
                style={{
                  borderRadius: "10px",
                  minWidth: "150px",
                  maxWidth: "150px",
                  minHeight: "85px",
                  maxHeight: "85px",
                }}
              />
              <div>
                <small
                  style={{
                    fontSize: "13px",
                    fontWeight: "bold",
                    flex: 1,
                    flexWrap: "wrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.title.length > 15 ? item.title.substring(0, 15) + "..." : item.title}
                </small>
                <br />
                <small
                  style={{
                    fontSize: "13px",
                    fontWeight: "bold",
                    flex: 1,
                    flexWrap: "wrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  {`By: ${item.discordname}`.length > 15 ? item.discordname.substring(0, 15) + "..." : item.discordname}
                </small>
                {/* THE PLAN IS TO ADD THIS BACK NOT RIGHT NOW */}
                {/* <IconButton
                  style={{
                    flex: 1,
                    float: "right",
                    justifyContent: "center",
                    color: "white",
                  }}
                  size="small"
                >
                  <MoreVertIcon />
                </IconButton> */}
              </div>
            </Item>
            ), )}
          </Stack>
        </div>
      </Container>
    </div>
  );
}