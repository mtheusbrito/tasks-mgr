import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import Logo from '../../../../components/Logo';

const useStyles = makeStyles({
  root: {},
  toolbar: {
    height: 64,
  },
});

const TopBar = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <AppBar className={clsx(classes.root, className)} elevation={0} {...rest}>
      <Toolbar className={classes.toolbar}>
        <RouterLink to='/'>
          <Logo />
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
};
TopBar.defaultProps = {
  className: '',
};

export default TopBar;
