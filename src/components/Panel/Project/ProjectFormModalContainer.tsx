import React, { ChangeEvent, MouseEvent, useState } from "react";
import type { FC } from "react";
import ProjectFormModal from "./ProjectFormModal";
import { IProjectInput, IUser } from "../../../types";
import { addProject } from "../../../database/projects";

type ProjectFormModalContainerProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const TestUser: IUser = {
  avatar:
    "https://gravatar.com/avatar/ca41e1951fb554e7dc459393cb400f0e?s=400&d=robohash&r=x",
  name: "Jaems",
};

const ProjectFormModalContainer: FC<ProjectFormModalContainerProps> = ({
  open,
  setOpen,
}) => {
  const [project, setProject] = useState<IProjectInput>({
    desc: "",
    name: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addProject(project, TestUser);
    setProject({
      desc: "",
      name: "",
    });
    setOpen(false);
  };

  return (
    <ProjectFormModal
      open={open}
      setOpen={setOpen}
      project={project}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default ProjectFormModalContainer;
