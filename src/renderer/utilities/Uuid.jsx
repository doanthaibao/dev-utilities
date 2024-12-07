import { useNavigate } from 'react-router-dom';
import { lazy, useState } from 'react';

import './Uuid.css';
import { ToastContainer, toast } from 'react-toastify';
import uuidFn from './utils/UtilsFunc';
import 'react-toastify/dist/ReactToastify.css';

const Button = lazy(() => import('./components/Button'));
const TextBox = lazy(() => import('./components/TextBox'));

const Uuid = () => {
  const navigate = useNavigate();
  const [uuidValue, setUuid] = useState(uuidFn());

  const copyToClipboard = () => {
    // eslint-disable-next-line promise/catch-or-return,promise/always-return
    navigator.clipboard.writeText(uuidValue).then(() => {
      toast('UUID copied to clipboard', {
        className: 'toast-custom', // Apply the custom class
      });
    });
  };
  const generateNewUuid = () => {
    setUuid(uuidFn());
  };
  return (
    <div className="body">
      <div className="container">
        <Button
          onClick={() => navigate(-1)}
          text="← Go Back"
          className="back-button"
          disabled={false}
        />
        <h1>UUID Generator</h1>
        <p>Generate and copy unique UUIDs effortlessly.</p>
        <TextBox id="uuid" value={uuidValue} />
        <ToastContainer autoClose={1000} />
        <div className="button-container">
          <Button text="Copy" className="secondary" onClick={copyToClipboard} />
          <Button
            text="Generate New UUID"
            className="primary"
            onClick={generateNewUuid}
          />
        </div>
      </div>
    </div>
  );
};
export default Uuid;
