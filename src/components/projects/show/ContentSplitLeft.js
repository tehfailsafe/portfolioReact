import React from 'react';

const ContentSplitLeft = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },
  
  render(){
    return(
      <div className="col-sm-7">
        { this.props.title &&
          <h4>{this.props.title}</h4>
        }

        <div className="copy">
          {this.props.children}
        </div>
      </div>
    )
  }
})

export default ContentSplitLeft;
