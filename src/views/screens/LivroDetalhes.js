import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import COLORS from '../../const/colors';

import api from '../../service/api';

import capaLivro150 from '../../assets/livros/lor150.png';
import capaLivro100 from '../../assets/livros/lor100.png';

const LivroDetalhes = ({route, navigation})=>{

    const {cod_livro} = route.params;

    const[livro, setLivro] = useState({
        cod_livro:'',
        titulo:'',
        descricao:'',
        imagem:'',
    });

    // console.log(cod_livro);

    useEffect(()=>{

        const subs = navigation.addListener('focus', ()=>{
            api.get(`/livro/listarLivroId/${cod_livro}`)
            .then((data)=>{
                setLivro(data.data[0]);
            });
        });
    }, []);

    const excluir = ()=>{
        try{

            const response = api.delete(`/livro/excluirLivro/${livro.cod_livro}`);
            setLivro("")
            navigation.navigate('LivroListagem');

        }catch(error){}
    }
    // console.log(livro);

    return (

        <ScrollView>

            <View style={estilos.container}>

                <View style={estilos.post}>
                    
                    <Image  style={estilos.imagem} source={capaLivro150}/>
                    <Text style={estilos.titulo}>{livro.titulo}</Text>
                    <Text style={estilos.detalhes}>{livro.descricao}</Text>
                    
                    <View style={estilos.botoes}>

                        <TouchableOpacity 
                            style={estilos.botao} 
                            onPress={()=>navigation.navigate('LivroEdicao', {cod_livro:livro.cod_livro})}>
                            <Text 
                            style={[estilos.textoBotao, {backgroundColor:COLORS.green}]}>
                                EDITAR
                            </Text>

                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={estilos.botao}
                            onPress={()=>{excluir()}}>
                            <Text 
                            style={[estilos.textoBotao, {backgroundColor:COLORS.red}]}>
                                EXLCUIR
                            </Text>
                        </TouchableOpacity>

                    </View>

                </View>

            </View>

        </ScrollView>

    );

}

const estilos = StyleSheet.create({
    container:{
        alignItems:'center',
    },
    post:{
        width:'95%',
        alignItems:'center',
        backgroundColor:'#ccc',
        padding:15,
        marginVertical:5,
        borderRadius:6,
        elevation:5,
    },
    imagem:{
        // width:48,
        // height:48,
        borderRadius:6,
        marginVertical:16,
        marginLeft:16,
    },
    titulo:{
        width:'100%',
        fontSize:20,
        fontWeight:'bold',
        textAlign:'left'
    },
    detalhes:{
        width:'100%',
        fontSize:16,
        textAlign:'justify'
    },
    botoes:{
        flex:1,
        flexDirection:'row',
        width:'100%',
        // backgroundColor:'#f00',
        padding:10,
        justifyContent:"center",
    },
    botao:{
        width:'50%',
        marginHorizontal:10,
    },
    textoBotao:{
        padding:10,
        textAlign:'center',
        color:COLORS.white,
        fontWeight:"bold",
        fontSize:16,
    }

});

export default LivroDetalhes;