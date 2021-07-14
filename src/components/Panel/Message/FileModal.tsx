import type { FC } from "react";
import React from "react";
import { Button, Icon, Input, Modal } from "semantic-ui-react";

type FileModal = {
  open: boolean;
  closeModal: () => void;
};

const FileModal: FC<FileModal> = ({ open, closeModal }) => {
  return (
    <Modal open={open} onClose={closeModal}>
      <Modal.Header>이미지 업로드</Modal.Header>
      <Modal.Content>
        <Input fluid name="file" type="file" label="File Types: jpg, png" />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => console.log("Upload file")}>
          <span>
            <Icon name="checkmark" /> Upload
          </span>
        </Button>
        <Button onClick={closeModal}>
          <span>
            <Icon name="remove" /> Cancel
          </span>
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default FileModal;
