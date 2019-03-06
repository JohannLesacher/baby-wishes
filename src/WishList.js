import React, { Component } from 'react';
import Element from './Element';
import jsonfile from 'jsonfile';
var file = '/db.json';

class WishList extends Component {

  constructor(props) {
    super();
    this.list = this.list.bind(this)
    this.saveToDb = this.saveToDb.bind(this)
  }
  
  list(props) {
    const data = props.data;
    const list = data.elements.map((element, index) => 
      <Element data={element} key={index} saveToDb={this.saveToDb}/>
    );
    return list;
  }

  saveToDb(id, state) {
    console.log("saveToDb", id, state)
    jsonfile.readFileSync(file, function(err, obj) {
      console.dir(err)
      console.dir(obj)
    })
  }

  render() {
    return (
      <section className="WishList">
        <div className="list">
          { this.list(this.props) }
        </div>
      </section>
    );
  }
}

export default WishList;