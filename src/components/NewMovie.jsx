import React, { Component } from 'react'

class NewMovie extends Component {
    state = {  } 
    render() { 
        return (
            <div className="container">
                <form>
                    <div class="mb-3">
                        <label for="title" class="form-label">Movie title</label>
                        <input type="text" class="form-control" id="title"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Genre</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3">
                        <label for="star" class="form-label">Star</label>
                        <input type="email" class="form-control" id="star" />
                    </div>
                    <div class="mb-3">
                        <label for="rate" class="form-label">Rate</label>
                        <input type="email" class="form-control" id="rate" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}
 
export default NewMovie;