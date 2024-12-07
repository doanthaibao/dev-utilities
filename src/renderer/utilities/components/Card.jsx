import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, description, link }) => {
  const navigate = useNavigate();

  const handleCardClick = useCallback(
    (path) => {
      navigate(path);
    },
    [navigate],
  );
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div className="utility-card" onClick={() => handleCardClick(link)}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Card;
