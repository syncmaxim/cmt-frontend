import React from 'react';

const EventSpeakers = (props) => {
    const styles = {
        speakersContainer: {
            flexGrow: '1',
            display: 'flex',
            margin: '10px 5px',
            border: '1px solid black',
            borderRadius: '5px'
        },
        speakerImageBlock: {
            width: '100px',
            height: '100px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '5px'
        },
        speakerImage: {
            borderRadius: '50%'
        },
        speakerInfoBlock: {
            display: 'flex',
            flexDirection: 'column',
            padding: '0 5px'
        },
        speakerPresentationTitle: {
            padding: '10px 0',
            fontSize: '18px',
            fontWeight: '500'
        },
        speakerName: {
            fontSize: '14px'
        }
    };

    return (
        <div style={styles.speakersContainer}>
            <div style={styles.speakerImageBlock}>
                <img style={styles.speakerImage} alt='speaker' src='./../user-profile.jpg' />
            </div>
            <div style={styles.speakerInfoBlock}>
                <div style={styles.speakerPresentationTitle}>{props.speaker.presentationTitle}</div>
                <div style={styles.speakerName}>{props.speaker.fullName}, {props.speaker.company}</div>
            </div>
        </div>
    )
};

const EventPageMain = props => {
    const { description, speakers } = props.event;

    return (
        <div className='event-page-main'>
            <div className='event-main-row'>
                <div className='event-main-row-header'> Description </div>
                <div className='event-main-row-content'> {description} </div>
            </div>
            {
                (speakers && speakers.length !== 0) ? (
                    <div className='event-main-row'>
                        <div className='event-main-row-header'> Speakers </div>
                        <div className='event-main-row-content speakers-list'>
                            {
                                speakers.map(speaker => {
                                    return (
                                        <EventSpeakers key={speaker._id} speaker={speaker} />
                                    )
                                })
                            }
                        </div>
                    </div>
                ) : null
            }
        </div>
    );
};

export default EventPageMain;
