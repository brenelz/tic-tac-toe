/* eslint-disable react/prop-types */
import React from 'react';

export default function Box({ onClick, value, isButton }) {
    return (
        <div style={{
            display: 'flex',
            'justifyContent': 'center',
            'alignItems': 'center',
            border: '1px solid #333',
            borderCollapse: 'collapse'
        }}>
            <div style={{
                display: 'flex', 'justifyContent': 'center', 'alignItems': 'center', height: 100, width: 100,
                fontSize: 30
            }} >
                {isButton ? <button style={{ display: 'block', height: '100%', width: '100%' }} onClick={onClick}></button> : value
                }
            </div >
        </div >
    )
} 3