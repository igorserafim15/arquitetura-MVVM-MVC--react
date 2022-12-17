import { Button, Text, TextInput, View } from 'react-native'
import { useLoginController } from './Login.controller'

export function Login() {
  const ctrl = useLoginController()

  return (
    <View>
      <Text>Email</Text>
      <TextInput
        placeholder="exemplo@email.com"
        value={ctrl.email}
        onChangeText={ctrl.setEmail}
      />

      <Text>Senha</Text>
      <TextInput
        placeholder="*********"
        value={ctrl.password}
        onChangeText={ctrl.setPassword}
      />

      <Button
        title="Entrar"
        onPress={ctrl.onSubmit}
        disabled={ctrl.isLoading}
      />
    </View>
  )
}
