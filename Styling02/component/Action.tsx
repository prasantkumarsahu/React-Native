import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Action() {

    function openWebsite(websiteLink: string): void {
        Linking.openURL(websiteLink);
    }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                What's new in Javascript 21 - ES12
            </Text>
        </View>
        <Image
        source={{
            uri: 'https://cdn.pixabay.com/photo/2014/12/29/17/39/code-583073_1280.jpg'
        }}
        style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eaque ipsam molestiae cupiditate sunt veniam itaque culpa, unde cum accusamus fugiat corrupti, cumque assumenda alias, quo tempora esse expedita? Id consequuntur sunt corrupti eius provident iure eligendi exercitationem dolor aliquid facere, at molestiae, fugiat tempore. Cum ut temporibus eius assumenda adipisci omnis fugit, amet ullam quam autem non consectetur illum culpa mollitia consequatur hic laudantium at. Unde expedita quae provident!
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity 
            onPress={() => openWebsite('https://dev.to/naimlatifi5/ecmascript-2021-es12-new-features-2l67')}
            >
                <Text style={styles.socialLinks}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => openWebsite('https://www.instagram.com/im_prasantkumar/')}
            >
                <Text style={styles.socialLinks}>Follow me</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card: {
        width: 350,
        height: 300,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
    },
    cardElevated: {
        backgroundColor: '#E07C24',
        elevation: 3,
        shadowOffset: {
            height: 1,
            width: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600'
    },
    cardImage: {
        height: 100
    },
    bodyContainer: {
        padding: 10
    },
    footerContainer: {
        padding: 8,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    socialLinks: {
        fontSize: 16,
        color: '#000',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 6,
        elevation: 3,
        shadowOffset: {
            height: 1,
            width: 1
        },
    }
})