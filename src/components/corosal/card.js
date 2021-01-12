import React  from 'react'

export class Card extends React.Component {
    render() {
        return (
            <div>
                <div className="card">
              {<img src={this.props.urls} alt='hit'/>}
                </div>
            </div>
        )
    }
}

export default Card
