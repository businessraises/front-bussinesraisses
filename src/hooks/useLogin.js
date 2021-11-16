import { useState } from "react"
import { useNavigate } from "react-router"
import { signIn, signUp } from "../firebase/authController"
import messageError from "../static/js/message"

export default function useLogin () {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const onChange = (event) => {
    const key = event.target.name
    const value = event.target.value
    setForm({
      ...form,
      [key]: value,
    })
  }

  const handleSubmitLaunch = async (event) => {
    event.preventDefault()

    const { state } = await signIn(form)

    if (state) {
      navigate('/')
    } else {
      messageError('Usuario o Contraseña, incorrecta', true)
    }
  }

  const handleSubmitRegister = async (event) => {
    event.preventDefault()
    const psw = document.getElementsByName('passwordTemp')[0].value

    if (psw === form.password) {
      const { state } = await signUp(form)

      if (state) {
        navigate('/')
      } else {
        messageError('Ha ocurrido un error, vuelva a intentar.', true)
      }
    } else {
      messageError('Verificar contraseña, deben ser iguales', true)
    }
  }

  return {
    handleSubmitLaunch,
    handleSubmitRegister,
    onChange,
    form
  }
}