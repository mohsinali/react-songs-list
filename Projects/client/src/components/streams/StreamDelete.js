import React from 'react';
import Modal from '../Modal';
import history from '../../history';

const StreamDelete = () => {
  const actions = (
    <React.Fragment>
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancel</button>
    </React.Fragment>
  );

  return (
    <div>
      <Modal 
        title="Delete Stream" 
        description="Some description for the modal." 
        actions={actions} 
        onDismiss={() => history.push("/")}
      ></Modal>
    </div>
  );
};

export default StreamDelete;