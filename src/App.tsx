import { z } from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import * as S from "./styles";

// Schema para criar usuário
const createUserSchema = z.object({
  email: z
    .string()
    .nonempty("O e-mail é obrigatório")
    .email("Formato de e-mail inválido"),
  password: z.string().min(6, "A senha precisa de no minimo 6 caracteres"),
});

// Criando um tipo a partir do schema do usuário
type CreateUserFormData = z.infer<typeof createUserSchema>;

export default function App() {
  const [output, setOutput] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserSchema),
  });

  function createUser(data: CreateUserFormData) {
    setOutput(JSON.stringify(data, null, 2));
  }

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(createUser)}>
        <S.Input type="email" placeholder="E-mail" {...register("email")} />
        {errors.email && <S.InputError>{errors.email.message}</S.InputError>}
        <S.Input
          type="password"
          placeholder="Senha"
          {...register("password")}
        />
        {errors.password && (
          <S.InputError>{errors.password.message}</S.InputError>
        )}
        <S.Button type="submit">Salvar</S.Button>
      </S.Form>
      <pre>{output}</pre>
    </S.Container>
  );
}
