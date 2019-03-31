import React from "react";
import { View, Text, ScrollView , StyleSheet} from "react-native";
export default class movieList extends React.Component {
  constructor(props){
    super(props)
  }
  static navigationOptions = {
    title: 'Movies Detail',
    headerStyle: {
        backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
};
  
  displayData=(data ,value)=>{
    return(
    <View style={styles.displayTextContainer}>
    <View style={styles.TextViewContainer}>
    <View style={{width:"30%", }}>
    <Text style={{fontSize:16, }}> {data} </Text>
    </View>
    <View style={{width:"70%", }}>
    <Text style={{fontSize:16}}>{value }</Text>
    </View>
 </View>
     <View style={{height:1,marginTop:2,  width:"100%", backgroundColor:"black"}}></View>
     </View>
 )
  }

  render() {
    const { navigation } = this.props;
    var itemId = navigation.getParam('item', 'NO-ID');
    return (
      <View style={styles.container}>
      <ScrollView >
       {this.displayData("Title: ",itemId.Title )}
       {this.displayData("Year: ",itemId.Year )}
       {this.displayData("Rated: ",itemId.Rated )}
       {this.displayData("Released: ",itemId.Released)}
       {this.displayData("RunTime: ",itemId.Runtime )}
       {this.displayData("Genre: ",itemId.Genre )}
       {this.displayData("Director: ",itemId.Director )}
       {this.displayData("Writer: ",itemId.Writer )}
       {this.displayData("Actors: ",itemId.Actors )}
       {this.displayData("Plot: ",itemId.Plot )}
       {this.displayData("Language: ",itemId.Language )}
       {this.displayData("Country: ",itemId.Country )}
       {this.displayData("Awards: ",itemId.Awards )}
       {this.displayData("Writer: ",itemId.Writer )}
       {itemId['Ratings ']===undefined ? null:  this.displayData("Ratings: ",itemId['Ratings ']) }
       {itemId["Metascore "]===undefined ? null:  this.displayData("Metascore: ",itemId["Metascore "]) }
       {itemId["imdbRating "]===undefined ? null:  this.displayData("imdbRating: ",itemId["imdbRating "]) }
       {itemId["imdbVotes "]===undefined ? null:  this.displayData("imdbVotes: ",itemId["imdbVotes "]) }
       {itemId["imdbID "]===undefined ? null:  this.displayData("imdbID: ",itemId["imdbID "]) }
       {itemId["Type "]===undefined ? null:  this.displayData("Type: ",itemId["Type "]) }
       {itemId["DVD "]===undefined ? null:  this.displayData("DVD: ",itemId["DVD "]) }
       {itemId["BoxOffice "]===undefined ? null:  this.displayData("BoxOffice: ",itemId["BoxOffice "]) }
       {itemId["Production "]===undefined ? null:  this.displayData("Production: ",itemId["Production "]) }
       {itemId["Website "]===undefined ? null:  this.displayData("Website: ",itemId["Website "]) }
       {itemId["Response "]===undefined ? null:  this.displayData("Response: ",itemId["Response "]) }

      </ScrollView>
            </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor:'yellow'
  },
displayTextContainer:{
  width:"100%",marginTop:1, marginRight:2, marginLeft:2, backgroundColor:'yellow'
},
TextViewContainer:{
  flexDirection:"row", width:"98%",marginTop:5
}
})