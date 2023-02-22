import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

import Icon  from "react-native-vector-icons/MaterialCommunityIcons";

import COLORS from "../../const/colors";

const Input = ({label, iconName, error, onFocus=()=>{}, value, ...props})=>{

    console.log(value)
    //STATE QUE ALTERA A FORMATAÇÃO DE ERRO DO INPUT QUANDO ESSE É SELECIONADO PARA CORREÇÃO PELO USUÁRIO
    // const [isFocused, setIsFcoused] = React.useState(false);
    // console.log(isFocused);

    return(

            <View style={estilos.formContainer}>

                <Text style={estilos.inputLabel}>{label}</Text>

                <View style={[estilos.inputContainer, {borderColor: error ? COLORS.red : COLORS.darkBlue}]}>
                <Icon style={estilos.icon} name={iconName}/>
                    <TextInput 
                        style={{color:COLORS.darkBlue, flex:1}}
                        autoCorrect={false}
                        onFocus={()=>{
                            onFocus()
                            // setIsFcoused(true)
                        }}
                        value={value}
                        {...props}
                    />

                </View>

                {
                    error && (<Text style={estilos.erro}>{error}</Text>)
                }

            </View>
            
    );

}

const estilos = StyleSheet.create({

    formContainer:{
        marginBottom:20,
    },
    inputLabel:{
        marginVertical:5,
        fontSize:15,
        color:COLORS.gray,
    },
    inputContainer:{
        height:55,
        backgroundColor:COLORS.light,
        flexDirection:"row",
        paddingHorizontal:15,
        borderWidth:0.5,
        alignItems:"center",
    },
    erro:{
        color:COLORS.red,
        fontSize:12,
        marginTop:7,
    },
    icon:{
        fontSize:22,
        color:COLORS.darkBlue,
        marginRight:10,
    },
});

export default Input;