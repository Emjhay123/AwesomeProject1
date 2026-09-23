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
          'A 4th year student-trainee studying Bachelor of Science in Information Technology at Colegio de San Juan de Letran. I am a motivated and dedicated individual who is always eager to learn and grow in the field of technology. I have a strong interest in Networking, Cybersecurity, and Software Development. I am also a team player, enjoy collaborating with others, and provide assistance that is within my capabilities to achieve common goals and produce quality results.'
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
