import * as React from 'react';
import { connect } from 'react-redux';
import * as Helmet from 'react-helmet';

const App: React.StatelessComponent<any> = ({ children }) => {
  return (
    <div>
      <Helmet
        defaultTitle='Marvel Super Heroes'
        titleTemplate='%s - Marvel Super Heroes'
        meta={[
          {
            name: 'description',
            content: 'A list of Marvel Super Heroes'
          },
        ]}
        htmlAttributes={{ lang: 'en' }}
      />
      {children}
    </div>
  );
};

function mapStateToProps(state: any) {
  return {}
}

export default connect(mapStateToProps)(App);
