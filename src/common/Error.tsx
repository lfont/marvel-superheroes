import * as React from 'react';

const styles = require('./error.css');

export interface ErrorProps { error: { status: string; } };

const Error: React.StatelessComponent<ErrorProps> = ({ error }) => {
  if (!error) {
    return null;
  }

  return (
    <div className={styles.error}>
      <h1>Ooops, an error has occur.</h1>
      <p>We are very sorry about that.</p>
      <p>{error.status}</p>
    </div>
  );
};

export default Error;
