import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Grid,
  TextField,
  makeStyles,
  createStyles,
  Theme,
  FormControlLabel,
  Checkbox,
  Button,
  Select,
  InputLabel,
  FormControl,
  Typography,
} from "@material-ui/core";

import csc, { ICountry } from "country-state-city";
import {
  signupValidationSchema,
  firstNameSchema,
  lastNameSchema,
  birthDateSchema,
  emailSchema,
  passwordSchema,
  confirmPasswordSchema,
  stateSchema,
  citySchema,
} from "../utils/signupValidation";
import Joi from "joi";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.palette.background.paper,
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: "100%",
    },
    selectDropDown: {
      maxHeight: "300px",
      marginTop: "50px",
    },
    label: {
      display: "block",
    },
    input: {
      width: 200,
    },
    listbox: {
      width: 200,
      margin: 0,
      padding: 0,
      zIndex: 1,
      position: "absolute",
      listStyle: "none",
      backgroundColor: theme.palette.background.paper,
      overflow: "auto",
      maxHeight: 200,
      border: "1px solid rgba(0,0,0,.25)",
      '& li[data-focus="true"]': {
        backgroundColor: "#4a8df6",
        color: "white",
        cursor: "pointer",
      },
      "& li:active": {
        backgroundColor: "#2977f5",
        color: "white",
      },
    },
  })
);
interface errorsObject {
  firstName?: string | null;
  lastName?: string | null;
  birthDate?: string | null;
  email?: string | null;
  password?: string | null;
  confirmPassword?: string | null;
  state?: string | null;
  city?: string | null;
}
export default function Signup() {
  const [errors, setErrors] = useState<errorsObject | null>({
    firstName: null,
    lastName: null,
    birthDate: null,
    email: null,
    password: null,
    confirmPassword: null,
    state: null,
    city: null,
  });

  const [countries, setCountries] = useState<ICountry[]>();
  const countryRef = useRef<HTMLSelectElement>(null);
  const stateRef = useRef<HTMLInputElement>();
  const cityRef = useRef<HTMLInputElement>();
  const firstNameRef = useRef<HTMLInputElement>();
  const lastNameRef = useRef<HTMLInputElement>();
  const birthDateRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const emailRef = useRef<HTMLInputElement>();
  const confirmPasswordRef = useRef<HTMLInputElement>();

  const classes = useStyles();
  useEffect(() => {
    start();
    async function start() {
      setCountries(await csc.getAllCountries());
    }
  }, [setCountries]);

  const handleValidationSingle = (
    e: React.ChangeEvent<{ value: string }>,
    path: string
  ) => {
    try {
      if (path === "firstName") Joi.assert(e.target.value, firstNameSchema);
      else if (path === "lastName") {
        Joi.assert(e.target.value, lastNameSchema);
      } else if (path === "birthDate") {
        Joi.assert(e.target.value, birthDateSchema);
      } else if (path === "email") {
        Joi.assert(e.target.value, emailSchema);
      } else if (path === "password") {
        Joi.assert(e.target.value, passwordSchema);
      } else if (path === "state") {
        Joi.assert(e.target.value, stateSchema);
      } else if (path === "city") {
        Joi.assert(e.target.value, citySchema);
      }
      setErrors((e) => {
        return { ...e, [path]: null };
      });
    } catch (err) {
      console.log(err.message);
      setErrors((e) => {
        return { ...e, [path]: path };
      });
    }
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(
      countryRef.current?.value,
      stateRef.current?.value,
      cityRef.current?.value,
      firstNameRef.current?.value,
      passwordRef.current?.value,
      confirmPasswordRef.current?.value,
      emailRef.current?.value,
      lastNameRef.current?.value,
      birthDateRef.current?.value
    );

    try {
    } catch (err) {
      err.inner.forEach((e: any) => {
        console.log(e);
        setErrors({ [e.path]: e.path });
      });
      console.log(errors);
    }
  };
  console.log("i rerendered");

  return (
    <Container maxWidth="xs">
      <div className={classes.paper}>
        <form onSubmit={handleSubmit} noValidate className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                required
                variant="outlined"
                fullWidth
                label="First Name"
                error={errors?.firstName ? true : false}
                inputRef={firstNameRef}
                onBlur={(e: React.ChangeEvent<{ value: string }>) =>
                  handleValidationSingle(e, "firstName")
                }
              />
              {errors?.firstName ? (
                <Typography variant="subtitle2" color="error">
                  "please enter your first name"
                </Typography>
              ) : (
                false
              )}
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                variant="outlined"
                fullWidth
                label="Last Name"
                inputRef={lastNameRef}
                error={errors?.lastName ? true : false}
                onBlur={(e: React.ChangeEvent<{ value: string }>) => {
                  handleValidationSingle(e, "lastName");
                }}
              />
              {errors?.lastName ? (
                <Typography variant="subtitle2" color="error">
                  "please enter your familly name"
                </Typography>
              ) : (
                false
              )}
            </Grid>

            <Grid item xs={6}>
              <TextField
                required
                variant="outlined"
                fullWidth
                label="Birth Date"
                type="Date"
                InputLabelProps={{
                  shrink: true,
                }}
                error={errors?.birthDate ? true : false}
                inputRef={birthDateRef}
                onBlur={(e: React.ChangeEvent<{ value: string }>) => {
                  handleValidationSingle(e, "birthDate");
                }}
              />
              {errors?.birthDate ? (
                <Typography variant="subtitle2" color="error">
                  "please enter your birth date"
                </Typography>
              ) : (
                false
              )}
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                variant="outlined"
                inputRef={emailRef}
                onBlur={(e: React.ChangeEvent<{ value: string }>) => {
                  handleValidationSingle(e, "email");
                }}
                error={errors?.email ? true : false}
                fullWidth
                label="Email"
              />
              {errors?.email ? (
                <Typography variant="subtitle2" color="error">
                  "please enter a valid email"
                </Typography>
              ) : (
                false
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                variant="outlined"
                fullWidth
                type="password"
                label="password"
                error={
                  errors?.password || errors?.confirmPassword ? true : false
                }
                inputRef={passwordRef}
                onBlur={(e: React.ChangeEvent<{ value: string }>) => {
                  handleValidationSingle(e, "password");
                }}
              />
              {errors?.password ? (
                <Typography variant="subtitle2" color="error">
                  "please enter a valid password (minimum of 6 characters)"
                </Typography>
              ) : (
                false
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                variant="outlined"
                fullWidth
                type="password"
                label="confirm password"
                inputRef={confirmPasswordRef}
                error={errors?.confirmPassword ? true : false}
                onBlur={(e: React.ChangeEvent<{ value: string }>) => {
                  if (passwordRef.current?.value !== e.target.value) {
                    setErrors({ ...errors, confirmPassword: e.target.value });
                  } else {
                    setErrors({ ...errors, confirmPassword: null });
                  }
                }}
              />
              {errors?.confirmPassword ? (
                <Typography variant="subtitle2" color="error">
                  "passwords must match"
                </Typography>
              ) : (
                false
              )}
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <InputLabel id="countrySelectLabel">Country</InputLabel>
                <Select
                  native
                  labelId="countrySelectLabel"
                  id="countrySelect"
                  inputRef={countryRef}
                  fullWidth
                  required
                  MenuProps={{
                    className: classes.selectDropDown,
                  }}
                >
                  {countries
                    ? countries!.map((c: ICountry, index: number) => (
                        <option key={index} value={c.name}>
                          {c.name}
                        </option>
                      ))
                    : null}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <TextField
                  fullWidth
                  inputRef={stateRef}
                  onBlur={(e: React.ChangeEvent<{ value: string }>) =>
                    handleValidationSingle(e, "state")
                  }
                  error={errors?.state ? true : false}
                  label="state"
                  required
                />
                {errors?.state ? (
                  <Typography variant="subtitle2" color="error">
                    "please enter a state"
                  </Typography>
                ) : (
                  false
                )}
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <TextField
                  inputProps={{
                    form: { autoComplete: "off" },
                  }}
                  fullWidth
                  label="city"
                  autoComplete="cityAutoComplete"
                  inputRef={cityRef}
                  error={errors?.city ? true : false}
                  onBlur={(e: React.ChangeEvent<{ value: string }>) =>
                    handleValidationSingle(e, "city")
                  }
                />
                {errors?.city ? (
                  <Typography variant="subtitle2" color="error">
                    "please enter a city"
                  </Typography>
                ) : (
                  false
                )}
              </FormControl>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowEmails" color="primary" />}
              label="I want to receive order updates, offers and/or discounts from nearby stores!"
            />
          </Grid>

          <Button
            className={classes.submit}
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
          >
            Create Account
          </Button>
        </form>
      </div>
    </Container>
  );
}
