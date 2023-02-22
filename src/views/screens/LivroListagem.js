import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import COLORS from '../../const/colors';

import api from '../../service/api';

import capaLivro150 from '../../assets/livros/lor150.png';
import capaLivro100 from '../../assets/livros/lor100.png';

const LivroListagem = ({navigation})=>{

    const [livros, setLivros] = useState([]);

    useEffect(()=>{

        const subs = navigation.addListener('focus', ()=>{
            
            api.get('/livro/listarLivro')
            .then((data)=>{
                setLivros(data.data);
            })

        });

    }, [])
    return(
        
        <ScrollView>

            <View style={estilos.container}>
                {
                    livros.map(
                        livro=>(

                                <TouchableOpacity 
                                    key={livro.cod_livro} 
                                    style={estilos.post}
                                    onPress={()=>navigation.navigate('LivroDetalhes', {cod_livro:livro.cod_livro})}>

                                    <View>
                                        <Image style={estilos.imagem} source={capaLivro150}/>
                                        <Text style={estilos.titulo}>{livro.titulo}</Text>
                                    </View>

                                </TouchableOpacity>
                        )
                    )
                }
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
        
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
        
    },
});

export default LivroListagem;