import React from 'react';

class CharacterCard extends React.Component {
    render() {
        return (
            <div>
                {this.props.characters.slice(0, 2).map(data => (
                    <div>
                        <div className='mc-classes-container'>
                            <div className='mc-class-card'>
                                <div className='mc-mini-section-container'>
                                    <div className='mc-mini-section'>
                                        <p className='mc-class-info'> Quote: {data.quote}</p>
                                        <p className='mc-class-info-2'> - {data.character}</p>
                                        <p className='mc-class-info-3'> - {data.anime}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default CharacterCard;