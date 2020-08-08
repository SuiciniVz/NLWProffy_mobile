import { StyleSheet } from 'react-native'

const style = StyleSheet.create( {
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#8257E5',
    padding: 40,
  },
  title: {
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 180,
  },
  description: {
    fontFamily: 'Poppins_400Regular',
    marginTop: 24,
    color: '#d4c2ff',
    fontSize: 16,
    lineHeight: 26,
    maxWidth: 240,
  },
  okButton: {
    backgroundColor: '#04d361',
    marginVertical: 40,
    height: 58,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: 'center',
  },
  okButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Archivo_700Bold',
  },
})

export default style;