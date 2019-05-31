import React from 'react'

const almReport = document.getElementById('almreport').files[0];
class Almfileupload extends React.Component {
    render() {
        return (
            <div className='almfileupload'>
                <p1>
                    Alm Report <input type='file' id='almreport'></input>
                </p1>
            </div>
        )
            
        
    }
}

export default Almfileupload