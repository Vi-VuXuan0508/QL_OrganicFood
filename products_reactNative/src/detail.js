import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'

const detail = ({navigation, route}) => {
    let {item: products} = route.params
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Detail</Text>
            </View>

            <View style={styles.viewImg}>
                <Image style={styles.image} source={{ uri :'http://10.0.2.2:3000/images/' +  products.image}} />               
            </View>

            <View style={styles.viewItem}>
              <Text style={styles.price}>Price: ${products.price}</Text>
              <Text style={styles.name}>{products.name}</Text>
              <Text style={styles.text}>
                Whether you need something for date night or want to impress a group of friends, here where's you start.    
              </Text>
            </View>
        </SafeAreaView>
    )
}

export default detail

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
    
      header: {
        paddingTop: 20,
        paddingBottom: 16,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#EBECF4',
        shadowColor: '#454D65',
        shadowOffset: {height: 5},
        shadowRadius: 15,
        shadowOpacity: 0.2,
        zIndex: 10,
      },
    
      headerTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 20,
      },

      viewImg: {
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },

      image: {
        width: 200,
        height: 240,
      },

      viewItem: {
        height: '100%',
        backgroundColor: 'white',
        paddingHorizontal: 50,
        paddingVertical: 30,
        marginTop: 3,
      },
    
      price: {
        fontSize: 17,
        fontWeight: "bold",
      },
    
      name: {
        fontSize: 17,
        marginTop: 5,
        color: '#757575'
      },

      text: {
        fontSize: 16,
        marginTop: 20,
        color: '#757575',
      },

})
