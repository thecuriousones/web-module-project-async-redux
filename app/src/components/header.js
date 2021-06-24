import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div>
                <div class="bg-indigo-900 px-4 py-4">
                    <div class="md:max-w-6xl md:mx-auto md:flex md:items-center md:justify-between">
                        <div class="flex justify-between items-center">
                            <h2 href="#" class="inline-block py-2 text-white text-xl font-bold" style={{ marginLeft: '-10rem' }}>Aniquotes</h2>
                            <div style={{ marginLeft: '84rem' }} >
                                <div class="bg-gray-400 w-8 mb-2" style={{ height: '2px' }}></div>
                                <div class="bg-gray-400 w-8 mb-2" style={{ height: '2px' }}></div>
                                <div class="bg-gray-400 w-8 mb-2" style={{ height: '2px' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;
