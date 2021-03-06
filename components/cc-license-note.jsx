var React = require('react');

var CCLicenseNote = React.createClass({
  render: function() {
    return (
      <p className="CC-license-note">All featured content, unless otherwise noted, is covered under the <a href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0 license</a>.</p>
    );
  }
});

module.exports = CCLicenseNote;
