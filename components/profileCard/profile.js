import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { styles } from './profileStyles.js'

const openFacebook = () => {
    Linking.openURL('https://www.facebook.com/marty.espiritu.9');
};
const openInsta = () => {
    Linking.openURL('https://www.instagram.com/marteaser.exe/');
};
const openGithub = () => {
    Linking.openURL('https://github.com/Emjhay123');
};

export const ProfileCard = ({username, description, imgUrl}) => {
    return (
        <View style = {styles.profileCard}>
            <View style = {styles.header}>
                <View>
                    <Image 
                        style={styles.avatar}
                        source={require('../../assets/MartyPic.png')}
                    />
                </View>
                <View>
                    <Text style={styles.username}>{username}</Text>
                    <Text style={styles.desc}>{description}</Text>
                </View>
            </View>
            <View style = {styles.socialMediaIcons}>
                <TouchableOpacity onPress={openFacebook}>
                    <Image 
                        style={styles.icons}
                        source={require('../../assets/fb.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={openInsta}>
                    <Image 
                        style={styles.icons}
                        source={require('../../assets/ig.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={openGithub}>
                    <Image 
                        style={styles.icons}
                        source={require('../../assets/github.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProfileCard;