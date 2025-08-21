import Form from "../../../shared/Form/Form"
import Input from "../../../shared/Input/Input"

const SignUp = () => {
  return (
    <Form buttonText="Зарегистрироваться" formTitle="Регистрация">
      <Input
        title='Имя'
      />
      <Input
        title='Пароль'
      />
    </Form>
  )
}

export default SignUp