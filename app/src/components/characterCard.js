import React from 'react';

class CharacterCard extends React.Component {
    render() {
        return (
            <div>
                {this.props.characters.slice(0, 5).map(data => (
                    <div>
                    <div className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5 card">
                        <div className="w-full mx-auto rounded-lg shadow-lg px-5 pt-4 pb-10 text-gray-800 bg-gray-200 -mt-64  "  style={{maxWidth: '500px' }}>
                            <div className="w-full mb-10 ">
                                <div className="text-3xl text-indigo-500 text-left leading-tight h-3 ">“</div>
                                <p className="text-sm text-gray-600 text-center px-5">{data.quote}</p>
                                <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">”</div>
                            </div>
                            <div className="w-full">
                                <p className="text-md text-indigo-500 font-bold text-center">{data.character}</p>
                                <p className="text-xs text-gray-500 text-center">{data.anime}</p>
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

{/* <div className='mc-mini-section'>
    <p className='mc-class-info'> Quote: {data.quote}</p>
    <div className='bottom-line'>
        <p className='mc-class-info-2'> - Character: {data.character}</p>
        <p className='mc-class-info-3' style={{ marginLeft: '5rem' }}> - Anime: {data.anime}</p>
    </div>
</div> */}