var React = require('react');

var ErrorModal = React.createClass({

   closeErrorModal:function () {
      $('#error-modal').fadeOut(500);
   },
   componentDidMount: function () {
      $('#error-modal').fadeIn(500);
   },
   getDefaultProps: function(){
      return {
          cod: '200',
          errorMessage: 'Error'
      };
   },
   propTypes:{
      cod: React.PropTypes.string,
      errorMessage: React.PropTypes.string
   },
   render: function () {
       var {errorMessage, cod} = this.props;
       return (
           <div className="reveal error-modal large text-center" id="error-modal" data-reveal="">
               <h3>Error: {cod}</h3>
               <p className='lead error-message'>{errorMessage}</p>
               <div>
                 <button onClick={this.closeErrorModal} className="button hollow small secondary" data-close="" type="button">
                     <span aria-hidden="true">Close</span>
                 </button>
               </div>
           </div>
       );
   }
});

module.exports = ErrorModal; 