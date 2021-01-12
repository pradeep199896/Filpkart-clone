import React from 'react'
import {SearchOutlined } from '@ant-design/icons'

export class input extends React.Component {
    render() {
        return (
            <div className='esearch'>
                 <input type='search' className='search' placeholder='Please Enter' name='images' />
                    <button > 
                    <SearchOutlined className='search'/>
                    </button>
            </div>
        )
    }
}

export default input
