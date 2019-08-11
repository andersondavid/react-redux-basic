## Exemplos Básicos de React Redux

Alguns exemplos da conexão de uma aplicação ReactJS (podendo tambem se aplicar a React Native) com uma `store` do Redux.

### useDispatch e useSelector

O primeiro exemplo usa `useDispatch` e `useSelector` importados do `react-redux`.  
Essas funcções permitem a leitura e escrita de um `store` do Redux.

Para melhor utilização do `useDispatch` eu usei o __React Hooks__ para facilitar na hora de enviar o texto do `input` para o __action__ do `store`