const React = require('react');

class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>
          {this.props.title}
        </h1>
        <ul>
          {this.props.list.map((item) => {
            return (
              <li key={Math.random()}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
