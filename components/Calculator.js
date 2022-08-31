import React, { useState }  from'react';
import { View, Text, Button, TextInput } from'react-native';

export default function Calculator({ navigation }) {

    const [num1, setNum1] = useState(null);
    const [num2, setNum2] = useState(null);
    const [result, setResult] = useState(null);
    const [savedCalc, setSavedCalc] = useState([]);
  
    const saveCalculation = (currentCalc) => {
      setSavedCalc([...savedCalc, { key: currentCalc }])
    }
  
    const numAddition = () => {
      let intNum1 = parseInt(num1);
      let intNum2 = parseInt(num2);
  
      setResult(0);
      setResult(intNum1 + intNum2);
  
      saveCalculation(num1 + " + " + num2 + " = " + (intNum1 + intNum2));
    }
  
    const numSubstract = () => {
      let intNum1 = parseInt(num1);
      let intNum2 = parseInt(num2);
  
      setResult(0);
      setResult(intNum1 - intNum2);
  
      saveCalculation(num1 + " - " + num2 + " = " + (intNum1 - intNum2));
    }


    return (
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Result {result}</Text>

        <TextInput
        style={{width:200, borderColor: 'gray', borderWidth:1}}
        onChangeText={num1 => setNum1(num1)}
        value={num1}
        keyboardType="numeric"
      />
      
      <TextInput
        style={{width:200, borderColor: 'gray', borderWidth:1}}
        onChangeText={num2 => setNum2(num2)}
        value={num2}
        keyboardType="numeric"
      />

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Button onPress={numAddition}title="  +  " />
        <Button onPress={numSubstract}title="  -  " />
        <Button title="History" onPress={() => navigation.navigate('History', {data: savedCalc})} />
      </View>
    </View> 
    );
};