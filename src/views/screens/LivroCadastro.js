import React from "react";
import { SafeAreaView, ScrollView, View, Text, StyleSheet, Keyboard } from "react-native";

import COLORS from '../../const/colors';

import Input from "../components/Input";
import Button from "../components/Button";

import api from '../../service/api';

const LivroCadastro = ({navigation})=>{

    /***** CAPTURA DE DADOS DIGITADOS *****/
    //STATE QUE ARMAZENA OS DADOS DE ENTRADA:
    const [inputs, setInputs] = React.useState({
        titulo: '',
        descricao: '',
        capa: '',
    });

    //FUNÇÃO QUE RECEBE OS DADOS DOS CAMPOS:
    const handlerOnChance = (text, input)=>{
        setInputs((prevState)=>(
            {...prevState, [input]:text}
            // console.log('DIGITOU ALGO');
            // console.log(text);
            // console.log(prevState)
        ));
    }
    console.log(inputs);

    /***** VALIDAÇÃO DOS DADOS DIGITADOS *****/
    
    //STATE QUE ARMAZENA AS MENSAGENS DE ERRO:
    const [errors, setErrors] = React.useState({});

    //FUNÇÃO QUE CONFIGURA AS MENSAGENS DE ERRO NA STATE:
    const handlerErrors = (errorMessage, input)=>{
        setErrors((prevState)=>({...prevState, [input]:errorMessage}))
    }
    // console.log(errors);

    //FUNÇÃO DE VALIDAÇÃO:
    const validate = ()=>{

        Keyboard.dismiss();

        let valid = true;
        console.log('TESTE DE CLICK EM VALIDATE: ' + valid);

        if(!inputs.titulo){
            handlerErrors("Informe um título", "titulo");
            valid = false;
        }

        if(!inputs.descricao){
            handlerErrors("Informe uma descrição", "descricao");
            valid = false;
        }

        if(!inputs.capa){
            handlerErrors("Informe uma capa", "capa");
            valid = false;
        }

        if(valid){
            cadastro();
        }

    }

    const cadastro = ()=>{
        try{
            const response = api.post('/livro/cadastrarLivro', 
                {
                    titulo: inputs.titulo, 
                    descricao: inputs.descricao,
                    imagem: inputs.imagem,
                    tblUsuarioCodUsuario: 1
                }
            );
            setLivro("");
            navigation.goBack();
        }catch(error){}
    }

    return(

        <SafeAreaView style={estilos.safe}>

            <ScrollView style={estilos.scroll}>
                
                <Text style={estilos.textTitle}>CADASTRO DE LIVRO</Text>

                <View style={estilos.viewForm}>

                    <Input
                        label="Título"
                        iconName="book-outline"
                        error={errors.titulo}
                        onFocus={()=>{handlerErrors(null, 'titulo')}}
                        placeholder="Digite o título de livro"
                        onChangeText = {(text)=>handlerOnChance(text, "titulo")}
                    />

                    <Input
                        label="Descrição"
                        iconName="card-text-outline"
                        error={errors.descricao}
                        onFocus={()=>{handlerErrors(null, 'descricao')}}
                        placeholder="Digite a descrição do livro"
                        onChangeText = {(text)=>handlerOnChance(text, "descricao")}
                    />

                    <Input
                        label="Capa"
                        iconName="image-outline"
                        error={errors.capa}
                        onFocus={()=>{handlerErrors(null, 'capa')}}
                        placeholder="Informe a capa do livro"
                        onChangeText = {(text)=>handlerOnChance(text, "capa")}
                    />

                    <Button 
                        title="CADASTRAR"
                        onPress={validate}
                    />

                </View>

            </ScrollView>

        </SafeAreaView>

    )

}

const estilos = StyleSheet.create({

    safe:{
        flex:1,
        backgroundColor:COLORS.white,
    },
    scroll:{
        paddingTop:50,
        paddingHorizontal:20,
    },
    textTitle:{
        color:COLORS.black,
        fontSize:25,
        fontWeight:"bold",
    },
    textSubTitle:{
        color:COLORS.gray,
        fontSize:15,
        marginVertical:10,
    },
    viewForm:{
        marginVertical:20
    },

});

export default LivroCadastro;