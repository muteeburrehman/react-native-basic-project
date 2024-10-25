import { StyleSheet, Image } from 'react-native';
import "expo-router/entry"

type Props = {
    imgSource: string | number; // Local images will be passed as numbers (require('./image.png'))
};

export default function ImageViewer({ imgSource }: Props) {
    const imageSource = typeof imgSource === 'string'
        ? { uri: imgSource } // For URI-based images (e.g. remote images)
        : imgSource; // For local images (e.g. require)

    return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
});
