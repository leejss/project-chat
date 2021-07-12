import React, { MouseEvent } from "react";
import type { FC } from "react";
import { Button, Form, Icon, Input, Modal } from "semantic-ui-react";
import { IProjectInput } from "../../../types";

type ProjectFormModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  project: IProjectInput;
  handleSubmit: (e: MouseEvent<HTMLButtonElement>) => void;
};

const ProjectFormModal: FC<ProjectFormModalProps> = ({
  open,
  setOpen,
  handleChange,
  project,
  handleSubmit,
}) => {
  return (
    <Modal open={open} dimmer="blurring" onClose={() => setOpen(false)}>
      <Modal.Header>Add New Project</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <Input
              fluid
              label="Project Name"
              name="name"
              value={project.name}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Input
              fluid
              label="Project Description"
              name="desc"
              value={project.desc}
              onChange={handleChange}
            />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color="green" as="button" type="submit" onClick={handleSubmit}>
          <Icon name="plus" />
          Add
        </Button>
        <Button color="red" onClick={() => setOpen(false)}>
          <Icon name="remove" />
          Remove
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ProjectFormModal;
