import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Stack,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import React from "react";
import Link from "next/link";

export default function LoginForm() {
  const [showPassword, setShowPassword] = React.useState(false);

  // Função para mostrar ou esconder a senha
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div className="container-contact-form flex flex-col items-center">
      <form className="form-login flex flex-col items-center " action="">
        <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
          <InputLabel htmlFor="filled-adornment-username">Usuario</InputLabel>
          <FilledInput id="filled-adornment-username" type="text" />
        </FormControl>

        <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Senha</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? "hide the password" : "display the password"
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <Stack direction="row" spacing={2} m={2}>
          <Button variant="contained" endIcon={<LoginIcon />}>
            Efetuar Login
          </Button>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Button variant="contained" endIcon={<PersonAddIcon />}>
            <Link href="/CreateUser">Criar Conta</Link>
          </Button>
        </Stack>

        {/* <Stack direction="row" spacing={2}>
          <Button loading variant="outlined" loadingPosition="end">
            Submit
          </Button>
        </Stack> */}
      </form>
    </div>
  );
}
