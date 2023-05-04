import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeToken = async (token) => {
  try {
    await AsyncStorage.setItem('token', token);
  } catch (error) {
    console.error(error);
  }
};

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (token !== null) {
      return token;
    }
  } catch (error) {
    console.error(error);
  }
};
