import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LivroCadastro from './src/views/screens/LivroCadastro';
import LivroListagem from './src/views/screens/LivroListagem';
import LivroDetalhes from './src/views/screens/LivroDetalhes';
import LivroEdicao from './src/views/screens/LivroEdicao';

const Stack = createNativeStackNavigator();

const App = ()=>{

  return(

    <NavigationContainer>

            <Stack.Navigator screenOptions={false}>

            <Stack.Screen
                name="LivroListagem"
                component={LivroListagem}
                options={{title:'LISTAGEM DE LIVROS'}}
                />

            <Stack.Screen
                name="LivroCadastro"
                component={LivroCadastro}
                options={{title:'CADASTRO DE LIVROS'}}
                />

            <Stack.Screen
                name="LivroDetalhes"
                component={LivroDetalhes}
                options={{title:'DETALHES DE LIVROS'}}
                />

            <Stack.Screen
                name="LivroEdicao"
                component={LivroEdicao}
                options={{title:'EDIÇÃO DE LIVROS'}}
                />

            </Stack.Navigator>

        </NavigationContainer>

  );

}

export default App;