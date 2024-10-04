import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trendy Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image 
        source={{
            uri: 'https://cdn.pixabay.com/photo/2023/08/01/06/19/iceberg-8162195_1280.jpg'
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Iceberg</Text>
            <Text style={styles.cardLabel}>Blue Ice, Antarctic</Text>
            <Text style={styles.cardDescription}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque sunt a accusamus aut alias id consectetur quas sequi nihil beatae voluptas excepturi cum quaerat voluptatum harum, iste adipisci perferendis repellat.</Text>
            <Text style={styles.cardFooter}>12 hours away.</Text>
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
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    cardElevated: {
        backgroundColor: '#FFFFFF',
        elevation: 3,
        shadowOffset: {
            height: 1,
            width: 1
        }
    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    cardTitle: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4
    },
    cardLabel: {
        color: '#0A79DF',
        fontSize: 14,
        marginBottom: 6
    },
    cardDescription: {
        color: '#0ABDE3',
        fontSize: 12,
        marginBottom: 12,
        marginTop: 6
    },
    cardFooter: {
        color: '#000000'
    },
})