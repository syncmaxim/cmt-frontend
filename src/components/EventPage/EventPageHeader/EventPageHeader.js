import React from 'react';

const styles = {
  backgroundImage: {
      background: `url('./../event-conference.jpg') no-repeat 50% 50%`,
      backgroundSize: 'cover'
  }
};

const EventPageHeader = props => {
    return (
        <div className='event-page-header' style={styles.backgroundImage}>
            <div className='event-page-header-text'>
                {props.title}
            </div>
        </div>
    );
};

export default EventPageHeader;
