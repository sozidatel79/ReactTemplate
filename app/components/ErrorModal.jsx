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
           <div className="reveal large text-center" id="error-modal" data-reveal="">
               <h3>Error {cod}</h3>
               <p className='lead'>{errorMessage}</p>
               <div>
                 <button onClick={this.closeErrorModal} className="button hollow small" data-close="" type="button">
                     <span aria-hidden="true">Close</span>
                 </button>
               </div>
           </div>
       );
   }
});

module.exports = ErrorModal;