import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderColor: '#e6e6f0',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },  

  avatar: {
    backgroundColor: '#eee',
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
  },

  profileInfo: {
    marginLeft: 16,
  },

  name: {
    color: '#32264d',
    fontFamily: 'Archivo_700Bold',
    fontSize: 20,
  },

  subject: {
    color: '#6a6180',
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    marginTop: 4,
  },

  bio: {
    color: '#6a6180',
    fontFamily: 'Poppins_400Regular',
    marginHorizontal: 24,
    fontSize: 16,
    lineHeight: 24,
  },

  footer: {
    backgroundColor: '#fafafc',
    padding: 24,
    alignItems: 'center',
    marginTop: 24,
  },

  price: {
    color: '#6a6180',
    fontFamily: 'Poppins_400Regular',
  },

  priceValue: {
    color: '#8257e5',
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginLeft: 16,
  },

  favoriteButton: {
    backgroundColor: '#8257e5',
    width: 56,
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },

  favorited: {
    backgroundColor: '#e33d3d',
  },

  contactButton: {
    backgroundColor: '#04d361',
    flex: 1,
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },

  contactButtonText: {
    color: '#FFF',
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    marginLeft: 16,
  },

})

export default style;