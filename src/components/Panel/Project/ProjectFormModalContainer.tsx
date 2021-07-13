import React, { ChangeEvent, MouseEvent, useState } from "react";
import type { FC } from "react";
import ProjectFormModal from "./ProjectFormModal";
import { IProjectInput, IUser } from "../../../types";
import { addProject } from "../../../database/projects";
import { useSelector } from "react-redux";
import { RootState } from "../../../modules";

type ProjectFormModalContainerProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProjectFormModalContainer: FC<ProjectFormModalContainerProps> = ({
  open,
  setOpen,
}) => {
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
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
    if (currentUser) {
      addProject(project, currentUser);
    }
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
