import React from "react";
import EmptyState from "../components/common/EmptyState";
import { ReactComponent as NotFoundIllustration } from "../assets/svg/not-found.svg";
import ButtonLink from "../components/common/ButtonLink";

const Error404Page = () => {
  return (
    <EmptyState
      image={<NotFoundIllustration />}
      title="Page doesn’t exist."
      description="The page you’re trying to access doesn’t exist."
      button={
        <ButtonLink color="secondary" href="/">
          Go to Home
        </ButtonLink>
      }
    />
  );
};

export default Error404Page;
