import { Box, Grid, Paper,} from "@mui/material";
import React  from "react";
import Controls from "../Controls/Controls";

import { GENDER } from "./constant/Gender"

import styles from './style/Register.module.css'




import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function RegisterForm() {
 




  const schema = yup
    .object({
      gender: yup.string().required("لطفا جنسیت را انتخاب کنید"),
      lastName: yup.string().required("لطفا نام خانوادگی را وارد کنید"),
      firstName: yup.string().required("لطفا نام را وارد کنید"),
  
    })
    .required();

  const {
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
   
  });

  const onFormSubmit = (data) => {
    console.log(data)
   
  };

 






  console.log("errors", errors);

  return (
    <>
    
    <Grid container component={Paper} className={styles.formGrid}>
        

          <Box className={styles.boxDiv}>
            <Controls.OutlinedInput
              label="نام"
              name="firstName"
              control={control}
              errors={errors.firstName}
              className={styles.input}
            
            />

            <Controls.OutlinedInput
              control={control}
              label="نام خانوادگی"
              name="lastName"
              errors={errors.lastName}
              className={styles.input}
           
            />
          </Box>

          <Box className={styles.boxDivName}>
            <Controls.OutlinedInput
              control={control}
              label="کدملی"
              name="nationalCode"
              errors={errors.nationalCode}
              className={styles.input}
            
            />

            <Controls.OutlinedInput
              control={control}
              label="شماره موبایل"
              name="mobile"
              errors={errors.mobile}
              className={styles.input}
             
            />
          </Box>

         
        
          <Box className={styles.boxDivGender}>
            
            <Controls.Select
              label="جنسیت"
              name="gender"
              options={GENDER}
              className={styles.input}
              control={control}
              errors={errors.gender}
            
            />

<Controls.OutlinedInput
              label="آدرس"
              name="address"
              control={control}
              errors={errors.firstName}
              className={styles.input}
            
            />

          </Box>
      

         
        </Grid>
      
     
      <Box className={styles.formButtonBox}>
        <Controls.CustomButton
          md={6}
          xs={6}
          text="مرحله بعد"
          onClick={handleSubmit(onFormSubmit)}
          type="submit"
          className={styles.formButton}
        />
      </Box>
    </>
  );
}