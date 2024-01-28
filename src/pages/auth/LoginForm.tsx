import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import PrimaryButton from '~/components/button/PrimaryButton'
import { EMPTY } from '~/global/constants'
import { ScreenPath } from '~/global/enum'
import useAuth from '~/hooks/useAuth'
import InputTextForm from '../../components/form/InputTextForm'
import { FormWrapper } from './Login.styled'
import { ILoginFormProps } from './types/LoginForm'
import { loginValidationSchema } from './validation/LoginValidationSchema'

const LoginForm = () => {
  const defaultValues: ILoginFormProps = {
    email: EMPTY,
    password: EMPTY
  }
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<ILoginFormProps>({
    defaultValues: defaultValues,
    resolver: yupResolver(loginValidationSchema)
  })
  const { user, login } = useAuth()
  const navigate = useNavigate()
  useEffect(() => {
    if (user) {
      navigate(ScreenPath.DASHBOARD)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])
  return (
    <FormWrapper onSubmit={handleSubmit(login)}>
      <InputTextForm
        control={control}
        name='email'
        label='Email'
        type='email'
        error={errors.email?.message}
        variant='standard'
      />
      <InputTextForm
        control={control}
        name='password'
        label='Mật khẩu'
        error={errors.password?.message}
        type='password'
        variant='standard'
      />
      <PrimaryButton type='submit' name='Login' variant='contained' />
    </FormWrapper>
  )
}

export default LoginForm
