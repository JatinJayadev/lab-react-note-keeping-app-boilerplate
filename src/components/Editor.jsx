import { Component } from 'react'
import './Editor.css'

class Editor extends Component {
    constructor() {
        super()

        this.state = {
            value: ''
        }

        // this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <div className='container'>
                <div>
                    <h3>Input</h3>
                    <textarea onChange={(e) => { this.handleChange(e) }}></textarea>
                </div>
                <div>
                    <h3>Pro Note</h3>
                    <div className='valueContainer'>{this.state.value}</div>
                </div>
            </div>
        )
    }
}

export default Editor;