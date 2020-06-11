import React from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native';

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      word:'',
    }
  }
  render(){
    return(
      <View>
        <View style={styles.header}>
          <Text style={styles.headerText}>The Dictionary App</Text>
        </View>
        <View style={styles.inputBox}>
          <TextInput 
          style={styles.inputBoxer}
          placeholder="Word"
          onChangeText={text =>this.setState({word:text})}
          value={this.state.word}>
          </TextInput>
        </View>
        <View style={styles.searchButtonView}>
          <TouchableOpacity 
          style={styles.searchButtonButton}
          onPress={()=>{
            <View>
              <Text>{this.state.word}</Text>
            </View>
          }}>
            <Text style={styles.searchButtonText}>
              Search
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header:{
    alignItems:'center',
    marginTop:25,
    backgroundColor:'grey',
    borderColor:'black',
    borderRadius:20,
    borderWidth:2
  },
  headerText:{
    fontSize:36,
    color:"white",
    fontWeight:'bold',
    fontFamily:'Arial',
    paddingTop:10,
    paddingBottom:10

  },
  inputBox:{
    alignItems:'center',
    borderWidth:3,
    marginTop:20,
    marginLeft:20,
    marginRight:20,
    borderRadius:15
  },
  inputBoxer:{
    height:40,
    fontSize:20
  },
  searchButtonView:{
    alignItems:'center',
    marginTop:10,
  },
  searchButtonButton:{
    borderWidth:3,
    padding:20,
    borderRadius:20,
    backgroundColor:'grey',
    borderColor:'#00ff00'
  },
  searchButtonText:{
    fontSize:20,
    color:'white',
    fontFamily:'Arial',
    fontWeight:'bold'
  }
});
