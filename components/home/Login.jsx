import {
  Box,
  Divider,
  FormLabel,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Controls from "../Controls/Controls";
import user from "../../assets/img/user.png";
import Image from "next/image";

import styles from "./style/Login.module.css";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function Login({ handleClose }) {
  const [alert, setAlert] = useState(false);
  const [checkAlert, setCheckAlert] = useState(false);
  const [labelAlert, setLabelAlert] = useState("");
  const [severity, setSeverity] = useState("success");

  const schema = yup
    .object({
      password: yup.string().required("لطفا پسورد را وارد کنید"),
      username: yup.string().required("لطفا نام کاربری را وارد کنید"),
    })
    .required();

  const {
    handleSubmit,
    watch,
    formState: { errors },
    control,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onFormSubmit = (data) => {
    console.log(data);

    setSeverity("success");
    setAlert(true);
    setLabelAlert("ورود با موفقیت انجام شد");
    setCheckAlert((prev) => !prev);
    reset("");
  };

  const inputListGeneratorArray = [
    { title: "نام کاربری", name: "username" },
    {
      title: "کلمه عبور",
      name: "password",
    },
  ];

  console.log("errors", errors);

  return (
    <>
      <div className={styles.container}>
        <Image src={user} alt="user" className={styles.cardImg} />

        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{
            mb: 1,
            fontFamily: "IRANSans",
            color: "#3F4756",
            fontSize: 23,
          }}
        >
          ورود
        </Typography>

        {inputListGeneratorArray.map((itm, idx) => {
          return (
            <>
              <Controls.OutlinedInput
                control={control}
                label={itm.title}
                name={itm.name}
                errors={errors[itm.name]}
              />
            </>
          );
        })}

        <Controls.CustomButton
          md={2}
          xs={2}
          text="ورود"
          onClick={handleSubmit(onFormSubmit)}
          type="submit"
          className={styles.formButton}
        />

        <a className={styles.aButton} href="#">
          فراموشی رمز عبور
        </a>
      </div>

      {alert && (
        <Controls.Toastify
          position="bottom-center"
          type={severity}
          label={labelAlert}
          alert={checkAlert}
        />
      )}
    </>
  );
}
