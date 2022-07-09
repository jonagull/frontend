import emailjs from "@emailjs/browser";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

export const EmailForm = () => {
  const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 500px;
    justify-content: center;
    align-items: center;
    font-family: poppins;
    width: 100%;
    overflow: auto;

    label {
      border-radius: 10px;
    }

    input {
      border-radius: 2px;
      border: 1px solid black;
    }
  `;

  const FieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    width: 300px;

    input {
      border: none;
    }

    div {
      margin-bottom: 10px;
      width: 100%;
    }
  `;

  const form = useRef();

  const [resultText, setResultText] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0cwge7b",
        "template_08kyzy3",
        form.current,
        "euRALTOZ0Gu-BfKEj"
      )
      .then(
        (result) => {
          setResultText(result.text);
        },
        (error) => {
          setResultText(error.text);
        }
      );
  };

  return (
    <React.Fragment>
      <FormWrapper>
        <DraftsIcon />
        <form ref={form} onSubmit={sendEmail}>
          <FieldWrapper>
            <TextField
              name="user_name"
              id="outlined-basic"
              label="Navn"
              variant="outlined"
              required
            />

            <TextField
              name="user_number"
              id="outlined-basic"
              label="Telefonnummer"
              variant="outlined"
            />

            <TextField
              name="user_email"
              id="outlined-basic"
              label="E-post"
              variant="outlined"
              required
            />

            <TextField
              name="message"
              id="outlined-basic"
              label="Melding"
              variant="outlined"
              multiline
              required
            />
          </FieldWrapper>

          <Button
            type="submit"
            value="send"
            variant="contained"
            endIcon={<SendIcon />}
            style={{ backgroundColor: "black", marginBottom: "20px" }}
          >
            Send
          </Button>
        </form>
        <Box>
          {resultText ? (
            <Box>
              <ThumbUpIcon />
            </Box>
          ) : (
            <Box></Box>
          )}
        </Box>
      </FormWrapper>
    </React.Fragment>
  );
};

export default function EmailModal({ invert }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "white",
    border: "1px solid #000",
    boxShadow: 24,
    p: 4,
    borderRadius: "40px",
    overflow: "hidden",
    marginRight: "100px",
  };

  return (
    <React.Fragment>
      <Button
        onClick={handleOpen}
        variant="contained"
        endIcon={<SendIcon />}
        style={
          invert
            ? {
                backgroundColor: "#000",
                fontFamily: "poppins",
              }
            : {
                backgroundColor: "white",
                fontFamily: "poppins",
                color: "black",
                marginTop: "20px",
              }
        }
      >
        Kontakt
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <EmailForm />
        </Box>
      </Modal>
    </React.Fragment>
  );
}
