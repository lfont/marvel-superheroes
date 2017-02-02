import * as React from 'react';
import { connect } from 'react-redux';
import * as Helmet from 'react-helmet';

import HeroInfo from './HeroInfo';
import loadHero from './loadHero';
import Spinner from '../common/Spinner';
import Error from '../common/Error';

class Hero extends React.Component<any, any> {
  static fetchData({ store, params }: any) {
    return store.dispatch(loadHero(params.id))
  }

  componentDidMount() {
    this.props.loadHero()
  }

  render() {
    return (
      <div>
        <Helmet title="Hero Info" />
        <Spinner show={this.props.isFetching} />
        <Error error={this.props.error} />
        <HeroInfo hero={this.props.hero} />
      </div>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    isFetching: state.hero.isFetching,
    hero: state.hero.data,
    error: state.hero.error
  };
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    loadHero: () => {
      dispatch(loadHero(ownProps.params.id));
    }
  };
};

export { Hero }
export default connect(mapStateToProps, mapDispatchToProps)(Hero)
