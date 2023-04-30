import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ClipboardJS from "clipboard";
import React, { useEffect, useState } from "react";

export default function EmojiResults({ emojis }) {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    const clipboard = new ClipboardJS(".copy-to-clipboard");
    clipboard.on("success", function (e) {
      if (e.action === "copy") {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      }

      e.clearSelection();
    });
    return () => {
      clipboard.destroy();
    };
  }, []);

  return (
    <Box>
      <List>
        {emojis.map((emoji, index) => (
          <React.Fragment key={index}>
            <ListItem
              data-clipboard-text={emoji.emoji}
              className="copy-to-clipboard"
              sx={{
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#eee",
                  "& > .MuiListItemText-root": {
                    display: "flex",
                  },
                },
              }}
            >
              <ListItemIcon sx={{ color: "#000000" }}>
                {emoji.emoji}
              </ListItemIcon>
              <ListItemText>{emoji.description}</ListItemText>
              <ListItemText
                sx={{
                  color: "#ccc",
                  display: "none",
                  justifyContent: "flex-end",
                }}
              >
                {isCopied ? "Copié !" : "Cliquer pour copier"}
              </ListItemText>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
}
