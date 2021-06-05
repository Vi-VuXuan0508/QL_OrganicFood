import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView, FlatList, ScrollView, TouchableOpacity, Preview} from 'react-native'
import {FlatListSlider} from 'react-native-flatlist-slider';


const home = ({navigation}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch('http://10.0.2.2:3000/api/products')
            .then(res => res.json())
            .then((json) => setData(json))
            .catch((error) => console.error('error:', error));
    }, []);
    console.log('data:', data)

    const images = [
      {
        image:'https://www.refreshyourlife.in/uploads/refresh/articles/benifits-organic-729943_l.jpg',
      },
      {
        image:'https://freshomart.in/wp-content/uploads/2020/09/single-image-3.jpg',
      },
      {
        image:'https://m8q4i2j2.rocketcdn.me/wp-content/uploads/2019/09/Benefits-of-Organic-Food-for-the-Body-e1579459177544.jpg',
      },
     ]

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Home</Text>
        </View>

        <ScrollView>
          <FlatListSlider 
            data={images} 
          />

          <View style={styles.viewText1}>
            <Text style={styles.text1}>Danh sách sản phẩm</Text>
          </View>

          <FlatList
            numColumns={2}
            data={data}
            renderItem={({item}) => (
              <View style={styles.viewItem}>
                <TouchableOpacity onPress={() => navigation.navigate('Detail', {item})}>       
                  <Image style={styles.image} source={{ uri :'http://10.0.2.2:3000/images/' +  item.image}} />
                  <Text style={styles.price}>${item.price}</Text>
                  <Text style={styles.name}>{item.name}</Text>                         
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={item => item._id}
          />
        </ScrollView>
      </SafeAreaView>
    )
}

export default home;

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

  headerIcon: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  viewText1: {
    marginTop: 10,
    marginBottom: 5,
    backgroundColor: 'white',
    padding: 10,
  },

  text1: {
    fontSize: 16,
    marginLeft: 10,
  },

  viewItem: {
    paddingHorizontal: 30,
    paddingVertical: 35,
    marginVertical: 8,
    marginHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowRadius: 15,
    justifyContent: 'center',
    alignItems: 'center', 
    opacity: 1,
    flex: 1,
    width: 'auto',
    height: 'auto',
  },

  image: {
    width: 130,
    height: 170,
    marginBottom: 10,
  },

  price: {
    fontSize: 16,
    fontWeight: "bold",
  },

  name: {
    fontSize: 14,
    marginTop: 5,
  },
})
