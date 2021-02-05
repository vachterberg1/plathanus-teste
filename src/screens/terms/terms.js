import React from 'react'
import {Text, View, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

const Terms = ({navigation}) => {
    return (
        <View>
            <View style={styles.headerTab}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-left" size={30} color="#205CBE"/>
                </TouchableOpacity>
                <Text style={styles.titleHeader}>Termos e Condições</Text>
                <View/>
                <View/>
            </View>
            <ScrollView style={{marginHorizontal: 20}}>
                <Text style={{fontSize: 16, lineHeight: 20, marginTop: 20}}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                </Text>

                <Text style={{fontSize: 16, lineHeight: 20, marginTop: 20,}}>
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                </Text>

                <Text style={{fontSize: 16, lineHeight: 20, marginTop: 20,}}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                </Text>

                <Text style={{fontSize: 16, lineHeight: 20, marginTop: 20,}}>
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                </Text>

                <Text style={{fontSize: 16, lineHeight: 20, marginTop: 20,}}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                </Text>

                <Text style={{fontSize: 16, lineHeight: 20, marginTop: 20,}}>
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                </Text>

                
            </ScrollView>
        </View>
    )
}

export default Terms;

const styles = StyleSheet.create({
headerTab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    marginHorizontal: 16,
},
titleHeader: {
    fontSize: 22,
    fontWeight: '500',
    color: '#205CBE',
}
})