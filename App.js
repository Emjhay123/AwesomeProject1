import React from "react"
import {Text, StyleSheet} from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './appStyles.js'; //Import External Style 
import { ProfileCard } from './components/profileCard/profile.js'

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{'My First App'}</Text>

      <ProfileCard
        username={'Marty Joash E. Vapor'}
        description={
          'An IT student specializing in System Engineering who aspires to become a Cloud Engineer'
        }
        imgUrl={'./MartyPic.png'}
      />
    </SafeAreaView>
    
  );
};

export default App; 
//=========== INTERNAL STYLING ==============
// const styles = StyleSheet.create({
//   container:{
//     flex: 1,
//     justifyContent:'center',
//     alignItems: 'center',
//     backgroundColor: '#f0f0f0',
//   },
//   text:{
//     fontStyle: 'italic',
//     fontSize: 24,
//     fontWeight: 'bold',
//     backgroundColor: '#000000',
//     color: 'white',
//   },
// });
