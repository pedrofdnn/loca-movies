import { ButtonStatus } from "../Hooks/ButtonStatus";
import { Button, TextField, Box, Stack, Link } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import {
  Send as SendIcon,
  CheckCircle as CheckCircleIcon,
  Error as ErrorIcon,
} from "@mui/icons-material";

export default function FormContact() {
  const {
    remetente,
    destinatario,
    mensagem,
    setRemetente,
    setDestinatario,
    setMensagem,
    handleSubmit,
    getButtonProps,
    errors,
    success,
    error,
    loading,
  } = ButtonStatus();

  return (
    <div className="container-contact-form flex flex-col items-center">
      <h1 className="text-3xl font-bold leading-tight">Contato</h1>

      <Box
        className="form-contact flex flex-col items-center "
        component="form"
        sx={{ "& .MuiTextField-root": { m: 2, width: "45ch" } }}
        onSubmit={handleSubmit}
      >
        <Box sx={{ display: "flex", alignItems: "flex-end", width: "45ch" }}>
          <AccountCircle sx={{ color: "action.active", mr: -1, my: 2.4 }} />
          <TextField
            id="Usuario"
            label="Usuário"
            variant="standard"
            placeholder="Digite seu nome"
            value={remetente}
            error={!!errors.remetente}            
            onChange={(e) => setRemetente(e.target.value)}
            helperText={errors.remetente}
            title="Digite seu nome"
          />
        </Box>

        <TextField
          id="filled-textarea"
          label="Email"
          placeholder="Digite seu email"
          variant="filled"
          onChange={(e) => {
            setDestinatario(e.target.value);
          }}
          value={destinatario}
          error={!!errors.destinatario}
          helperText={errors.destinatario}
          title="Digite seu email"
        />
        <TextField
          id="filled-multiline-static"
          label="Mensagem"
          multiline
          rows={6}
          placeholder="Digite a sua Mensagem"
          variant="filled"
          onChange={(e) => setMensagem(e.target.value)}
          value={mensagem}
          error={!!errors.mensagem}
          helperText={errors.mensagem}
          title="Digite a sua Mensagem"
        />
        <Stack direction="row" spacing={2}>
          <Button
            {...getButtonProps()}
            variant="contained"
            type="submit"
            title="Enviar Mensagem"
            endIcon={
              loading ? (
                <SendIcon />
              ) : success ? (
                <CheckCircleIcon />
              ) : error ? (
                <ErrorIcon />
              ) : (
                <SendIcon />
              )
            }
            disabled={loading || success}
          >
            {loading
              ? "Enviando..."
              : success
              ? "Mensagem Enviada!"
              : error
              ? "Erro ao enviar"
              : "Enviar Mensagem"}
          </Button>
        </Stack>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && (
          <p style={{ color: "green" }}>
            Voce receberá uma cópia no seu email,
            <br /> Pode ser que esteja em sua pasta do Lixo Eletrônico.
          </p>
        )}

        <Stack direction="row" spacing={2}>
          <Link
            href="https://wa.me/5585986109022?text=Olá,%20Olhei%20o%20seu%20portifólio%20e%20quero%20falar%20com%20você!"
            target="_blank"
            rel="noopener"
            style={{ textDecoration: "none", margin: 15 }}
          >
            <Button
              variant="contained"
              endIcon={<WhatsAppIcon />}
              title="Falar pelo WhatsApp"
            >
              WhatsApp
            </Button>
          </Link>
        </Stack>
      </Box>
    </div>
  );
}
