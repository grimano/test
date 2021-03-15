import React from "react";
import { View, FlatList, Text, TouchableHighlight, Button } from "react-native";
import someListener from "some-listener-library";

/*
  PURPOSE: The purpose of this exercise is for you to demonstrate
  your understanding and ability to work with React Native components.

  TASK: 
  - Refactor this component to make use of React Hooks.
  - Identify and address any performance issues.
  - Identify and address any poor code practices/implementation.
  - In the comment block at the end of the file, write any notes about
  what you did, anything you've identified and improved.
*/

/*
  THINGS TO NOTE: 
  - someListener returns a function with a remove method on it.

  - This component is implemented poorly on purpose.

  - This file is not meant to compile nor depend on the help of
  linting or formatting tools. It is simple enough that we expect
  you to identify what can be improved with it visually.
*/

class RefactorComponent extends React.Component {
  state = {
    currentTimeStamp: this.getTimeStamp(),
  };

  componentDidMount() {
    someListener.register((e) => {
      // This callback for the listener is arbitrary and can
      // be ignored for this exercise
    });
  }

  getTimeStamp() {
    const date = new Date();
    return date.toLocaleString();
  }

  render() {
    return (
      <View style={{ flex: 1, padding: 30 }}>
        <View style={{ width: "100%", height: 60 }}>
          <Text>Current Time: {this.state.currentTimeStamp}</Text>
          <Button
            title="Update Timestamp"
            onPress={() =>
              this.setState({ currentTimeStamp: this.getTimeStamp() })
            }
          />
        </View>
        <FlatList
          data={this.props.dataSet}
          renderItem={({ item, separators }) => (
            <TouchableHighlight
              onPress={() => this._onPress(item)}
              onShowUnderlay={separators.highlight}
              onHideUnderlay={separators.unhighlight}
            >
              <View style={{ backgroundColor: "white" }}>
                <Text>{item.title}</Text>
                <Text>{this.getTimeStamp()}</Text>
              </View>
            </TouchableHighlight>
          )}
        />
      </View>
    );
  }
}

export default RefactorComponent;

/*
  Write your notes below:

  To refactorize i change "class RefactorComponent extends React.Component" by  RefactorComponent =() with a arrow function
  Mostly creating a const with differents elements
  I create a const styles to order the styles of the Views using StyleSheet
  I import useState,useEffect from react, replacing componentDidMount and state
  In TouchableHighlight have a error because this._onPress(item) not exists
  I made changes with currentTimeStamp using useState
  I made my own changes, this is my code:

  */

 import React,{useState,useEffect} from "react";
 import { View, FlatList, Text, TouchableHighlight, Button, StyleSheet } from "react-native";
 import someListener from "some-listener-library";
 
 RefactorComponent =() => {
     
   const [currentTimeStamp,setCurrentTimeStamp] = useState(getTimeStamp());
 
   useEffect(() =>{
     someListener.register((e) => {
         // This callback for the listener is arbitrary and can
         // be ignored for this exercise
       });
   },[]) 
 
   const getTimeStamp = ()=> {
     const date = new Date();
     return date.toLocaleString();
   }
 
     return (
       <View style={styles.View1}>
         <View style={styles.View2}>
           <Text>Current Time: {currentTimeStamp}</Text>
           <Button
             title="Update Timestamp"
             onPress={() =>
                 setCurrentTimeStamp(getTimeStamp())
             }
           />
         </View>
         <FlatList
           data={this.props.dataSet}
           renderItem={({ item, separators }) => (
             <TouchableHighlight
               onPress={() => this._onPress(item)}
               onShowUnderlay={separators.highlight}
               onHideUnderlay={separators.unhighlight}
             >
               <View style={styles.View3}>
                 <Text>{item.title}</Text>
                 <Text>{getTimeStamp()}</Text>
               </View>
             </TouchableHighlight>
           )}
         />
       </View>
     );
 }
 
 const styles = StyleSheet.create({
   View1: {
     flex: 1, 
     padding: 30
   },
   View2: {
     width: "100%", 
     height: 60
   }, 
   View3: {
     backgroundColor: "white"
   },
 });
 
 export default RefactorComponent;






