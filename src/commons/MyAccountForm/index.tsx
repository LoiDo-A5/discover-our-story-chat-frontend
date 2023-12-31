import React, { ChangeEvent, FC } from 'react';
import { Box, Button, Grid } from '@mui/material';
import useStyles from './styles';
import clsx from 'clsx';
import FormInput from '../Form/FormInput';

interface UserProfile {
  name?: string;
  email?: string;
  phone_number?: string;
}

interface MyAccountFormProps {
  defaultUserData: UserProfile;
  userProfile: UserProfile;
  setUserProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
}

interface InputItem {
  label: string;
  value?: string | undefined;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const MyAccountForm: FC<MyAccountFormProps> = ({ defaultUserData, userProfile, setUserProfile }) => {
  const classes = useStyles();

  const disabled = JSON.stringify(defaultUserData) === JSON.stringify(userProfile);

  const inputItem: InputItem[] = [
    {
      label: 'Name',
      value: userProfile?.name,
      onChange: (e) =>
        setUserProfile((prevProfile) => ({ ...prevProfile, name: e.target.value })),
    },
    {
      label: 'Email',
      value: userProfile?.email,
      disabled: true,
    },
    {
      label: 'Phone number',
      value: userProfile?.phone_number,
      disabled: true,
    },
  ];

  const handleSubmitProfile = async () => {
    // Implement your profile submission logic here
  };

  return (
    <Box className={classes.wrapBox}>
      <div >{'Account'}</div>

      <Box sx={{ pt: 3 }}>
        <Grid container spacing={3}>
          {inputItem.map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <FormInput
                label={item.label}
                value={item.value}
                onChange={item.onChange}
                wrapFormInputStyle={classes.wrapFormInput}
                textFieldStyle={clsx(classes.textField, {
                  [classes.textFieldDisabled]: item.disabled,
                })}
                disabled={item.disabled}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ mt: 3 }}>
        <Button
          variant="contained"
          className={classes.btn}
          onClick={handleSubmitProfile}
          disabled={disabled}
        >
          {'Save changes'}
        </Button>
      </Box>
    </Box>
  );
};

export default MyAccountForm;
