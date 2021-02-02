// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React, { Component } from "react"

let count = 0;
class CircleIconBoxDiv extends React.Component {
    render(){
        const {} = this.props
        return <React.Fragment>
            <div className="col-md-4">
                <div className={`multicolor-box child${this.props.cnt}`}>
                    <div className="box">
                        <p className="icon-bg"><i className={this.props.img}></i></p>
                        <div className="info-box">
                            <h3 className="title fusion-responsive-typography-calculated">{this.props.title}</h3>
                            <p className="mar-bot-0">{this.props.info}</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
}


export default class ClientLogoSection extends Component {
  render() {
    const { features } = this.props
    return (
      <>
        <div className="section">
            <div className="container">
                <div className="max-width-800 text-center">
                    <h2 className="font-size-60">{this.props.title}</h2>
                    <p>{this.props.info}</p>
                </div>
                <div className="row">
                    {features && features.map((item, index) => {
                        if(item.id === 1 || item.id === 2 || item.id === 3 || item.id === 4 || item.id === 5 || item.id === 6) {
                            if (count >= 6)
                            {
                                count = 1;
                            }else{
                                count = count+1;
                            }
                            console.log("count",count);
                            return <CircleIconBoxDiv cnt={count} key={Math.random() * 10}  img={item.img} title={item.title} info={item.info} />;
                        }
                    })}
                </div>
            </div>
        </div>
        
      </>
    )
  }
}


