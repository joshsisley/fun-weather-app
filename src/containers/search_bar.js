/**
 * Created by joshsisley on 5/7/16.
 */
import React, {Component} from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <form className="import-group">
                <input />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}