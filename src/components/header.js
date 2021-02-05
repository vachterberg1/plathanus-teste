import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native'
import styles from './styles-header'
import bgImage from '../assets/upperbg.png'
import dotsImage from '../assets/dots.png'

const Header = (props) => {
    return (
        <ImageBackground style={styles.ContainerBackground} source={bgImage}>
            <ImageBackground source={dotsImage} style={styles.DotsBg}>
                <Text style={styles.textTitle}>{props.title}</Text>
                <Text style={styles.textNormal}>{props.text}</Text>
            </ImageBackground>
        </ImageBackground>
    )
}

export default Header;