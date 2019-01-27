import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { realpathSync } from 'fs';



function ResultList(props) {
    const items = props.myList;
    const listItems = myList.map((item) =>
<li><button type="button" class="btn btn-primary" onClick={App.handleClick}>{item}</button></li>
);
return (
    <ul class="list-unstyled">{listItems}</ul>
    
);
}


class List extends React.Component {
    //this would take props from search result
    
    render() {
        return (
            <div>
            <ResultList items={myList}/>
            <div>
            <ResultBox/>
                </div>
            </div>
        );
    }
}


/*
class InformationBox extends React.Component {


}
*/

class Searchbox extends React.Component {
    render() {
    return (
        <div>
        <h1>Location for {this.props.name}'s Art</h1>
        <form>
            <input></input>
            </form>
            <div>
        <List value = {myList} />
      </div>
        </div>
    );
}
}

export class Box1 extends Component{
    render(){
        return(
            <div {...this.props}>
            <div class="card">
            <img class="card-img-top" alt="Card image cap"/>
            <div class="card-body">
            <h5>{this.props.location}</h5>
            <p class="card-text">{this.props.info}</p>
            <a href="#" class="btn btn-primary">Learn More</a>
            </div>
                </div>
                </div>
        );
    }

}

export class Box2 extends Component{
render(){
    return(
<div {...this.props}>
<div class="card">
<img class="card-img-top" alt="Card image cap"/>
<div class="card-body">
<h5>{this.props.location}</h5>
<p class="card-text">{this.props.info}</p>
<a href="#" class="btn btn-primary">Learn More</a>
</div>
</div>
</div>

    );


}

}

export class InformationBox extends React.Component {
    constructor (props) {
        super(props)
        this.state = { showComponent: ""};
    }

    toggleDiv = (name) => {
        if (name === "monday"){
            this.setState({
                showComponent: "box1"
            });
        }else if(name === "thursday"){
            this.setState({
                showComponent: ""
            });
        }else{
            this.setState({
                showComponent: ""
            });
        }

    }

    render() {
        return (
            <div>
            <button onClick={ this.toggleDiv("monday") } >
                Monday
            </button>
            {this.state.showComponent === "box1" && <Box1 />}
            <button onClick={ this.toggleDiv("thursday") }>
                Thursday
            </button>
            {this.state.showComponent === "box2" && <Box2 />}
            </div>

        );
    }
}

class App extends React.Component {
constructor() {
    super();

    this.state = {
        clicked: false
    };

    this.handleClick = this.handleClick.bind(this);
}

handleClick() {
    this.setState({
        clicked: true
    });
}

render(){
return (
<div>
<Searchbox name = "Dan"/>
{this.state.clicked ? <InformationBox /> : null}
</div>
);

}

}

function ResultBox() {
    function handleClick(e) {
        
        console.log('The link was clicked.');
        
    }

    return (
<InformationBox />
    );
    
}

const locationInfo = ["info"];
const myList = ["San Francisco", "New York", "Chicago"];
const data = ["San Francisco", "Our San Francisco Store is located two blocks North of Market Street and East of Union Square", "New York City", "Our New York Store is located two blocks from Time Square","Chicago","Our Chicago Store is located on the Magnificent Mile"];
ReactDOM.render(
    <App />,
    document.getElementById('root')
);