import * as React from 'react';

const styles = require('./spinner.css');

export interface SpinnerProps { show: Boolean; };

const Spinner: React.StatelessComponent<SpinnerProps> = ({ show }) => {
  if (!show) {
    return null;
  }

  return (
    <div className={styles.spinner}>
      <div className={styles.message}>
        Loading...
      </div>
    </div>
  );
};

export default Spinner;
