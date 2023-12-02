import React from 'react';
import { Link } from 'react-router-dom';

import Text from '../../commons/Text/index';
import Colors from '../../configs/Colors';

import useStyles from './styles';

const FormBoxHeader = ({ textHeader, subTextHeader, textLink, router }) => {
  const classes = useStyles();

  return (
    <>
      <Text
        fontWeight={600}
        type="H2"
        className={classes.textHeader}
      >
        {textHeader}
      </Text>

      <div className={classes.headerWrapper}>
        <Text
          fontWeight={500}
          type="H4"
          color={Colors.Gray9}
        >
          {subTextHeader}
        </Text>
        <Link
          className={classes.subHeaderTextLink}
        >
          <Text fontWeight={600}>{textLink}</Text>
        </Link>
      </div>
    </>
  );
};

export default FormBoxHeader;
