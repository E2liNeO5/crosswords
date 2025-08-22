import { useForm } from "react-hook-form"
import Form from "../../../shared/Form/Form"
import Input from "../../../shared/Input/Input"
import { TAuthData } from "../types.auth"

const SignUp = () => {
  const { register, formState: { errors }, handleSubmit, watch } = useForm<TAuthData>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit'
  })

  const onSubmit = (data: TAuthData) => console.log(data)

  return (
    <Form
      buttonText="Зарегистрироваться"
      formTitle="Регистрация"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        title='Имя'
        register={register('login', {
          required: {
            value: true,
            message: 'Заполните поле "Имя"'
          },
          minLength: {
            value: 4,
            message: 'Минимальное количество символов в Имени 4'
          },
          maxLength: {
            value: 20,
            message: 'Максимальное количество символов в Имени 20'
          }
        })}
        error={errors.login}
        counter={{
          current: watch('login') ? watch('login').length : 0,
          max: 20
        }}
      />
      <Input
        title='Пароль'
        type='password'
        register={register('password', {
          required: {
            value: true,
            message: 'Заполните поле "Пароль"'
          }
        })}
        error={errors.password}
      />
    </Form>
  )
}

export default SignUp