import { Button, Container, GridList, Switch, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import TokenCard from './token-card';

const useStyles = makeStyles((theme) => ({
  app: {
    textAlign: 'center'
  },
  form: {
    border: '1px solid',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'center',
    margin: '10vh',
    padding: '2vh'
  },
  header: {
    backgroundColor: '#282c34',
    display: 'flex',
    minHeight: '20vh',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white'
  },
  input: {
    display: 'flex',
    marginRight: '5vh'
  },
  label: {
    paddingRight: '10px'
  }
}));

const tokens = [
  {
    name: 'SophToken',
    owner: 91829137231,
    mintable: false,
    supply: 1000,
    status: false
  },
  {
    name: 'JonasToken',
    owner: 17346372342,
    mintable: false,
    supply: 1000,
    status: false
  }
];

function App() {
  const classes = useStyles();
  const [tokenList, setTokenList] = useState(tokens);
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [supply, setSupply] = useState(0);
  const [mintable, setMintable] = useState(false);
  const [status, setStatus] = useState(false);

  const handleSubmit = e => {
    if (name) {
      setTokenList(tokenList.concat({
        name: name,
        owner: owner,
        supply: supply,
        mintable: mintable,
        status: status
      }))
    }

    setName('');
    setOwner('');
    setSupply('');
    setMintable('');
    setStatus('');

    e.preventDefault();
  }

  return (
    <div className={classes.app}>
      <header className={classes.header}>
        Sophia's Token Creator
      </header>
      <Container>
        <form onSubmit={handleSubmit} className={classes.form}>
          <Typography component={'span'} color="textSecondary">
            Token Name
            <TextField
              className={classes.input}
              value={name}
              onChange={e => setName(e.target.value)}
              type="text"
              name="name"
              required
            />
          </Typography>
          <Typography component={'span'} color="textSecondary">
            Owner
          <TextField
              className={classes.input}
              value={owner}
              onChange={e => setOwner(e.target.value)}
              type="text"
              name="owner"
              required
            />
          </Typography>
          <Typography component={'span'} color="textSecondary">
            Token Supply
         <TextField
              className={classes.input}
              value={supply}
              onChange={e => setSupply(e.target.value)}
              type="number"
              name="supply"
              required
            />
          </Typography>
          <Typography component={'span'} color="textSecondary">
            Mintable
            <Switch
              label="Mintable"
              className={classes.input}
              value={mintable}
              onChange={e => setMintable(e.target.value)}
              placeholder="Mintable"
              type="checkbox"
              name="mintable"
            />
          </Typography>
          <Typography component={'span'} color="textSecondary">
            Status
            <TextField
              className={classes.input}
              value={status ? 'Active' : 'Pending'}
              onChange={e => setStatus(e.target.value)}
              type="text"
              name="status"
              disabled
            />
          </Typography>
          <Button color="primary" variant="contained" type="submit">Submit</Button>
        </form>
      </Container>
      <GridList>
        {tokenList.map((token) => (
          <TokenCard key={token.name} token={token} />
        ))}
      </GridList>
    </div>
  );
}

export default App;
