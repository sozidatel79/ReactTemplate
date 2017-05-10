var React = require('react');

var ErrorModal = React.createClass({

   closeErrorModal:function () {
       $('#error-modal').fadeOut(500);
   },
   componentDidMount: function () {
      $('#error-modal').fadeIn(500);
   },
   render: function () {
       var {errorMessage, cod} = this.props;
       return (
           <div className="reveal large text-center" id="error-modal">
               <h3>Error {cod}</h3>
               <p className='lead'>{errorMessage}</p>
               <button onClick={this.closeErrorModal} className="button hollow tiny close-button" data-close aria-label="Close reveal" type="button">
                   <span aria-hidden="true">close</span>
               </button>
           </div>
       );
   }
});

module.exports = ErrorModal;