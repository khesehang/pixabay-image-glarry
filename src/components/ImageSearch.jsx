import React, { useState } from 'react'

const ImageSearch = ({ searchText }) => {

    const [text, setText] = useState('')

    const onSubmit = e => {
        e.preventDefault()
        searchText(text)
    }

    return (
        <div className='image-search' style={{
            maxWidth: '20rem', borderRadius: '10px', overflow: 'hidden', margin: '10px auto'
        }} >
            <form className='image-search-form' onSubmit={onSubmit} style={{ width: '100%', maxWidth: '20rem' }}>
                <div style={{
                    display: 'flex', alignItems: 'center', borderBottom: '1px solid black', borderBottom: '2px solid black', borderColor: '#38a169',
                    padding: '2px 0',
                }}>
                    <input type='text' placeholder='Search Image Term...' onChange={e => setText(e.target.value)} style={{
                        appearance: 'none',
                        border: 'none',
                        backgroundColor: 'transparent', background: 'transparent', border: 'none', width: '100%', color: '#4a5568', marginRight: '3px', padding: '1px 2px', lineHeight: '1.2'
                    }} />
                    <button type='submit' className='btn' style={{
                        flexShrink: '0', background: '#38a169', border: '1px solid 38a169',
                    }}>Search</button>
                </div>
            </form>
        </div>
    )
}

export default ImageSearch