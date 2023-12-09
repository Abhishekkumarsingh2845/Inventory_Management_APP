import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const suggestions = [
  'IPhone 14',
  'Lenovo Thinkpad',
  'Lenovo Thinkbook',
  'Iphone 13',
  'Printer',
];
const SearchScreen = ({navigation}) => {
  const [query, setQuery] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] =
    useState<string[]>(suggestions);

  const handleQueryChange = (text: string) => {
    setQuery(text);
    const filtered = suggestions.filter(suggestion =>
      suggestion.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredSuggestions(filtered);
  };

  const handleSearchClick = () => {
    console.log('Search clicked!');
  };

  const handleEnterClick = () => {
    console.log('Enter clicked!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.plusButton}>
          <Image
            style={styles.plusLogo}
            source={require('../assets/slogo.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.input}
            placeholder="Search"
            value={query}
            onChangeText={handleQueryChange}
            onFocus={handleSearchClick}
          />
          <TouchableOpacity onPress={handleSearchClick}>
            <Image
              style={styles.logo}
              source={require('../assets/search.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <FlatList
          data={filteredSuggestions}
          renderItem={({item}) => <Text style={styles.suggestion}>{item}</Text>}
          keyExtractor={item => item}
        />
        <TouchableOpacity style={styles.enterButton} onPress={handleEnterClick}>
          <Text style={styles.enterButtonText}>Enter</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusButton: {
    position: 'absolute',
    top: 10,
    alignSelf: 'center',
  },
  plusLogo: {
    width: 1000,
    height: 50,
    backgroundColor: 'black',
    right: 140,
  },
  content: {
    flex: 1,
    padding: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 3,
    padding: 5,
    marginBottom: 10,
    top: 20,
  },
  input: {
    flex: 1,
    height: 40,
    marginLeft: 5,
  },
  logo: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  suggestion: {
    padding: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    top: 30,
  },
  enterButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    bottom: 60,
  },
  enterButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SearchScreen;
