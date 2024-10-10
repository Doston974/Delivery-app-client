import { View, Text } from 'react-native'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from "react-hook-form"
import { IAuthFormData } from '@/types/auth.interface'

const Auth: FC = () => {
    const [isReg, setIsReg] = useState(false)

    const { handleSubmit, reset, control } = useForm<IAuthFormData>({
        mode: "onChange"
    })

    const onSubmit: SubmitHandler<IAuthFormData> = data => {
        console.log(data)
    }

    const isLoading = false

    return (
        <View className='mx-2 items-center justify-center h-full'>
            <Text>Auth</Text>
        </View>
    )
}

export default Auth