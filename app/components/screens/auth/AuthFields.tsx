import { FC, useState } from 'react'
import { Control } from 'react-hook-form'
import Field from '@/components/ui/field/Field'
import { IAuthFormData } from '@/types/auth.interface'
import { validEmail } from './email.regex'
import { TouchableOpacity, View } from 'react-native'
import { Feather } from '@expo/vector-icons';

interface IAuthFields {
  control: Control<IAuthFormData>
  isPassRequired?: boolean
}

const AuthFields: FC<IAuthFields> = ({ control, isPassRequired }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }


  return (
    <>
      <Field<IAuthFormData>
        placeholder='Enter email'
        control={control}
        name='email'
        rules={{
          required: 'Email is required!',
          pattern: {
            value: validEmail,
            message: 'Please enter a valid email address'
          }
        }}
        keyboardType='email-address'
      />

      <View className='relative'>
        <Field<IAuthFormData>
          placeholder='Enter password'
          control={control}
          name='password'
          secureTextEntry={!isPasswordVisible}
          rules={{
            required: 'Password is required!',
            minLength: {
              value: 6,
              message: 'Password should be minimum 6 characters long'
            }
          }}
        />
        <TouchableOpacity
          className='absolute right-4 top-6'
          onPress={togglePasswordVisibility}
        >
          <Feather
            name={isPasswordVisible ? 'eye-off' : 'eye'}
            size={16}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </>
  )
}

export default AuthFields