import { faHome, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Dimensions, TouchableOpacity} from 'react-native';

const subjects = [
  { id: 1, name: 'Card 1' },
  { id: 2, name: 'Card 2' },
  { id: 3, name: 'Card 3' },
  { id: 4, name: 'Card 4' },
];

const cardGap = 16;

const cardWidth = (Dimensions.get('window').width - cardGap * 3) / 2;

export default function App() {
  return (
    <ScrollView>
      <View style={{flex:1}}>
        <View style={styles.container}>
          {/*Search Bar Start*/}
            <View style={styles.searchMargin}>
              <TextInput placeholder="Cari produk..."  style={styles.searchBar}/>
              <FontAwesomeIcon icon={faSearch} style={styles.searchIcon}/>
            </View>
          {/*Search Bar End*/}

          {/* Banner Start*/}
          <View>
              <View style={styles.bannerStyle}>
                <Text style={styles.bannerTextStyle}>Welcome to Our App!</Text>
              </View>
          </View>
          {/* Banner End*/}

          <View style={{backgroundColor:'#F1F1F1'}}>
            <View style={styles.content}>
              <Text style={styles.categoryTitle}>Kategori 1</Text>
              <View
                style={styles.cards}
              >
                {subjects.map((subject, i) => {
                  return (
                    <View
                      key={subject.id}
                      style={{
                        marginTop: cardGap,
                        marginLeft: i % 2 !== 0 ? cardGap : 0,
                        width: cardWidth,
                        height: 180,
                        backgroundColor: 'white',
                        borderRadius: 16,
                        shadowOpacity: 0.2,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <TouchableOpacity>
                        <Text>{subject.name}</Text>
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </View>
            </View>

            <View style={styles.content}>
              <Text style={styles.categoryTitle}>Kategori 2</Text>
              <View
                style={styles.cards}
              >
                {subjects.map((subject, i) => {
                  return (
                    <View
                      key={subject.id}
                      style={{
                        marginTop: cardGap,
                        marginLeft: i % 2 !== 0 ? cardGap : 0,
                        width: cardWidth,
                        height: 180,
                        backgroundColor: 'white',
                        borderRadius: 16,
                        shadowOpacity: 0.2,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <TouchableOpacity>
                        <Text>{subject.name}</Text>
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </View>
            </View>

          </View>

        </View>

        <View style={styles.botNav}>
          <View style={styles.menuSize}>
            <FontAwesomeIcon icon={faHome} style={{height: 24, width: 24, color: '#559F32', marginTop: 4}}/>
            <Text style={styles.textStyle}>Home</Text>
          </View>
          <View style={styles.menuSize}>
            <FontAwesomeIcon icon={faUser} style={styles.navIcon}/>
            <Text style={styles.textStyle}>Login</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFC6C6'
  },
  searchMargin: {
    marginHorizontal: 10,
    marginTop: 13,
    marginBottom: 13,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 12,
    height: 36,
    fontSize: 14,
    paddingLeft: 45,
    paddingRight: 20,
    backgroundColor: '#fff',
  },
  searchIcon: {
    position: 'absolute',
    top: 10,
    left: 12,
    color: '#545454',
  },
  bannerStyle: {
    maxWidth: '100%',
    height: 73, 
    marginHorizontal: 10,
    backgroundColor: '#B79CDE',
    borderRadius: 5,
    marginBottom: 13,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bannerTextStyle: {
    width: '100%',
    textAlignVertical: "center",
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  navIcon: {
    height: 24,
    width: 24,
    color: '#545454',
    marginTop: 4,
  },
  menuSize: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  categoryTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 16,
    marginTop: 9,
  },
  content:{
    marginBottom: 13
  },
  textStyle: {
    marginTop: 2,
    marginBottom: 2,
    color: '#545454',
    fontSize: 12,
    fontFamily: 'Roboto',
  },
  cards:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  botNav: {
    height: 41,
    width: 361,
    backgroundColor: '#fff',
    flexDirection: 'row',
    
  },
  
});
