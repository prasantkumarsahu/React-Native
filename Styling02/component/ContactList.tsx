import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {

    const contacts = [
        {
          uid: 1,
          name: 'Prasant',
          status: 'Just an extra ordinary teacher',
          imageUrl: 'https://cdn.pixabay.com/photo/2014/04/12/14/59/portrait-322470_1280.jpg'
        },
        {
          uid: 2,
          name: 'Aarav',
          status: 'Aspiring Developer',
          imageUrl: 'https://cdn.pixabay.com/photo/2022/09/08/15/16/cute-7441224_1280.jpg'
        },
        {
          uid: 3,
          name: 'Meera',
          status: 'Creative Designer',
          imageUrl: 'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553_1280.jpg'
        },
        {
          uid: 4,
          name: 'Rohan',
          status: 'Tech Enthusiast',
          imageUrl: 'https://cdn.pixabay.com/photo/2024/07/25/22/30/model-8922375_1280.jpg'
        },
        {
          uid: 5,
          name: 'Ananya',
          status: 'Digital Marketer',
          imageUrl: 'https://cdn.pixabay.com/photo/2016/11/22/21/42/woman-1850703_1280.jpg'
        }
      ];
      

  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView
      style={styles.container}
      scrollEnabled={false}
      >
        {contacts.map(({uid, name, status, imageUrl}) => (
            <View key={uid} style={styles.userCard}>
                <Image
                source={{
                    uri: imageUrl
                }}
                style={styles.userImage}
                />
                <View>
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.userStatus}>{status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        paddingHorizontal: 16,
        marginBottom: 4
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: '#343',
        borderRadius: 60 / 2
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 14,
        elevation: 5
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff'
    },
    userStatus: {
        fontSize: 12,
        color: '#bbb'
    }
})