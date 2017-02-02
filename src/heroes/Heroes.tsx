import * as React from 'react';
import { connect } from 'react-redux';
import * as Helmet from 'react-helmet';

import HeroesList from './HeroesList';
import loadHeroes from './loadHeroes';
import Spinner from '../common/Spinner';
import Error from '../common/Error';

class Heroes extends React.Component<any, any> {
  static fetchData({ store }: any) {
    return store.dispatch(loadHeroes())
  }

  componentDidMount() {
    this.props.loadHeroes()
  }

  render() {
    return (
      <div>
        <Helmet title="Heroes List" />
        <Spinner show={this.props.isFetching} />
        <Error error={this.props.error} />
        <HeroesList heroes={this.props.heroes} />
      </div>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    isFetching: state.heroes.isFetching,
    heroes: state.heroes.data,
    error: state.heroes.error
  };
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    loadHeroes: () => {
      dispatch(loadHeroes());
    }
  };
}

export { Heroes };
export default connect(mapStateToProps, mapDispatchToProps)(Heroes);
