import { Modal } from "@/components/Modal";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { CirclePicker } from "react-color";
import styles from "./styles.module.scss";

export const EditOption = (props: {
  onClose?: () => void;
  onApply?: (title: string, color: string) => void;
  onDelete?: () => void;
  defaultColor?: string;
  defaultTitle?: string;
}) => {
  const {
    onClose = () => {},
    onDelete = () => {},
    onApply = () => {},
    defaultColor = "#607d8b",
    defaultTitle = "",
  } = props;
  const [color, setColor] = useState(defaultColor);
  const [title, setTitle] = useState(defaultTitle);

  const handleApply = () => {
    onApply(title, color);
    onClose();
  };

  const handleDelete = () => {
    onDelete();
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <CirclePicker onChange={({ hex }) => setColor(hex)} color={color} />

      <TextField
        label="Title"
        variant="standard"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginTop: 10 }}
      />

      <div className={styles.buttonContainer}>
        <Button variant="contained" color="success" onClick={handleApply}>
          Apply
        </Button>
        <Button variant="contained" color="error" onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </Modal>
  );
};
