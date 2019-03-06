import React, { Component } from 'react';

class Element extends Component {
  constructor(props) {
    super();
    
    this.makeReservation = this.makeReservation.bind(this)
    this.showForm = this.showForm.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      taken:"non",
      showForm:false,
      takenBy: localStorage.getItem(props.data.id) ? localStorage.getItem(props.data.id) : "",
    }
  }

  makeReservation(val) {
    console.log("Element makeReservation")
    this.setState({
      taken:"oui",
      showForm:false
    })
    this.props.saveToDb(this.props.data.id, this.state)
  }

  showForm() {
    console.log("Element showForm")
    this.setState({
      taken:"oui",
      showForm:true,
    })
  }

  renderForm() {
    console.log("Element renderForm")
    return (
      <div className="reservationForm">
        <form className="makeReservation" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.takenBy} onChange={this.handleChange}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }

  handleChange(event) {
    console.log('Element handleChange')
    let val = event.target.value

    this.setState({
      takenBy:val
    })

    localStorage.setItem(this.props.data.id, JSON.stringify(val));
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log('Element handleSubmit')
    let val = this.state.takenBy !== '' ? this.state.takenBy : null
    this.makeReservation(val)
  }

  render() {
    return (
      <article className="Element card card-horizontal mb-4" attr-taken={this.state.taken}>
        {this.state.showForm ? this.renderForm() : ""}
        <img src={this.props.data.image} className="card-img-left card-img" alt={this.props.data.titre}/>
        <div className="card-body">
          <div className="card-header">
          <div className="row">
                <div className="col-9"> 
                  <h4 className="card-title">{this.props.data.titre}</h4>
                  <h6 className="card-subtitle mb-2 text-muted">{this.props.data.description}</h6>                
                </div>
                <div className="col-3 text-right">
                  <p className="card-text card-prix mb-2 text-muted">{this.props.data.prix}€</p> 
                  <div className="card-link"><a href={this.props.data.lien} target="_blank">Voir le produit</a></div>
                                 
                </div>
              </div>
              </div>
          <div className="row">
            <div className="col-10">
              
              
              <h6 className="card-comment-title">Commentaire :</h6>
              <p className="card-text">{this.props.data.commentaire}</p>
              
            </div>
            <div className="col-2">
              <div className="column ">
                <div className="row">
                  <button onClick={this.showForm}><span role="img" aria-label="gift"></span>🎁</button>Je Prends
                </div>
                <div className="row">
                  {this.state.takenBy}
                </div>
                <div className="row">C</div>
              </div>
            </div>
          </div>
          
        </div>
      </article>
    );
  }
}

export default Element;
